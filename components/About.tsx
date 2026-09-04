"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Slot } from "@/components/Slot";
import { about } from "@/lib/content";
import { site } from "@/lib/projects";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function About() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      document.documentElement.classList.remove("is-loading");

      const style = document.documentElement.style;
      style.setProperty("--color-page-bg", site.backgroundColor);
      style.setProperty("--color-page-text", about.color);

      gsap.utils.toArray<HTMLElement>(".c-reveal", el).forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 88%",
          once: true,
          onEnter: () => item.classList.add("is-in"),
        });
      });
    },
    { scope: root },
  );

  return (
    <div className="c-page" ref={root}>
      <header className="c-page__head">
        <h1 className="c-page__title">{about.title}</h1>
      </header>

      <div className="c-about">
        <Slot
          className="c-about__portrait c-reveal"
          priority
          sizes="(orientation: landscape) 40vw, 86vw"
          slot={about.portrait}
        />

        <div className="c-about__bio">
          <p className="c-about__headline">{about.headline}</p>

          {about.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <ul className="c-about__meta">
            {about.meta.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="c-about__clients">
            <h2 className="c-about__clients-label">{about.clientsLabel}</h2>
            <ul>
              {about.clients.map((client) => (
                <li key={client}>{client}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {about.sections.map((section) => (
        <section className="c-strand" key={section.label}>
          <header className="c-strand__head">
            <h2 className="c-strand__title">{section.label}</h2>
            <p className="c-strand__lead">{section.lead}</p>
          </header>

          <div className="c-practice">
            {section.blocks.map((block) => (
              <div className="c-practice__block" key={block.label}>
                <h3 className="c-practice__label">{block.label}</h3>
                <ul className="c-practice__list">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="c-practice__work">
            {section.work.map((item, index) => (
              <figure
                className="c-practice__item c-reveal"
                key={item.visual.src ?? index}
              >
                <Slot
                  sizes="(orientation: landscape) 24vw, 86vw"
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
        </section>
      ))}
    </div>
  );
}
