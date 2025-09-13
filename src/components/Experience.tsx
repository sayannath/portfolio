"use client";

type Job = {
  company: string;
  role: string;
  location: string;
  period: string;
  achievements: string[];
};

const JOBS: Job[] = [
  {
    company: "DISA Lab, University of Calgary",
    role: "Graduate Research Assistant",
    location: "Calgary, Canada",
    period: "August 2023 – Present",
    achievements: [
      "Fairness and Accuracy in Machine Learning: Conducted in-depth research on balancing fairness and accuracy in machine learning models by implementing bias mitigation strategies. Focused on developing methodologies that enhance model fairness without compromising performance.",
      "Collaborated with Dr. Shaina Reza from Vector Institute on Responsible AI initiatives, with a focus on large language models (LLMs). Contributing to the development of ethical and transparent AI systems by leveraging LLMs to understand and mitigate biases.",
      "Acted as a Teaching Assistant (TA) for undergraduate and graduate courses, providing mentorship and guidance to students.",
    ],
  },
  {
    company: "Scaler by InterviewBit",
    role: "Technical Content Reviewer and Problem Setter Intern",
    location: "Remote (India)",
    period: "November 2022 – August 2023",
    achievements: [
      "Setting up problems/quiz for Scaler Topics on Keras & PyTorch.",
      "Working to create an outline for technical content for Keras.",
      "Writing different technical content as a blog post for Keras.",
    ],
  },
  {
    company: "TensorFlow",
    role: "Google Summer of Code Student",
    location: "Remote (India)",
    period: "November 2022 – August 2023",
    achievements: [
      "Implemented MobileViT in TensorFlow and Keras.",
      "Used MobileViT's official Pytorch weights to port from Pytorch to TensorFlow.",
      "Created two notebooks for tutorial purposes i.e Off-the-shelf classification and Fine-tuned notebook.",
      "Publish all the models in TensorFlow Hub.",
    ],
  },
  {
    company: "Blend",
    role: "Machine Learning Engineer Intern",
    location: "Remote (India)",
    period: "October 2021 – June 2022",
    achievements: [
      "Responsible for creating Computer Vision Services to enhance the product.",
      "Worked on on-device Deep Learning with TensorFlow Lite as well deploying Machine Learning Services in production with AWS Sagemaker.",
      "Trained models on Google Cloud Platform, reproduced SOTA models from research. papers.",
    ],
  },
  {
    company: "TensorFlow Organisation",
    role: "Google Summer of Code Student",
    location: "Remote (India)",
    period: "May 2021 – August 2021",
    achievements: [
      "Understand the Tensorflow Lite Task Library.",
      "Implemented CameraX and remove the usage of fragments with the existing Camera2 and Camera API in Object Detection App.",
      "Implement Support Library with TensorFlow Lite Interpreter.",
      "Implemented the Image to BitMap conversion and modify Support Library and Task Library.",
      "Adding a Bounding Box Function in tflite-support Library.",
      "Implemented Data Binding.",
    ],
  },
];

/* ------- Technical Expertise (mirrors the screenshot) ------- */
const TECH = {
  languages: ["Python", "Java", "C/C++", "SQL", "Dart"],
  frameworks: ["PyTorch", "TensorFlow", "scikit-learn", "HuggingFace", "DSPy"],
  cloud: ["AWS", "Google Cloud", "Docker", "GitHub Actions", "REST APIs"],
  specializations: [
    "Responsible AI",
    "Applied AI",
    "Technical Writing",
    "LLM Efficiency",
  ],
};

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 sm:px-8 py-24">
      {/* Title + Icon */}
      <div className="flex items-center gap-3">
        <svg
          className="w-6 h-6 text-neutral-500 dark:text-neutral-400"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.63 7.63 0 0 0-1.63-.94l-.36-2.53a.5.5 0 0 0-.5-.43h-3.84a.5.5 0 0 0-.5.43l-.36 2.53c-.58.23-1.13.54-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.7 7.84a.5.5 0 0 0 .12.64l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94L2.82 13.6a.5.5 0 0 0-.12.64l1.92 3.32c.13.22.39.31.6.22l2.39-.96c.5.4 1.05.72 1.63.94l.36 2.53c.05.24.26.43.5.43h3.84c.24 0 .45-.19.5-.43l.36-2.53c.58-.23 1.13-.54 1.63-.94l2.39.96c.21.09.47 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7Z" />
        </svg>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Experience
        </h2>
      </div>

      {/* Subtitle */}
      <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 max-w-3xl">
        Driving innovation and developer experience across multiple organizations.
      </p>

      {/* Experience list — generous spacing, no dividers */}
      <div className="mt-16 space-y-20">
        {JOBS.map((job) => (
          <article key={job.company}>
            {/* Header row: company + right-aligned dates */}
            <div className="grid grid-cols-1 md:grid-cols-12 md:items-start gap-y-1">
              <div className="md:col-span-9">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                  {job.company}
                </h3>
              </div>
              <div className="md:col-span-3 md:text-right md:pt-1">
                <p className="text-sm text-neutral-500">{job.period}</p>
              </div>
            </div>

            {/* Role */}
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">{job.role}</p>

            {/* Location (mono) */}
            <p className="mt-2 font-mono text-sm tracking-wide text-neutral-500">
              {job.location}
            </p>

            {/* Achievements */}
            <div className="mt-8">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-400">
                Key Achievements:
              </p>
              <ul className="mt-3 space-y-3 text-sm text-neutral-600 dark:text-neutral-400 max-w-3xl">
                {job.achievements.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2.5 inline-block size-1.5 rounded-full bg-neutral-500/70 dark:bg-neutral-500/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {/* -------- Technical Expertise (screenshot style) -------- */}
      <div className="mt-28">
        {/* Big title with gear icon */}
        <div className="flex items-center gap-3">
          <svg
            className="w-6 h-6 text-neutral-500 dark:text-neutral-400"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.63 7.63 0 0 0-1.63-.94l-.36-2.53a.5.5 0 0 0-.5-.43h-3.84a.5.5 0 0 0-.5.43l-.36 2.53c-.58.23-1.13.54-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.7 7.84a.5.5 0 0 0 .12.64l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94L2.82 13.6a.5.5 0 0 0-.12.64l1.92 3.32c.13.22.39.31.6.22l2.39-.96c.5.4 1.05.72 1.63.94l.36 2.53c.05.24.26.43.5.43h3.84c.24 0 .45-.19.5-.43l.36-2.53c.58-.23 1.13-.54 1.63-.94l2.39.96c.21.09.47 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7Z" />
          </svg>
          <h3 className="text-4xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Technical Expertise
          </h3>
        </div>

        {/* Four columns */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-14">
          {/* Languages */}
          <div>
            <div className="flex items-center gap-2">
              {/* code icon */}
              <svg className="w-5 h-5 text-neutral-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.4 16.6 4.8 12l4.6-4.6 1.4 1.4L7.6 12l3.2 3.2-1.4 1.4Zm5.2 0L18.8 12l-4.6-4.6-1.4 1.4L16.4 12l-3.2 3.2 1.4 1.4Z" />
              </svg>
              <span className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Languages
              </span>
            </div>
            <ul className="mt-4 space-y-3 text-neutral-600 dark:text-neutral-400">
              {TECH.languages.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>

          {/* Frameworks */}
          <div>
            <div className="flex items-center gap-2">
              {/* layers icon */}
              <svg className="w-5 h-5 text-neutral-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3 2 8l10 5 10-5-10-5Zm0 8L2 16l10 5 10-5-10-5Z" />
              </svg>
              <span className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Frameworks
              </span>
            </div>
            <ul className="mt-4 space-y-3 text-neutral-600 dark:text-neutral-400">
              {TECH.frameworks.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>

          {/* Cloud & Tools */}
          <div>
            <div className="flex items-center gap-2">
              {/* cloud icon */}
              <svg className="w-5 h-5 text-neutral-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19a4 4 0 0 1 0-8 5.5 5.5 0 0 1 10.7-1.7A4.5 4.5 0 1 1 18 19H6Z" />
              </svg>
              <span className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Cloud &amp; Tools
              </span>
            </div>
            <ul className="mt-4 space-y-3 text-neutral-600 dark:text-neutral-400">
              {TECH.cloud.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <div className="flex items-center gap-2">
              {/* lightning icon */}
              <svg className="w-5 h-5 text-neutral-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2 3 14h7l-1 8 12-14h-7l-1-6Z" />
              </svg>
              <span className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Specializations
              </span>
            </div>
            <ul className="mt-4 space-y-3 text-neutral-600 dark:text-neutral-400">
              {TECH.specializations.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* -------- End Technical Expertise -------- */}
    </section>
  );
}
