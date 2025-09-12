"use client";

import Link from "next/link";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center"
        >

            <div className="max-w-3xl px-6 sm:px-8 -ml-16 text-left">
                <p className="tracking-[0.2em] text-xs sm:text-sm text-neutral-400">
                    🚀 MSc Research Grad.
                </p>

                <h1 className="mt-4 text-[48px] sm:text-[88px] leading-[0.95] font-medium text-neutral-100">
                    Sayan Nath
                </h1>

                <p className="mt-6 text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl">
                    Master’s student in Electrical & Software Engineering at the University of Calgary,
                    researching Responsible AI with a focus on foundational ML models. Passionate about
                    building scalable, ethical ML systems with real-world impact.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
                    <Link
                        href="#work"
                        className="inline-flex items-center gap-2 text-neutral-300 hover:text-white underline underline-offset-[3px] decoration-neutral-500/60 hover:decoration-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-4 opacity-80"
                            aria-hidden
                        >
                            <path d="M9.4 16.6L5.8 13l3.6-3.6-1.4-1.4L3 13l4.4 5 2-1zM14.6 7.4L18.2 11l-3.6 3.6 1.4 1.4L21 11l-4.4-5-2 1.4z" />
                        </svg>
                        <span className="font-medium">View Work</span>
                    </Link>

                    <Link
                        href="https://youtube.com/@sayannath662"
                        className="inline-flex items-center gap-2 text-neutral-400 hover:text-white"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-4 opacity-80"
                            aria-hidden
                        >
                            <path d="M23.498 6.186a2.97 2.97 0 00-2.09-2.103C19.425 3.5 12 3.5 12 3.5s-7.425 0-9.408.583a2.97 2.97 0 00-2.09 2.103A31.35 31.35 0 000 12a31.35 31.35 0 00.502 5.814 2.97 2.97 0 002.09 2.103C4.575 20.5 12 20.5 12 20.5s7.425 0 9.408-.583a2.97 2.97 0 002.09-2.103A31.35 31.35 0 0024 12a31.35 31.35 0 00-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                        </svg>
                        YouTube →
                    </Link>
                </div>


                <p className="mt-10 text-xs sm:text-sm text-neutral-500 flex items-center">
                    <span className="inline-block w-2 h-2 mr-2 rounded-full bg-emerald-400 align-middle animate-pulse" />
                    <span>
                        Available for collaborations · Calgary,&nbsp;🇨🇦
                    </span>
                </p>
            </div>
        </section>
    );
}
