import track from "./TrackList.module.css";
import { useState, useEffect } from "react";
export default function TrackList({ tracks, currentId, onSelect }) {
  const [selectedMusic, setSelectedMusic] = useState(null);

  return (
    <>
      <div className={track.title}>
        <h1>My Tracks</h1>
      </div>
      <div className={track.container}>
        {tracks.map((t) => (
          <div className={track.conttainerForAbsolute} key={t.id}>
            <button
              className={`${track.track} ${
                selectedMusic === t.id ? track.active : ""
              }`}
              onClick={() => {
                onSelect(t.id);
                setSelectedMusic(t.id);
              }}
              aria-current={t.id === currentId ? "true" : "false"}
            >
              <div className={track.cardImg}>
                <img
                  src={`https://zxzpm6yxp7.eu-central-1.awsapprunner.com/${t.photo_path}`}
                  alt=""
                />
              </div>
              <div className={track.textContainer}>
                <div>{t.title}</div>
                <div>
                  {t.artist} {t.description ? `• ${t.description}` : ""}
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
