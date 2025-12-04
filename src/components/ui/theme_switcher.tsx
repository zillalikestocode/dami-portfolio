import { useEffect, useState } from "react";
import { SunIcon, Moon } from "lucide-react";
import { motion } from "motion/react";

type Theme = "light" | "dark" | "system";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    const userPreference = storedTheme || "system";
    setTheme(userPreference);

    const getResolvedTheme = (themeValue: Theme): "light" | "dark" => {
      if (themeValue === "system") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }
      return themeValue;
    };

    const resolved = getResolvedTheme(userPreference);
    setResolvedTheme(resolved);

    if (resolved === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        const newResolvedTheme = e.matches ? "dark" : "light";
        setResolvedTheme(newResolvedTheme);

        if (newResolvedTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]);

  const handleThemeChange = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    setResolvedTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", newTheme);

    window.dispatchEvent(
      new CustomEvent("theme-change", { detail: { theme: newTheme } }),
    );
  };

  return (
    <div className="border-border dark:bg-[#292929] gap-2 flex relative border z-30 bg-[#f5f5f5] p-1 rounded-4xl">
      <button
        onClick={() => handleThemeChange("light")}
        className="px-2 py-1.5 relative"
        aria-label="Switch to light mode"
      >
        {resolvedTheme === "light" && (
          <motion.div
            layoutId="theme-indicator"
            className="absolute top-0 bottom-0 left-0 right-0 -z-10 bg-primary w-full h-full rounded-full"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <SunIcon
          color={resolvedTheme === "light" ? "#171717" : "#5c5c5c"}
          size={20}
          strokeWidth={2.5}
          className="z-20"
        />
      </button>
      <button
        onClick={() => handleThemeChange("dark")}
        className="px-2 py-1.5 relative"
        aria-label="Switch to dark mode"
      >
        {resolvedTheme === "dark" && (
          <motion.div
            layoutId="theme-indicator"
            className="absolute top-0 bottom-0 left-0 right-0 -z-10 bg-primary w-full h-full rounded-full"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <Moon
          color={resolvedTheme === "dark" ? "white" : "#a3a3a3"}
          size={20}
          strokeWidth={2.5}
          className={"z-20"}
        />
      </button>
    </div>
  );
}
