"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Photo } from "@/components/Photo";
import {
  type Category,
  categoriesOrder,
  type Project,
  site,
} from "@/lib/projects";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const COVER_SIZES = "(orientation: landscape) 50vw, 86vw";

type Props = {
  projects: Project[];
};

export function Work({ projects }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<Category | null>(null);

  const shown = filter
    ? projects.filter((project) => project.category === filter)
    : projects;

  const select = (next: Category | null) => {
    setFilter(next);

    const url = new URL(window.location.href);
    if (next) {
      url.searchParams.set("c", next);
    } else {
      url.searchParams.delete("c");
    }
    window.history.replaceState(null, "", url);
  };

  useGSAP(() => {
    document.documentElement.classList.remove("is-loading");
    document.documentElement.style.setProperty(
      "--color-page-bg",
      site.backgroundColor,
    );

    const requested = new URLSearchParams(window.location.search).get("c");
    if (requested === "styling" || requested === "campaign") {
      setFilter(requested);
    }
  });

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const style = document.documentElement.style;

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
    { scope: root, dependencies: [filter] },
  );

  return (
    <div className="c-work" ref={root}>
      <header className="c-work__head">
        <h1 className="c-work__title">Selected Work</h1>

        <div className="c-filter" role="group" aria-label="Filter by category">
          <button
            aria-pressed={filter === null}
            className="c-filter__option"
            onClick={() => select(null)}
            type="button"
          >
            All
          </button>
          {categoriesOrder.map((category) => (
            <button
              aria-pressed={filter === category.key}
              className="c-filter__option"
              key={category.key}
              onClick={() => select(category.key)}
              type="button"
            >
              {category.label}
            </button>
          ))}
        </div>
      </header>

      <div className="c-work__grid">
        {shown.map((project) => (
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
