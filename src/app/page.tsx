import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Publication from "@/components/Publication";
import Connect from "@/components/Connect";

export default function Page() {
  return (
    <main>
      <section id="home" className="relative min-h-[88vh] grid items-center">
        <Hero />
      </section>

      <section id="education" className="min-h-[88vh] grid items-center">
        <Education />
      </section>

      <section id="experience" className="min-h-[88vh] grid items-center">
        <Experience />
      </section>

      <section id="publication" className="min-h-[88vh] grid items-center">
        <Publication />
      </section>

      <section id="connect" className="min-h-[88vh] grid items-center">
        <Connect />
      </section>
    </main>
  );
}
