"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="h-10 w-10 flex items-center justify-center rounded-full border border-border bg-card text-foreground hover:bg-background transition-all"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <FaSun
          className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground"
        />
      ) : (
        <FaMoon
          className="rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground"
        />
      )}
    </button>
  );
}
