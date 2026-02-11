import music from "./MusicSection.module.css";
import SlimPlayer from "./SlimPlayer";
import { useMemo, useState, useEffect } from "react";
import TrackList from "./TrackList";

const API_BASE = "http://localhost:8000";

// helper: из того, что пришло с бэка (локальный путь/filename/уже-URL) делаем нормальный URL
function toMediaUrl(kind, path) {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path; // уже URL
  const filename = String(path).split(/[\\/]/).pop(); // берём только имя файла
  return `${API_BASE}/${kind}/${encodeURIComponent(filename)}`;
}

export default function MusicSection() {
  const [slimData, setSlimData] = useState([]);
  const [currentId, setCurrentId] = useState(null);

  // текущий трек берём ИЗ slimData
  const current = useMemo(() => {
    if (!slimData.length) return null;
    return slimData.find((t) => t.id === currentId) ?? slimData[0];
  }, [slimData, currentId]);

  useEffect(() => {
    let cancelled = false;

    fetch(`${API_BASE}/get_music`)
      .then((response) => response.json())
      .then((res) => {
        const list = (res.data ?? []).map(
          ([id, title, description, photo_path, music_path]) => ({
            id,
            title,
            description,
            photo_path,
            music_path,
          }),
        );

        if (cancelled) return;

        setSlimData(list);
        // если ещё не выбран текущий — ставим первый
        if (list.length && currentId == null) {
          setCurrentId(list[0].id);
        }
      })
      .catch(console.error);

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!current) {
    return (
      <section className={music.music} id="videos">
        <div className={music.music__inner}>
          <h2 className={music.music__title}>Listen to My Music</h2>
          <p className={music.music__lead}>Loading…</p>
        </div>
      </section>
    );
  }

  return (
    <section className={music.music} id="videos">
      <div className={music.music__inner}>
        <h2 className={music.music__title}>Listen to My Music</h2>
        <p className={music.music__lead}>
          Explore my collection of arrangements and original compositions. From
          classical elegance to contemporary interpretations of popular hits.
        </p>
      </div>

      <div style={{ marginTop: 16 }}>
        <SlimPlayer
          trackSrc={toMediaUrl("music", current.music_path)}
          title={current.title}
          meta={current.description}
          imgSrc={toMediaUrl("src", current.photo_path)}
        />
      </div>

      <TrackList
        tracks={slimData}
        currentId={currentId} // ✅ передаём id, не объект
        onSelect={setCurrentId}
      />
    </section>
  );
}
