"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Photo } from "@/components/Photo";
import { type Project, site } from "@/lib/projects";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {
  projects: Project[];
};

export function Home({ projects }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const container = scroller.current;
      const home = root.current;
      if (!container || !home) return;

      const style = document.documentElement.style;
      style.setProperty("--color-page-bg", site.backgroundColor);

      gsap.utils
        .toArray<HTMLElement>(".c-home__section", home)
        .forEach((section, i) => {
          const color = section.dataset.color;
          const paint = () => {
            home.classList.add(`is-home-${i + 1}`);
            if (color) style.setProperty("--color-page-text", color);
            setActive(i);
          };
          const clear = () => home.classList.remove(`is-home-${i + 1}`);

          ScrollTrigger.create({
            trigger: section,
            scroller: container,
            scrub: true,
            start: "top center",
            end: "bottom center",
            toggleClass: "is-active",
            onEnter: paint,
            onEnterBack: paint,
            onLeave: clear,
            onLeaveBack: clear,
          });
        });
    },
    { scope: root },
  );

  return (
    <div className="c-home" ref={root}>
      <div className="c-home__container" ref={scroller}>
        {projects.map((project, index) => (
          <section
            className="c-home__section"
            key={project.slug}
            data-color={project.color}
            aria-label={`${project.title}, ${project.year}`}
          >
            <a className="c-home__image" href={`/work/${project.slug}`}>
              <Photo
                src={project.images[0]}
                alt={`${project.title} for ${project.credit}`}
                sizes="(orientation: portrait) 62vw, 32vw"
                priority={index === 0}
              />
            </a>
          </section>
        ))}
      </div>

      <h1 className="c-home__wordmark">
        <span>
          {site.first} {site.last}
        </span>
      </h1>

      <p className="c-navbar__now" aria-live="polite">
        {projects.map((project, i) => (
          <span
            className={i === active ? "is-current" : undefined}
            key={project.slug}
            aria-hidden={i !== active}
          >
            {project.title}
          </span>
        ))}
      </p>
    </div>
  );
}
