"use client";

import type { CSSProperties } from "react";
import { useRef, useState, useSyncExternalStore } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { videos } from "@/lib/videos";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PORTRAIT = "(orientation: portrait)";

function subscribeToOrientation(onChange: () => void) {
  const query = window.matchMedia(PORTRAIT);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function meta(src: string) {
  const found = videos[src];
  if (!found) {
    throw new Error(`Unknown video "${src}". Run npm run videos:optimize.`);
  }
  return found;
}

type Props = {
  portrait: string;
  landscape: string;
  label: string;
  caption: string;
};

export function Film({ portrait, landscape, label, caption }: Props) {
  const isPortrait = useSyncExternalStore(
    subscribeToOrientation,
    () => window.matchMedia(PORTRAIT).matches,
    () => false,
  );

  const root = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const wide = meta(landscape);
  const tall = meta(portrait);

  useGSAP(
    () => {
      const figure = root.current;
      const el = video.current;
      if (!figure || !el) return;

      const REVEAL_AT = 0.88;

      ScrollTrigger.create({
        trigger: figure,
        start: `top ${REVEAL_AT * 100}%`,
        once: true,
        onEnter: () => setRevealed(true),
      });

      if (figure.getBoundingClientRect().top < window.innerHeight * REVEAL_AT) {
        setRevealed(true);
      }

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const inView = ScrollTrigger.create({
        trigger: figure,
        start: "top 85%",
        end: "bottom 15%",
        onToggle: ({ isActive }) => {
          if (isActive) void el.play().catch(() => undefined);
          else el.pause();
        },
      });

      if (inView.isActive) void el.play().catch(() => undefined);
    },
    { dependencies: [isPortrait] },
  );

  const togglePlay = () => {
    const el = video.current;
    if (!el) return;
    if (el.paused) void el.play().catch(() => undefined);
    else el.pause();
  };

  const toggleSound = () => {
    const el = video.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
    if (el.paused) void el.play().catch(() => undefined);
  };

  return (
    <figure
      className={`c-film${revealed ? " is-in" : ""}${playing ? " is-playing" : ""}`}
      ref={root}
      style={
        {
          "--film-wide": wide.width / wide.height,
          "--film-tall": tall.width / tall.height,
        } as CSSProperties
      }
    >
      <div className="c-film__frame">
        <video
          aria-label={label}
          key={isPortrait ? portrait : landscape}
          loop
          muted={muted}
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
          playsInline
          preload="none"
          ref={video}
        >
          <source
            media={PORTRAIT}
            src={`${portrait}.mp4`}
            type="video/mp4"
          />
          <source src={`${landscape}.mp4`} type="video/mp4" />
        </video>

        <picture className="c-film__poster">
          <source media={PORTRAIT} srcSet={tall.poster} />
          <img alt="" height={wide.height} src={wide.poster} width={wide.width} />
        </picture>
      </div>

      <figcaption className="c-film__bar">
        <span className="c-film__caption">{caption}</span>

        <span className="c-film__controls">
          <button
            className="c-film__control underline-effect"
            onClick={togglePlay}
            type="button"
          >
            {playing ? "Pause" : "Play"}
          </button>
          <button
            className="c-film__control underline-effect"
            onClick={toggleSound}
            type="button"
          >
            {muted ? "Sound on" : "Sound off"}
          </button>
        </span>
      </figcaption>
    </figure>
  );
}
