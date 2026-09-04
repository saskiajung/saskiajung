import { Home } from "@/components/Home";
import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { menu, projects } from "@/lib/projects";

const FEATURED = 6;

export default function Page() {
  return (
    <>
      <Navbar menu={menu} />
      <main>
        <Home projects={projects.slice(0, FEATURED)} />
      </main>
      <SmoothScroll />
    </>
  );
}
