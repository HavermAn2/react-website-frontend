import { useEffect, useRef, useState } from "react";
import track from "./SlimPlayer.module.css";

const allAudios = []; // общий список для “паузы остальных”

export default function SlimPlayer({ trackSrc, title, meta, imgSrc }) {
  const playerRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const player = playerRef.current;
    if (!player || !trackSrc) return;

    // создаём Audio-объект (как у тебя в скрипте)
    const audio = new Audio(trackSrc);
    audio.preload = "metadata";
    audioRef.current = audio;
    allAudios.push(audio);

    const playBtn = player.querySelector(`.${track.plBtn}`);
    const range = player.querySelector(`.${track.plRange}`);
    const bufferBar = player.querySelector(`.${track.plBuffer}`);
    const timeEl = player.querySelector(`.${track.plTime}`);
    const volBtn = player.querySelector(`.${track.plVol}`);
    if (range) {
      range.value = 0;
      range.max = 0;
    }
    if (timeEl) {
      timeEl.textContent = "00:00/00:00";
    }
    const formatTime = (sec) => {
      if (!sec || Number.isNaN(sec)) return "00:00";
      sec = Math.floor(sec);
      const m = Math.floor(sec / 60);
      const s = sec % 60;
      return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
    };

    const updateRangeBg = () => {
      if (!range) return;
      const val = parseFloat(range.value) || 0;
      const max = parseFloat(range.max) || 1;
      const percent = (val / max) * 100;
      range.style.backgroundSize = `${percent}% 6px`;
    };

    const onLoaded = () => {
      if (!range || !timeEl) return;
      range.max = audio.duration || 0;
      timeEl.textContent = `${formatTime(0)}/${formatTime(audio.duration)}`;
      updateRangeBg();
    };

    const onTime = () => {
      if (!range || !timeEl) return;
      range.value = audio.currentTime || 0;
      updateRangeBg();
      timeEl.textContent = `${formatTime(audio.currentTime)}/${formatTime(
        audio.duration,
      )}`;
    };

    const onProgress = () => {
      if (!audio.duration || !bufferBar) return;
      try {
        const end = audio.buffered.end(audio.buffered.length - 1);
        const percent = (end / audio.duration) * 100;
        bufferBar.style.width = `${percent}%`;
      } catch {}
    };

    const onPlayClick = () => {
      if (!playBtn) return;

      if (audio.paused) {
        // пауза всех остальных
        allAudios.forEach((a) => {
          if (a !== audio) a.pause();
        });

        document
          .querySelectorAll(`[data-player="slim"] .${track.plBtn}`)
          .forEach((btn) => {
            if (btn !== playBtn) btn.dataset.state = "paused";
          });

        audio.play();
        playBtn.dataset.state = "playing";
      } else {
        audio.pause();
        playBtn.dataset.state = "paused";
      }
    };

    const onRangeInput = () => {
      if (!range || !timeEl) return;
      const val = parseFloat(range.value) || 0;
      audio.currentTime = val;
      updateRangeBg();
      timeEl.textContent = `${formatTime(audio.currentTime)}/${formatTime(
        audio.duration,
      )}`;
    };

    const onVolClick = () => {
      if (!volBtn) return;
      audio.muted = !audio.muted;
      volBtn.classList.toggle(track.isMuted, audio.muted);
    };

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("progress", onProgress);

    playBtn?.addEventListener("click", onPlayClick);
    range?.addEventListener("input", onRangeInput);
    volBtn?.addEventListener("click", onVolClick);
    audio
      .play()
      .then(() => {
        if (playBtn) playBtn.dataset.state = "playing";
      })
      .catch(() => {
        if (playBtn) playBtn.dataset.state = "paused";
      });
    return () => {
      audio.pause();
      audio.src = "";
      audioRef.current = null;

      const idx = allAudios.indexOf(audio);
      if (idx !== -1) allAudios.splice(idx, 1);

      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("progress", onProgress);

      playBtn?.removeEventListener("click", onPlayClick);
      range?.removeEventListener("input", onRangeInput);
      volBtn?.removeEventListener("click", onVolClick);
    };
  }, [trackSrc, track]);

  return (
    <div className={track.track}>
      <img className={track.track__cover} src={imgSrc} alt="Cover" />

      <div className={track.track__body}>
        <h3 className={track.track__title}>{title}</h3>
        <p className={track.track__meta}>{meta}</p>

        {/* data-player нужно, чтобы находить другие плееры */}
        <div
          ref={playerRef}
          data-player="slim"
          className={`${track.player} ${track.playerSlim}`}
          aria-label="Audio player"
        >
          <button
            className={track.plBtn}
            aria-label="Play"
            title="Play"
            data-state="paused"
            type="button"
          />

          <div className={track.plTimeline}>
            <input
              className={track.plRange}
              type="range"
              min="0"
              max="100"
              defaultValue="0"
              step="0.1"
              aria-label="Seek"
            />
            <div className={track.plBuffer} aria-hidden="true" />
          </div>

          <div className={track.plTime} aria-live="polite">
            00:00/00:00
          </div>

          <button
            className={track.plVol}
            aria-label="Mute/Unmute"
            title="Volume"
            type="button"
          >
            <svg className={`${track.icon} ${track.on}`} viewBox="0 0 24 24">
              <path fill="currentColor" d="M3 10v4h4l5 5V5l-5 5H3z" />
              <path fill="currentColor" d="M16 8a5 5 0 0 1 0 8" />
              <path fill="currentColor" d="M19 5a9 9 0 0 1 0 14" />
            </svg>

            <svg className={`${track.icon} ${track.off}`} viewBox="0 0 24 24">
              <path fill="currentColor" d="M3 10v4h4l5 5V5l-5 5H3z" />
              <path fill="currentColor" d="M21 3 3 21" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
