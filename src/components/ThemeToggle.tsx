"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type Props = { className?: string };

export default function ThemeToggle({ className = "" }: Props) {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const isDark = mounted ? resolvedTheme === "dark" : true;
    const label = isDark ? "Light" : "Dark";

    return (
        <button
            type="button"
            aria-label={`Switch to ${label} mode`}
            title={`Switch to ${label} mode`}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors ${className}`}
        >
            {label}
        </button>
    );
}
