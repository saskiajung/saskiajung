import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Work } from "@/components/Work";
import { menu, projects, site } from "@/lib/projects";

const title = `Selected Work - ${site.first} ${site.last}`;
const description =
  "Selected editorial and campaign work by Saskia Jung, stylist and creative director.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work" },
  openGraph: { type: "website", title, description, url: "/work" },
};

export default function Page() {
  return (
    <>
      <Navbar menu={menu} />
      <main>
        <Work projects={projects} />
      </main>
      <SmoothScroll />
    </>
  );
}
