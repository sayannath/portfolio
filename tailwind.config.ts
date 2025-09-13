import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class", // enables .dark toggling via next-themes
    content: [
        "./src/app/**/*.{ts,tsx}",
        "./src/components/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
            },
        },
    },
    plugins: [],
};

export default config;
