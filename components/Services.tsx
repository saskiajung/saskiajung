"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Slot } from "@/components/Slot";
import { services } from "@/lib/content";
import { projects, site } from "@/lib/projects";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Services() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      document.documentElement.classList.remove("is-loading");

      const style = document.documentElement.style;
      style.setProperty("--color-page-bg", site.backgroundColor);
      style.setProperty("--color-page-text", projects[0].color);

      gsap.utils.toArray<HTMLElement>(".c-service", el).forEach((row) => {
        ScrollTrigger.create({
          trigger: row,
          start: "top 86%",
          once: true,
          onEnter: () => row.classList.add("is-in"),
        });
      });
    },
    { scope: root },
  );

  return (
    <div className="c-page" ref={root}>
      <header className="c-page__head">
        <h1 className="c-page__title">{services.title}</h1>
        <p className="c-page__lead">{services.lead}</p>
      </header>

      <div className="c-services">
        {services.items.map((service) => (
          <section className="c-service" key={service.name}>
            <h2 className="c-service__name">{service.name}</h2>

            <div className="c-service__body">
              <p className="c-service__lead">{service.lead}</p>
              <ul className="c-service__list">
                {service.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <Slot
              className="c-service__figure"
              sizes="(orientation: landscape) 26vw, 86vw"
              slot={service.visual}
            />
          </section>
        ))}
      </div>
    </div>
  );
}
