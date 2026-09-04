import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Project } from "@/components/Project";
import { SmoothScroll } from "@/components/SmoothScroll";
import { menu, projects, site } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return {};

  const title = `${project.title} - ${site.first} ${site.last}`;
  const description = `${project.title}. Styling and creative direction by ${site.first} ${site.last}.`;

  return {
    title,
    description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      url: `/work/${project.slug}`,
    },
  };
}

export default async function Page({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);

  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Navbar menu={menu} />
      <main>
        <Project project={project} next={next} />
      </main>
      <SmoothScroll />
    </>
  );
}
