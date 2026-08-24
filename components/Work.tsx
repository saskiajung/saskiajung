"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Photo } from "@/components/Photo";
import { type Project, site } from "@/lib/projects";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const COVER_SIZES = "(orientation: landscape) 50vw, 86vw";

type Props = {
  projects: Project[];
};

export function Work({ projects }: Props) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      document.documentElement.classList.remove("is-loading");

      const style = document.documentElement.style;
      style.setProperty("--color-page-bg", site.backgroundColor);

      gsap.utils.toArray<HTMLElement>(".c-work__entry", el).forEach((entry) => {
        const color = entry.dataset.color;

        ScrollTrigger.create({
          trigger: entry,
          start: "top 70%",
          end: "bottom 30%",
          onToggle: ({ isActive }) => {
            if (isActive && color) style.setProperty("--color-page-text", color);
          },
        });

        ScrollTrigger.create({
          trigger: entry,
          start: "top 88%",
          once: true,
          onEnter: () => entry.classList.add("is-in"),
        });
      });
    },
    { scope: root },
  );

  return (
    <div className="c-work" ref={root}>
      <header className="c-work__head">
        <h1 className="c-work__title">Work</h1>
      </header>

      <div className="c-work__grid">
        {projects.map((project) => (
          <article
            className="c-work__entry"
            key={project.slug}
            id={project.slug}
            data-color={project.color}
          >
            <Link className="c-work__link" href={`/work/${project.slug}`}>
              <div className="c-work__frame">
                <Photo
                  alt={project.story[project.cover].alt}
                  sizes={COVER_SIZES}
                  src={project.story[project.cover].src}
                />
              </div>

              <div className="c-work__caption">
                <h2 className="c-work__name">{project.title}</h2>
                <p className="c-work__meta">
                  {project.credit === project.title
                    ? project.year
                    : `${project.credit}, ${project.year}`}
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
