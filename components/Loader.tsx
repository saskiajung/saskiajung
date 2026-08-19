"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { site } from "@/lib/projects";

gsap.registerPlugin(useGSAP);

const HOLD = 0.6;
const EXPAND = 1.6;
const FADE = 0.55;
const VISITED = "sj-visited";

const parts = [
  { text: site.first.charAt(0), grow: false },
  { text: site.first.slice(1), grow: true },
  { text: " ", grow: true },
  { text: site.last.charAt(0), grow: false },
  { text: site.last.slice(1), grow: true },
];

let seenThisLoad: boolean | null = null;

function wasSeen() {
  if (seenThisLoad === null) {
    seenThisLoad = sessionStorage.getItem(VISITED) === "true";
    sessionStorage.setItem(VISITED, "true");
  }
  return seenThisLoad;
}

export function Loader() {
  const root = useRef<HTMLDivElement>(null);
  const [gone, setGone] = useState(false);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const reveal = () =>
        document.documentElement.classList.remove("is-loading");

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const skip = wasSeen() || reduced;

      let timeline: gsap.core.Timeline | undefined;

      const start = () => {
        el.style.setProperty("--expand", `${EXPAND}s`);
        if (!skip) document.documentElement.classList.add("is-loading");

        gsap.utils.toArray<HTMLElement>(".c-loader__grow", el).forEach((grow) => {
          const inner = grow.firstElementChild as HTMLElement | null;
          if (inner) {
            const { width } = inner.getBoundingClientRect();
            grow.style.setProperty("--w", `${width}px`);
          }
        });

        if (skip) {
          el.classList.add("is-instant", "is-open", "is-done");
          reveal();
          timeline = gsap.timeline().call(() => setGone(true), undefined, FADE);
          return;
        }

        timeline = gsap
          .timeline()
          .call(() => el.classList.add("is-open"), undefined, HOLD)
          .call(
            () => {
              el.classList.add("is-done");
              reveal();
            },
            undefined,
            HOLD + EXPAND,
          )
          .call(() => setGone(true), undefined, HOLD + EXPAND + FADE);
      };

      if (document.fonts && document.fonts.status !== "loaded") {
        document.fonts.ready.then(start);
      } else {
        start();
      }

      return () => {
        timeline?.kill();
      };
    },
    { scope: root },
  );

  if (gone) return null;

  return (
    <div className="c-loader" ref={root} aria-hidden="true">
      <div className="c-loader__logo">
        {parts.map(({ text, grow }, i) =>
          grow ? (
            <span className="c-loader__grow" key={i}>
              <span>{text}</span>
            </span>
          ) : (
            <span key={i}>{text}</span>
          ),
        )}
      </div>
    </div>
  );
}
