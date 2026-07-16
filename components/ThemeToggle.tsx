"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function subscribe(callback: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", callback);
  window.addEventListener("theme-change", callback);
  return () => {
    media.removeEventListener("change", callback);
    window.removeEventListener("theme-change", callback);
  };
}

function getSnapshot(): Theme {
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getServerSnapshot(): Theme {
  return "light";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    window.localStorage.setItem("theme", next);
    window.dispatchEvent(new Event("theme-change"));
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="rounded-full border border-line px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-ink-muted transition-colors hover:border-accent hover:text-ink cursor-pointer"
    >
      {theme === "dark" ? "Dark" : "Light"}
    </button>
  );
}
