"use client";

import { useState } from "react";
import { type MenuItem, site } from "@/lib/projects";

type Props = {
  menu: MenuItem[];
};

export function Navbar({ menu }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`c-navbar${open ? " is-menu-open" : ""}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col c-navbar__container">
            <a href="/" className="c-navbar__logo">
              {site.first.charAt(0)}
              {site.last.charAt(0)}
            </a>
            <button
              className="c-navbar__menu"
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

      <div className="c-navbar__links" id="navbar-links" inert={!open}>
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
