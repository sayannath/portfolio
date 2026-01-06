"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Hero() {
    useEffect(() => {
        const heroSection = document.getElementById("home");
        if (heroSection) {
            heroSection.style.opacity = "0"; // Changed 0 to "0"
            setTimeout(() => {
                heroSection.style.transition = "opacity 0.5s ease-in-out";
                heroSection.style.opacity = "1"; // Changed 1 to "1"
            }, 100);
        }
    }, []);

    return (
        // <section id="home" className="relative min-h-screen flex items-center p-4">
        <section
            id="home"
            className="relative min-h-[calc(100vh-64px)] flex items-center px-4 pt-24"
        >
            {/* Content Wrapper */}
            <div className="w-full mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl">
                    <p className="text-xs sm:text-sm text-neutral-400 uppercase tracking-widest">
                        🚀 PhD Research Grad.
                    </p>

                    <h1 className="mt-3 text-4xl sm:text-6xl lg:text-8xl leading-tight font-semibold text-neutral-100">
                        Sayan Nath
                    </h1>

                    <p className="mt-5 text-sm sm:text-base lg:text-lg text-neutral-400 leading-relaxed max-w-2xl">
                        PhD student in Computer Science at the University of Calgary, researching Applied AI and Human Computer Interaction.
                        Passionate about building scalable AI systems with real-world impact.
                    </p>

                    <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4 text-sm">
                        <Link
                            href="https://github.com/sayannath"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 rounded border border-neutral-700 px-4 py-2 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 opacity-80" aria-hidden="true">
                                <path d="M4 4h16v2H4zm0 7h10v2H4zm0 7h16v2H4z" />
                            </svg>
                            <span className="font-medium">View Work</span>
                        </Link>

                        <Link
                            href="https://www.linkedin.com/in/sayannath235/"
                            className="inline-flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-4 opacity-80"
                                aria-hidden="true"
                            >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.602 0 4.266 2.37 4.266 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.123 2.062 2.062 0 010 4.123zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>

                            LinkedIn &rarr;
                        </Link>
                    </div>

                    <p className="mt-9 text-xs sm:text-sm text-neutral-500 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                        <span>
                            Available for collaborations · Calgary,&nbsp;
                            <span className="text-base leading-none">🇨🇦</span>
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}
