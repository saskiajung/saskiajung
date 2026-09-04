"use client";

import type { CSSProperties } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Slot } from "@/components/Slot";
import type { Practice as PracticeType } from "@/lib/content";
import { site } from "@/lib/projects";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {
  practice: PracticeType;
};

export function Practice({ practice }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const columns = Math.min(practice.work.length, 4);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      document.documentElement.classList.remove("is-loading");

      const style = document.documentElement.style;
      style.setProperty("--color-page-bg", site.backgroundColor);
      style.setProperty("--color-page-text", practice.color);

      gsap.utils.toArray<HTMLElement>(".c-reveal", el).forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 88%",
          once: true,
          onEnter: () => item.classList.add("is-in"),
        });
      });
    },
    { scope: root, dependencies: [practice.slug] },
  );

  return (
    <div className="c-page" ref={root}>
      <header className="c-page__head">
        <h1 className="c-page__title">{practice.title}</h1>
        <p className="c-page__lead">{practice.lead}</p>
      </header>

      <div className="c-practice">
        {practice.blocks.map((block) => (
          <section className="c-practice__block" key={block.label}>
            <h2 className="c-practice__label">{block.label}</h2>
            <ul className="c-practice__list">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div
        className="c-practice__work"
        style={
          {
            "--work-cols": columns,
          } as CSSProperties
        }
      >
        {practice.work.map((item, index) => (
          <figure
            className="c-practice__item c-reveal"
            key={item.visual.src ?? index}
          >
            <Slot
              sizes={`(orientation: landscape) ${Math.round(96 / columns)}vw, 86vw`}
              slot={item.visual}
            />
            {item.caption ? (
              <figcaption className="c-practice__caption">
                {item.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </div>
  );
}
