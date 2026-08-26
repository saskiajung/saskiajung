"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { type MenuItem, site } from "@/lib/projects";

type Props = {
  menu: MenuItem[];
};

gsap.registerPlugin(useGSAP);

export function Navbar({ menu }: Props) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const docEl = document.documentElement;
      const main = document.querySelector("main");

      docEl.classList.toggle("is-locked", open);
      if (main) main.inert = open;
      window.dispatchEvent(
        new CustomEvent("sj:scroll-lock", { detail: open }),
      );

      if (open) {
        panel.current?.querySelector<HTMLAnchorElement>(".c-menu__link")?.focus();
      }

      const onKey = (event: KeyboardEvent) => {
        if (event.key !== "Escape") return;
        setOpen(false);
        toggle.current?.focus();
      };

      if (open) window.addEventListener("keydown", onKey);

      return () => {
        window.removeEventListener("keydown", onKey);
        docEl.classList.remove("is-locked");
        if (main) main.inert = false;
        window.dispatchEvent(
          new CustomEvent("sj:scroll-lock", { detail: false }),
        );
      };
    },
    { dependencies: [open] },
  );

  return (
    <nav className={`c-navbar${open ? " is-menu-open" : ""}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col c-navbar__container">
            <Link href="/" className="c-navbar__logo">
              {site.first.charAt(0)}
              {site.last.charAt(0)}
            </Link>
            <button
              className="c-navbar__menu"
              ref={toggle}
              type="button"
              aria-expanded={open}
              aria-controls="navbar-links"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="u-visually-hide">Menu</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className="c-navbar__links"
        id="navbar-links"
        inert={!open}
        ref={panel}
      >
        <div className="c-navbar__links-container">
          <div className="c-menu">
            <ul className="c-menu__rows">
              {menu.map((item) => (
                <li className="c-menu__row" key={item.href}>
                  <a
                    className="c-menu__link"
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    <span className="c-menu__label">{item.label}</span>
                    <span
                      className="c-menu__label c-menu__label--fill"
                      aria-hidden="true"
                    >
                      {item.label}
                    </span>
                  </a>

                  {item.children ? (
                    <ul className="c-menu__sub">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <a
                            className="c-menu__sublink underline-effect"
                            href={child.href}
                            onClick={() => setOpen(false)}
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>

            <div className="c-menu__info">
              <a className="underline-effect" href={`mailto:${site.email}`}>
                Contact
              </a>
              <a
                className="underline-effect"
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
