import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const ThemeButton: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <label
      htmlFor="themeToggle"
      className="flex items-center justify-center rounded-lg p-2 transition-opacity cursor-pointer"
    >
      <input
        type="checkbox"
        id="themeToggle"
        className="hidden"
        checked={resolvedTheme === "dark"}
        onChange={toggleTheme}
      />
      <div
        className={classNames(
          resolvedTheme === "dark" ? "bg-gray-800" : "bg-gray-100",
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
        )}
      >
        <span className="sr-only">Toggle theme</span>
        <span
          className={classNames(
            resolvedTheme === "dark" ? "translate-x-0" : "translate-x-5",
            "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          )}
        >
          <span
            className={classNames(
              resolvedTheme === "dark"
                ? "opacity-100 duration-200 ease-in"
                : "opacity-0 duration-100 ease-out",
              "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
            )}
            aria-hidden="true"
          >
            <SunIcon className="h-3 w-3 text-gray-800" />
          </span>
          <span
            className={classNames(
              resolvedTheme === "dark"
                ? "opacity-0 duration-100 ease-out"
                : "opacity-100 duration-200 ease-in",
              "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
            )}
            aria-hidden="true"
          >
            <MoonIcon
              className={classNames(
                resolvedTheme === "dark" ? "text-white" : "text-slate-800",
                "h-3 w-3"
              )}
            />
          </span>
        </span>
      </div>
    </label>
  );
};

export default ThemeButton;
