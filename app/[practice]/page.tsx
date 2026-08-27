import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Practice } from "@/components/Practice";
import { SmoothScroll } from "@/components/SmoothScroll";
import { practices } from "@/lib/content";
import { menu, site } from "@/lib/projects";

export function generateStaticParams() {
  return practices.map((item) => ({ practice: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[practice]">): Promise<Metadata> {
  const { practice: slug } = await params;
  const practice = practices.find((item) => item.slug === slug);

  if (!practice) return {};

  const title = `${practice.title} - ${site.first} ${site.last}`;

  return {
    title,
    description: practice.lead,
    alternates: { canonical: `/${practice.slug}` },
    openGraph: {
      type: "website",
      title,
      description: practice.lead,
      url: `/${practice.slug}`,
    },
  };
}

export default async function Page({ params }: PageProps<"/[practice]">) {
  const { practice: slug } = await params;
  const practice = practices.find((item) => item.slug === slug);

  if (!practice) notFound();

  return (
    <>
      <Navbar menu={menu} />
      <main>
        <Practice practice={practice} />
      </main>
      <SmoothScroll />
    </>
  );
}
