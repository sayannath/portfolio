import type { Config } from "tailwindcss";


const config: Config = {
    content: ["./src/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
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