"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Photo } from "@/components/Photo";
import { images } from "@/lib/images";
import { hero, type Project, site } from "@/lib/projects";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SINGLE_SIZES = "(orientation: landscape) 68vh, 86vw";
const SPREAD_SIZES = "(orientation: landscape) 60vh, 66vw";

const HOLD = 0.35;
const HERO_FOCUS = 0.28;
const VISITED = "sj-visited";

const parts = [
  { text: site.first.charAt(0), grow: false },
  { text: site.first.slice(1), grow: true },
  { text: " ", grow: true },
  { text: site.last.charAt(0), grow: false },
  { text: site.last.slice(1), grow: true },
];

const heroMeta = images[hero.src];

let seenThisLoad: boolean | null = null;

function wasSeen() {
  if (seenThisLoad === null) {
    seenThisLoad = sessionStorage.getItem(VISITED) === "true";
    sessionStorage.setItem(VISITED, "true");
  }
  return seenThisLoad;
}

type Props = {
  projects: Project[];
};

export function Home({ projects }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const wordmark = useRef<HTMLHeadingElement>(null);
  const [active, setActive] = useState(-1);

  useGSAP(
    () => {
      const container = scroller.current;
      const home = root.current;
      const mark = wordmark.current;
      if (!container || !home || !mark) return;

      const documentEl = document.documentElement;
      const style = documentEl.style;
      style.setProperty("--color-page-bg", site.backgroundColor);

      gsap.utils
        .toArray<HTMLElement>("[data-color]", home)
        .forEach((section) => {
          const color = section.dataset.color;
          const index = Number(section.dataset.index ?? -1);

          ScrollTrigger.create({
            trigger: section,
            scroller: container,
            start: "top center",
            end: "bottom center",
            toggleClass: "is-active",
            onToggle: ({ isActive }) => {
              if (!isActive) return;
              if (color) style.setProperty("--color-page-text", color);
              setActive(index);
            },
          });
        });

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const heroSection = home.querySelector<HTMLElement>(".c-home__hero");
      const media = home.querySelector<HTMLElement>(".c-home__hero-media");
      const frame = home.querySelector<HTMLElement>(".c-home__hero-frame");
      const inner = mark.querySelector<HTMLElement>(".c-home__wordmark-inner");

      let parallaxAmount = 0;

      const layout = () => {
        if (!heroSection || !frame || !inner) return;

        const vw = heroSection.clientWidth;
        const vh = heroSection.clientHeight;
        const coverW = frame.offsetWidth;
        const coverH = frame.offsetHeight;
        const aspect = coverW / coverH;

        const fs = parseFloat(getComputedStyle(inner).fontSize);
        const gutter = parseFloat(
          getComputedStyle(documentEl).getPropertyValue("--gutter"),
        );
        const zone = fs * 0.95 + gutter * 2;
        const available = vh - zone;

        let startH = available * 0.82;
        const maxW = vw - gutter * 2;
        if (startH * aspect > maxW) startH = maxW / aspect;

        const drift = Math.min(vh * 0.04, (coverH - vh) / 2);
        parallaxAmount = reduced ? 0 : drift;

        frame.style.setProperty("--hero-s0", `${startH / coverH}`);
        frame.style.setProperty(
          "--hero-t0",
          `${available / 2 - vh / 2 + parallaxAmount}px`,
        );
        frame.style.setProperty(
          "--hero-t1",
          `${coverH / 2 - vh / 2 - (coverH - vh) * HERO_FOCUS + parallaxAmount}px`,
        );
      };

      layout();

      const observer = new ResizeObserver(layout);
      observer.observe(home);

      if (heroSection) {
        gsap.fromTo(
          mark,
          { "--wm-p": 0 },
          {
            "--wm-p": 1,
            ease: "none",
            scrollTrigger: {
              trigger: heroSection,
              scroller: container,
              start: "top top",
              end: "bottom top",
              scrub: reduced ? true : 0.8,
            },
          },
        );

        if (media && !reduced && parallaxAmount > 1) {
          gsap.fromTo(
            media,
            { y: -parallaxAmount },
            {
              y: parallaxAmount,
              ease: "none",
              scrollTrigger: {
                trigger: heroSection,
                scroller: container,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }
      }

      let intro: gsap.core.Timeline | undefined;

      const measure = () => {
        gsap.utils.toArray<HTMLElement>(".c-home__grow", mark).forEach((el) => {
          const inner = el.firstElementChild as HTMLElement | null;
          if (inner) {
            el.style.setProperty("--w", `${inner.getBoundingClientRect().width}px`);
          }
        });
      };

      const start = () => {
        measure();
        layout();

        if (wasSeen() || reduced) {
          documentEl.classList.add("is-instant");
          documentEl.classList.remove("is-loading");
          return;
        }

        intro = gsap
          .timeline()
          .call(() => documentEl.classList.remove("is-loading"), undefined, HOLD);
      };

      if (document.fonts && document.fonts.status !== "loaded") {
        document.fonts.ready.then(start);
      } else {
        start();
      }

      return () => {
        intro?.kill();
        observer.disconnect();
      };
    },
    { scope: root },
  );

  return (
    <div className="c-home" ref={root}>
      <div className="c-home__container" ref={scroller}>
        <section
          className="c-home__hero"
          data-color={hero.color}
          data-index={-1}
          aria-label="Saskia Jung, stylist and creative director"
        >
          <div className="c-home__hero-media">
            <div
              className="c-home__hero-frame"
              style={
                {
                  "--hero-aspect": `${heroMeta.width / heroMeta.height}`,
                } as React.CSSProperties
              }
            >
              <Photo alt={hero.alt} priority sizes="100vw" src={hero.src} />
            </div>
          </div>
        </section>

        {projects.map((project, index) => (
          <section
            className="c-home__section"
            key={project.slug}
            data-color={project.color}
            data-index={index}
            data-layout={project.layout}
            aria-label={`${project.title}, ${project.year}`}
          >
            <a className="c-home__frame" href={`/work/${project.slug}`}>
              {project.images.map((image) => (
                <span className="c-home__image" key={image.src}>
                  <Photo
                    alt={image.alt}
                    sizes={
                      project.layout === "spread" ? SPREAD_SIZES : SINGLE_SIZES
                    }
                    src={image.src}
                  />
                </span>
              ))}
            </a>
          </section>
        ))}
      </div>

      <h1
        className="c-home__wordmark"
        ref={wordmark}
        aria-label={`${site.first} ${site.last}`}
      >
        <span className="c-home__wordmark-inner" aria-hidden="true">
          {parts.map(({ text, grow }, i) =>
            grow ? (
              <span className="c-home__grow" key={i}>
                <span>{text}</span>
              </span>
            ) : (
              <span key={i}>{text}</span>
            ),
          )}
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
