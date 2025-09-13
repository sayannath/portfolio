"use client";

type Link = { label: string; href: string; external?: boolean };

type Project = {
    title: string;
    summary: string;
    tags: string[];
    links: Link[];
};

type Pub = {
    year: string;
    title: string;
    venue: string;
    status?: string; // e.g., "under review", "preprint", "in preparation"
    authors?: string;
    links?: Link[];
};

const PROJECTS: Project[] = [
    {
        title: "FairSpace",
        summary:
            "Fairness-aware AutoML pipeline that prunes the search space and integrates LLM-guided preprocessing to reach better fairness–accuracy trade-offs with modest overhead.",
        tags: ["Python", "Auto-Sklearn", "SMAC", "DSPy", "Fairness"],
        links: [
            //   { label: "Code", href: "#", external: true },
            //   { label: "Paper", href: "#", external: true },
        ],
    },
    {
        title: "FairGA",
        summary:
            "A fairness-aware genetic algorithm framework that leverages AutoML run history to optimize hyperparameters for both accuracy and fairness.",
        tags: ["AutoML", "Genetic Algorithm", "Fairness", "Bias Mitigation"],
        links: [
            { label: "Demo", href: "#", external: true },
            { label: "Preprint", href: "#", external: true },
        ],
    },
    {
        title: "Blood Cell Detection",
        summary:
            "This project demonstrates the use of TFOD API to automatically detect blood cells in each image taken via microscopic image readings.",
        tags: ["Object Detection", "Keras", "TensorFlow", "MedicalDiagnosis"],
        links: [
            { label: "Code", href: "https://github.com/sayannath/Blood-Cell-Detection-TFOD-2.0", external: true },
            //   { label: "Manuscript", href: "#", external: true },
        ],
    },
    {
        title: "American Sign Language",
        summary:
            "American Sign Language Detection is a deep learning end to end project where we can detect American Sign Language.",
        tags: ["Image Classification", "Keras", "TensorFlowLite", "Android"],
        links: [{ label: "Code", href: "https://github.com/sayannath/American-Sign-Language-Detection", external: true }],
    },
];

const PUBLICATIONS: Pub[] = [
    {
        year: "2024",
        title:
            "FTASD-A Fine Tuning Approach for Stable Diffusion Models",
        venue: "15th International Conference on Computing Communication and Networking Technologies (ICCCNT)",
        status: "accepted",
        authors: "S. Nath, et al.",
        links: [
            { label: "Preprint", href: "https://ieeexplore.ieee.org/abstract/document/10724626/", external: true },
            // { label: "Code", href: "#", external: true },
        ],
    },
    {
        year: "2022",
        title:
            "Blood Cell Detection in Microscopic Images",
        venue: "International Journal of Scientific Development and Research",
        status: "accepted",
        authors: "S. Nath, et al.",
        links: [
            { label: "Preprint", href: "http://www.ijsdr.org/papers/IJSDR2207065.pdf", external: true },
        ],
    },
    {
        year: "2022",
        title:
            "Identical Image Retrieval using Deep Learning",
        venue: "International Journal of Innovative Research in Technology, Volume 8 Issue 12",
        status: "accepted",
        authors: "S. Nath, et al.",
        links: [{ label: "Preprint", href: "https://ijirt.org/publishedpaper/IJIRT155052_PAPER.pdf", external: true }],
    },
];

export default function Publication() {
    return (
        <section id="projects" className="max-w-6xl mx-auto px-6 sm:px-8 py-24">
            {/* Title + icon */}
            <div className="flex items-center gap-3">
                {/* book icon */}
                <svg
                    className="w-6 h-6 text-neutral-500 dark:text-neutral-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M4.75 3A2.75 2.75 0 0 0 2 5.75v12.5A2.75 2.75 0 0 0 4.75 21H20V5.75A2.75 2.75 0 0 0 17.25 3H4.75Zm.25 2h12.25c.69 0 1.25.56 1.25 1.25V19H5c-.69 0-1.25-.56-1.25-1.25V6.25C3.75 5.56 4.31 5 5 5Zm3 3.25h6.5v1.5H8V8.25Zm0 3h6.5v1.5H8v-1.5Zm0 3h4v1.5H8v-1.5Z" />
                </svg>
                <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                    Projects &amp; Publications
                </h2>
            </div>

            {/* Subtitle */}
            <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 max-w-3xl">
                Selected work across fairness-aware AutoML and Computer Vision. Code and manuscripts linked where available.
            </p>

            {/* ---------- Featured Projects ---------- */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS.map((p) => (
                    <article
                        key={p.title}
                        className="group rounded border border-neutral-800 hover:border-neutral-700 bg-neutral-950/40 p-5 transition-colors"
                    >
                        <h3 className="text-lg sm:text-xl font-semibold text-neutral-100">
                            {p.title}
                        </h3>
                        <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                            {p.summary}
                        </p>

                        {/* Tags */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            {p.tags.map((t) => (
                                <span
                                    key={t}
                                    className="text-[12px] tracking-wide text-neutral-300 border border-neutral-700/80 rounded px-2 py-[6px]"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="mt-5 flex flex-wrap gap-4 text-sm">
                            {p.links.map((l) => (
                                <a
                                    key={l.label}
                                    href={l.href}
                                    target={l.external ? "_blank" : undefined}
                                    rel={l.external ? "noreferrer noopener" : undefined}
                                    className="inline-flex items-center gap-2 text-neutral-300 hover:text-white"
                                >
                                    {/* link icon */}
                                    <svg
                                        className="w-4 h-4 opacity-80"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path d="M14 3h7v7h-2V6.41l-9.3 9.3-1.4-1.42 9.3-9.3H14V3z" />
                                        <path d="M19 19H5V5h7V3H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z" />
                                    </svg>
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    </article>
                ))}
            </div>

            {/* ---------- Publications ---------- */}
            <div id="publications" className="mt-20">
                <div className="flex items-center gap-2">
                    {/* document icon */}
                    <svg
                        className="w-5 h-5 text-neutral-400"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M6 2h8l6 6v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm7 1.5V9h5.5L13 3.5Z" />
                    </svg>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-100">
                        Publications
                    </h3>
                </div>

                <div className="mt-8 space-y-10">
                    {PUBLICATIONS.map((pub) => (
                        <article key={pub.title} className="grid grid-cols-1 md:grid-cols-12">
                            {/* Year */}
                            <div className="md:col-span-2 mb-2 md:mb-0">
                                <p className="text-sm text-neutral-500">{pub.year}</p>
                            </div>

                            {/* Details */}
                            <div className="md:col-span-10">
                                <h4 className="text-neutral-100 font-medium">
                                    {pub.title}
                                </h4>

                                <div className="mt-1 flex flex-wrap items-center gap-3 text-sm">
                                    <span className="text-neutral-400">{pub.authors}</span>
                                    <span className="text-[12px] uppercase tracking-wide text-neutral-300 border border-neutral-700/80 rounded px-2 py-[3px]">
                                        {pub.venue}
                                    </span>
                                    {pub.status && (
                                        <span className="text-[12px] uppercase tracking-wide text-neutral-300 border border-neutral-700/80 rounded px-2 py-[3px]">
                                            {pub.status}
                                        </span>
                                    )}
                                </div>

                                {/* Links */}
                                {pub.links && pub.links.length > 0 && (
                                    <div className="mt-3 flex flex-wrap gap-4 text-sm">
                                        {pub.links.map((l) => (
                                            <a
                                                key={l.label}
                                                href={l.href}
                                                target={l.external ? "_blank" : undefined}
                                                rel={l.external ? "noreferrer noopener" : undefined}
                                                className="inline-flex items-center gap-2 text-neutral-300 hover:text-white"
                                            >
                                                <svg
                                                    className="w-4 h-4 opacity-80"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M14 3h7v7h-2V6.41l-9.3 9.3-1.4-1.42 9.3-9.3H14V3z" />
                                                    <path d="M19 19H5V5h7V3H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z" />
                                                </svg>
                                                {l.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
