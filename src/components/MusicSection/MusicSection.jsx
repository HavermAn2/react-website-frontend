import music from "./MusicSection.module.css";
import SlimPlayer from "./SlimPlayer";
import { useMemo, useState, useEffect } from "react";
import TrackList from "./TrackList";

const API_BASE = "https://zxzpm6yxp7.eu-central-1.awsapprunner.com";

function toMediaUrl(path) {
  return `${API_BASE}/${path}`;
}

export default function MusicSection() {
  const [slimData, setSlimData] = useState([]);
  const [currentId, setCurrentId] = useState([]);
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
        if (list.length && currentId == null) {
          setCurrentId(list[0].id);
        }
      })
      .catch(console.error);
    return () => {
      cancelled = true;
    };
  }, []);

  if (!current) {
    return (
      <section className={music.music} id="videos">
        <div className={music.container}>
          <h2 className={music.title}>Listen to My Music</h2>
          <p className={music.lead}>Loading…</p>
        </div>
      </section>
    );
  }

  return (
    <section className={music.music} id="videos">
      <div className={music.container}>
        <h2 className={music.title}>Listen to My Music</h2>
        <p className={music.lead}>
          Explore my collection of arrangements and original compositions. From
          classical elegance to contemporary interpretations of popular hits.
        </p>
      </div>

      <div style={{ marginTop: 16 }}>
        <SlimPlayer
          trackSrc={toMediaUrl(current.music_path)}
          title={current.title}
          meta={current.description}
          imgSrc={toMediaUrl(current.photo_path)}
        />
      </div>

      <TrackList
        tracks={slimData}
        currentId={currentId}
        onSelect={setCurrentId}
      />
    </section>
  );
}
