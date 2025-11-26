"use client";

import {
  createContext,
  startTransition,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const storageKey = "moneytoring-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme =
      typeof window !== "undefined"
        ? (localStorage.getItem(storageKey) as Theme | null)
        : null;
    if (savedTheme === "light" || savedTheme === "dark") {
      startTransition(() => setTheme(savedTheme));
    }
  }, []);

  useEffect(() => {
    const body = document.body;
    body.classList.remove("theme-light", "theme-dark", "dark");
    if (theme === "dark") {
      body.classList.add("theme-dark", "dark");
    } else {
      body.classList.add("theme-light");
    }
    localStorage.setItem(storageKey, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () =>
        setTheme((prev) => (prev === "light" ? "dark" : "light")),
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return ctx;
}
