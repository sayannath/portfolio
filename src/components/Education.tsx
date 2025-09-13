"use client";

import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 sm:px-8 py-20">
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap className="w-7 h-7 text-neutral-500 dark:text-neutral-400" />
        <h2 className="text-4xl sm:text-5xl text-neutral-900 dark:text-neutral-100 font-semibold tracking-tight">
          Education
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              Master of Science (Thesis-based)
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              University of Calgary · Electrical & Computer Engineering
            </p>
            <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              <p>GPA: 4.0/4.0</p>
              <p>Research: Responsible AI, LLM Research</p>
            </div>
            <p className="mt-2 text-sm text-neutral-500">Fall 2023 – Present</p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              Bachelor of Technology (B.Tech)
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Kalinga Institute of Industrial Technology (KIIT)
            </p>
            <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              <p>GPA: 9.0/10</p>
              <p>Major: Information Technology (IT)</p>
            </div>
            <p className="mt-2 text-sm text-neutral-500">Summer 2019 – Spring 2023</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Recognition & Awards
          </h3>
          <ul className="mt-4 space-y-5 text-sm">
            <li className="flex items-start justify-between">
              <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                <Award className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                <span>
                  ESE Graduate Research Award <br />
                  <span className="text-neutral-500 text-xs">University of Calgary</span>
                </span>
              </div>
              <span className="text-neutral-500">2× Winner</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
