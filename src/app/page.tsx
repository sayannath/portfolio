import Hero from "@/components/Hero";

export default function Page() {
  return (
    <main>
      {/* Section: Home */}
      <section id="home" className="relative min-h-[88vh] grid items-center">
        <Hero />
      </section>

      {/* Section: About */}
      <section id="about" className="min-h-[88vh] grid items-center">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl sm:text-4xl text-neutral-100 font-medium">About</h2>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            I’m Sayan, working on Responsible AI & fairness-aware AutoML...
          </p>
        </div>
      </section>

      {/* Section: Work */}
      <section id="work" className="min-h-[88vh] grid items-center">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl sm:text-4xl text-neutral-100 font-medium">Selected Work</h2>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            Projects, publications, and demos…
          </p>
        </div>
      </section>

      {/* Section: Projects */}
      <section id="projects" className="min-h-[88vh] grid items-center">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl sm:text-4xl text-neutral-100 font-medium">Selected Work</h2>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            Projects, publications, and demos…
          </p>
        </div>
      </section>

      {/* Section: Contact */}
      <section id="contact" className="min-h-[88vh] grid items-center">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl sm:text-4xl text-neutral-100 font-medium">Selected Work</h2>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            Projects, publications, and demos…
          </p>
        </div>
      </section>
    </main>
  );
}
