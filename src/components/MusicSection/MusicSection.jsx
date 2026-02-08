import music from "./MusicSection.module.css";
import SlimPlayer from "./SlimPlayer";
import { useMemo, useState } from "react";
import TrackList from "./TrackList";

const TRACKS = [
  {
    id: 1,
    title: "No Time To Die",
    meta: "(Slavrada Harp Edition) (Remastered)",
    imgSrc: "/Frame 39.png",
    trackSrc: "/src/music/Billie Eilish - No Time To Die_(play.muzfan.net).mp3",
    appleMusicUrl: "www//awdsdadk;awkd;.com",
  },
  {
    id: 2,
    title: "Another Tradawdack",
    meta: "(Live)",
    imgSrc: "/Rectangle 3.png",
    trackSrc: "/webSiteK/src/music/Джакомо, SEMY - Стоп мотор.mp3",
    appleMusicUrl: "www//awdsdadk;awkd;.com",
  },
  {
    id: 3,
    title: "Another Tradawdack",
    meta: "(Live)",
    imgSrc: "/Rectangle 3.png",
    trackSrc: "/audio/track2.mp3",
    appleMusicUrl: "www//awdsdadk;awkd;.com",
  },
];

export default function MusicSection() {
  const tracks = useMemo(() => TRACKS, []);
  const [currentId, setCurrentId] = useState(tracks[0]?.id);
  const current = tracks.find((t) => t.id === currentId);
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
          trackSrc={current.trackSrc}
          title={current.title}
          meta={current.meta}
          imgSrc={current.imgSrc}
        />
      </div>
      <TrackList tracks={tracks} currentId={current} onSelect={setCurrentId} />
    </section>
  );
}
