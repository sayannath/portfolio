"use client";

import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[88vh] flex items-center">
            {/* Content */}
            <div className="w-full mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl">
                    <p className="tracking-[0.2em] text-[10px] xs:text-xs sm:text-sm text-neutral-400 uppercase">
                        🚀 MSc. Research Grad.
                    </p>

                    <h1 className="mt-3 text-[36px] sm:text-[56px] lg:text-[76px] leading-[0.95] font-medium text-neutral-100">
                        Sayan Nath
                    </h1>

                    <p className="mt-5 text-sm sm:text-base lg:text-lg text-neutral-400 leading-relaxed max-w-2xl">
                        Master’s student in Electrical & Software Engineering at the University of Calgary,
                        researching Responsible AI with a focus on fairness-aware AutoML. Passionate about
                        building scalable, ethical ML systems with real-world impact.
                    </p>

                    <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4 text-sm">
                        <Link
                            href="#work"
                            className="group inline-flex items-center gap-2 rounded border border-neutral-700 px-3 py-1.5 hover:border-neutral-500 hover:bg-neutral-900"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 opacity-80" aria-hidden>
                                <path d="M4 4h16v2H4zm0 7h10v2H4zm0 7h16v2H4z" />
                            </svg>
                            <span className="font-medium">View Work</span>
                        </Link>

                        <Link
                            href="http://youtube.com/@sayannath662"
                            className="inline-flex items-center gap-2 text-neutral-300 hover:text-white"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 opacity-80" aria-hidden>
                                <path d="M23.498 6.186a2.97 2.97 0 00-2.09-2.103C19.425 3.5 12 3.5 12 3.5s-7.425 0-9.408.583a2.97 2.97 0 00-2.09 2.103A31.35 31.35 0 000 12c0 1.61.17 3.22.49 4.79.24.95.98 1.69 1.93 1.93C6.1 19.25 12 19.25 12 19.25s7.425 0 9.408-.583a2.97 2.97 0 002.09-2.103A31.35 31.35 0 0024 12a31.35 31.35 0 00-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                            </svg>
                            YouTube →
                        </Link>
                    </div>

                    <p className="mt-9 text-xs sm:text-sm text-neutral-500 flex items-center">
                        <span className="inline-block w-2 h-2 mr-2 rounded-full bg-emerald-400 align-middle animate-pulse" />
                        <span>Available for collaborations · Calgary,&nbsp;<span className="text-base">🇨🇦</span></span>
                    </p>
                </div>
            </div>
        </section>
    );
}
