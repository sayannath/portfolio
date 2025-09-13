"use client";

import ThemeToggle from "./ThemeToggle";

export default function Connect() {
    return (
        <section id="connect" className="max-w-6xl mx-auto px-6 sm:px-8 py-24">
            {/* Title */}
            <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-neutral-500 dark:text-neutral-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V6.75Zm2.28-.53 7.02 4.39c.42.26.97.26 1.39 0l7.02-4.39a1.25 1.25 0 0 0-1.39-2.08L12 8.58 5.67 4.14a1.25 1.25 0 1 0-1.39 2.08Z" />
                </svg>
                <h2 className="text-4xl sm:text-5xl text-neutral-900 dark:text-neutral-100 font-semibold tracking-tight">
                    Connect
                </h2>
            </div>

            {/* Intro */}
            <p className="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Always excited to collaborate on research and impactful ML projects, speak at conferences, or help teams build fair and reliable AI systems.
            </p>

            {/* Grid */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left column */}
                <div className="lg:col-span-6 space-y-6 max-w-xl">
                    {/* Email */}
                    <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                        <svg className="w-4 h-4 text-neutral-500 dark:text-neutral-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V6.75Zm2.5.27v9.96c0 .14.11.27.25.27h14.5c.14 0 .25-.13.25-.27V7.02l-7.2 4.51a2.25 2.25 0 0 1-2.4 0L4.5 7.02Z" />
                        </svg>
                        <span className="text-sm sm:text-base">sayannath235@gmail.com</span>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-8 text-sm">
                        <a
                            href="mailto:sayannath235@gmail.com"
                            className="inline-flex items-center gap-2
                         text-neutral-700 hover:text-black underline underline-offset-[3px]
                         decoration-neutral-400 hover:decoration-black
                         dark:text-neutral-300 dark:hover:text-white
                         dark:decoration-neutral-600 dark:hover:decoration-white"
                        >
                            <svg className="w-4 h-4 opacity-80" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V6.75Zm2.28-.53 7.02 4.39c.42.26.97.26 1.39 0l7.02-4.39a1.25 1.25 0 0 0-1.39-2.08L12 8.58 5.67 4.14a1.25 1.25 0 1 0-1.39 2.08Z" />
                            </svg>
                            Get In Touch
                        </a>

                        <a
                            href="https://scholar.google.com/citations?user=WcqkH2cAAAAJ&hl=en"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-center gap-2
                         text-neutral-500 hover:text-black
                         dark:text-neutral-400 dark:hover:text-white"
                        >
                            Visit Google Scholar <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>

                {/* Right column: cards */}
                <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
                    {[
                        {
                            href: "https://github.com/sayannath",
                            label: "GitHub",
                            handle: "@sayannath",
                            icon: (
                                <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.08 1.87 1.25 1.87 1.25 1.08 1.86 2.83 1.32 3.52 1.01.11-.8.42-1.33.77-1.64-2.67-.31-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.84c1.02.01 2.05.14 3.01.42 2.28-1.55 3.29-1.23 3.29-1.23.66 1.69.24 2.94.12 3.25.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.63-5.49 5.93.43.38.82 1.12.82 2.26v3.35c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
                            ),
                        },
                        {
                            href: "https://www.linkedin.com/in/sayannath235/",
                            label: "LinkedIn",
                            handle: "@sayannath",
                            icon: (
                                <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.95 1.83-1.96 3.77-1.96 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.34c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-3.78V9Z" />
                            ),
                        },
                        {
                            href: "https://youtube.com/@sayannath662",
                            label: "YouTube",
                            handle: "@sayannath662",
                            icon: (
                                <path d="M23.5 6.2a2.97 2.97 0 0 0-2.09-2.1C19.43 3.5 12 3.5 12 3.5s-7.43 0-9.41.6a2.97 2.97 0 0 0-2.09 2.1A31.4 31.4 0 0 0 0 12c0 1.97.17 3.94.5 5.8a2.97 2.97 0 0 0 2.09 2.1C4.57 20.5 12 20.5 12 20.5s7.43 0 9.41-.6a2.97 2.97 0 0 0 2.09-2.1c.33-1.86.5-3.83.5-5.8 0-1.97-.17-3.94-.5-5.8ZM9.75 15.02V8.98L15.5 12 9.75 15.02Z" />
                            ),
                        },
                        {
                            href: "https://wandb.ai/sayannath235",
                            label: "Website",
                            handle: "wandb.ai/sayannath235",
                            icon: (
                                <path d="M12 2.25c-5.38 0-9.75 4.37-9.75 9.75s4.37 9.75 9.75 9.75 9.75-4.37 9.75-9.75S17.38 2.25 12 2.25Zm0 17.5a7.75 7.75 0 1 1 0-15.5 7.75 7.75 0 0 1 0 15.5ZM7.5 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Z" />
                            ),
                        },
                    ].map(({ href, label, handle, icon }) => (
                        <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="group block rounded border border-neutral-200 dark:border-neutral-800
                         bg-white/60 dark:bg-neutral-950/40 p-4"
                        >
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-neutral-500 dark:text-neutral-400" viewBox="0 0 24 24" fill="currentColor">
                                    {icon}
                                </svg>
                                <span className="font-medium text-neutral-900 dark:text-neutral-200">{label}</span>
                            </div>
                            <p className="text-xs text-neutral-500 mt-1">{handle}</p>
                        </a>
                    ))}
                </div>

                {/* Tags under right column */}
                <div className="lg:col-span-6 lg:col-start-7">
                    <p className="text-sm font-medium text-neutral-800 dark:text-neutral-300">Open to Collaborate On</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {[
                            "Responsible AI",
                            "Fairness in ML",
                            "LLM Efficiency",
                            "Research Projects",
                            "Technical Speaking",
                            "Open Source",
                        ].map((tag) => (
                            <span
                                key={tag}
                                className="text-[12px] tracking-wide
                           text-neutral-700 dark:text-neutral-300
                           border border-neutral-300 dark:border-neutral-800
                           rounded px-2 py-[6px]
                           bg-neutral-50/60 dark:bg-neutral-950/40"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-20 border-t border-neutral-200 dark:border-neutral-800 pt-6">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-300">Sayan Nath</p>
                        <p className="mt-2 text-[12px] font-mono text-neutral-500 dark:text-neutral-500/80">
                            © {new Date().getFullYear()} Sayan Nath
                        </p>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                        <ThemeToggle />
                        <a
                            href="mailto:sayannath235@gmail.com"
                            className="underline underline-offset-4
                         text-neutral-700 decoration-neutral-400 hover:text-black
                         dark:text-neutral-300 dark:decoration-neutral-600
                         hover:dark:text-white hover:dark:decoration-white"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
