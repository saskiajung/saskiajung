import type { Metadata } from "next";
import { About } from "@/components/About";
import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { about } from "@/lib/content";
import { menu, site } from "@/lib/projects";

const title = `${about.title} - ${site.first} ${site.last}`;
const description = about.bio[0];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { type: "profile", title, description, url: "/about" },
};

export default function Page() {
  return (
    <>
      <Navbar menu={menu} />
      <main>
        <About />
      </main>
      <SmoothScroll />
    </>
  );
}
