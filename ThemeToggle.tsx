"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-full border border-[color:var(--color-border)] px-4 py-2 text-sm font-medium text-[color:var(--color-text)] transition hover:bg-white/70 dark:border-[color:var(--color-dark-border)] dark:text-[color:var(--color-dark-text)] dark:hover:bg-white/5"
      aria-label="테마 전환"
    >
      {isDark ? (
        <Moon className="h-4 w-4 text-sky-300" />
      ) : (
        <Sun className="h-4 w-4 text-lime-600" />
      )}
      {isDark ? "다크" : "라이트"}
    </button>
  );
}
