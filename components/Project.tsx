"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Photo } from "@/components/Photo";
import {
  categories,
  type Project as ProjectType,
  site,
} from "@/lib/projects";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const COMPOSITION = [
  { col: "1 / span 7", push: 0, wide: 56 },
  { col: "8 / span 5", push: 14, wide: 40 },
  { col: "2 / span 5", push: 0, wide: 40 },
  { col: "7 / span 6", push: 10, wide: 48 },
  { col: "1 / span 6", push: 6, wide: 48 },
  { col: "6 / span 7", push: 0, wide: 56 },
];

type Props = {
  project: ProjectType;
  next: ProjectType;
};

export function Project({ project, next }: Props) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      document.documentElement.classList.remove("is-loading");

      const style = document.documentElement.style;
      style.setProperty("--color-page-bg", site.backgroundColor);
      style.setProperty("--color-page-text", project.color);

      gsap.utils
        .toArray<HTMLElement>(".c-project__figure", el)
        .forEach((figure) => {
          ScrollTrigger.create({
            trigger: figure,
            start: "top 88%",
            once: true,
            onEnter: () => figure.classList.add("is-in"),
          });
        });
    },
    { scope: root, dependencies: [project.slug] },
  );

  return (
    <div className="c-project" ref={root}>
      <header className="c-project__head">
        <h1 className="c-project__title">{project.title}</h1>
        <p className="c-project__meta">{categories[project.category]}</p>
      </header>

      <div className="c-project__grid">
        {project.story.map((image, index) => {
          const place = COMPOSITION[index % COMPOSITION.length];
          return (
            <figure
              className="c-project__figure"
              key={image.src}
              style={
                {
                  "--col": place.col,
                  "--push": `${place.push}svh`,
                } as CSSProperties
              }
            >
              <Photo
                alt={image.alt}
                sizes={`(orientation: landscape) ${place.wide}vw, 86vw`}
                src={image.src}
              />
            </figure>
          );
        })}
      </div>

      <footer className="c-project__foot">
        <Link className="c-project__index underline-effect" href="/work">
          Work
        </Link>

        <Link className="c-project__next" href={`/work/${next.slug}`}>
          <span className="c-project__next-label">Next</span>
          <span className="c-project__next-title">{next.title}</span>
        </Link>
      </footer>
    </div>
  );
}
