import track from "./TrackList.module.css";
import { useState } from "react";
export default function TrackList({ tracks, currentId, onSelect }) {
  const [selectedMusic, setSelectedMusic] = useState(null);
  // function onHandleSelectMusic(){
  //   setSelectedMusic(t.)
  // }
  return (
    <>
      <div className={track.title}>
        <h1>My Tracks</h1>
      </div>
      <div className={track.container}>
        {tracks.map((t) => (
          <div className={track.conttainerForAbsolute}>
            <button
              className={`${track.track} ${
                selectedMusic === t.id ? track.active : ""
              }`}
              key={t.id}
              onClick={() => {
                onSelect(t.id);
                setSelectedMusic(t.id);
              }}
              aria-current={t.id === currentId ? "true" : "false"}
            >
              <div className={track.cardImg}>
                <img src={t.imgSrc} alt="" />
              </div>
              <div
                style={{ background: "transparent" }}
                className={track.textContainer}
              >
                <div style={{ background: "transparent", color: "black" }}>
                  {t.title}
                </div>
                <div
                  style={{
                    opacity: 0.7,
                    fontSize: 12,
                    background: "transparent",
                    color: "black",
                  }}
                >
                  {t.artist} {t.meta ? `• ${t.meta}` : ""}
                </div>
              </div>
              {/* <button className={track.appleMusic}>
                <img src="/apple-1-54x64.png" />
              </button> */}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
