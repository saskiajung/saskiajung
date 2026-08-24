"use client";

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const DURATION = 1.05;

type Props = {
  wrapper?: string;
  content?: string;
};

export function SmoothScroll({ wrapper, content }: Props) {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const wrapperEl = wrapper
      ? document.querySelector<HTMLElement>(wrapper)
      : null;
    const contentEl = content
      ? document.querySelector<HTMLElement>(content)
      : null;

    if (wrapper && (!wrapperEl || !contentEl)) return;

    const lenis =
      wrapperEl && contentEl
        ? new Lenis({
            wrapper: wrapperEl,
            content: contentEl,
            duration: DURATION,
          })
        : new Lenis({ duration: DURATION });

    const update = () => ScrollTrigger.update();
    const raf = (time: number) => lenis.raf(time * 1000);

    const onLock = (event: Event) => {
      if ((event as CustomEvent<boolean>).detail) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    lenis.on("scroll", update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    window.addEventListener("sj:scroll-lock", onLock);

    return () => {
      window.removeEventListener("sj:scroll-lock", onLock);
      lenis.off("scroll", update);
      gsap.ticker.remove(raf);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
    };
  });

  return null;
}
