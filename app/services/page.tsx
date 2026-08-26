import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { SmoothScroll } from "@/components/SmoothScroll";
import { services } from "@/lib/content";
import { menu, site } from "@/lib/projects";

const title = `${services.title} - ${site.first} ${site.last}`;

export const metadata: Metadata = {
  title,
  description: services.lead,
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    title,
    description: services.lead,
    url: "/services",
  },
};

export default function Page() {
  return (
    <>
      <Navbar menu={menu} />
      <main>
        <Services />
      </main>
      <SmoothScroll />
    </>
  );
}
