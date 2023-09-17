import { useState, useEffect } from "preact/hooks";
import "bootstrap-icons/font/bootstrap-icons.css";


export default function ToggleTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      class="w-10 h-10 flex items-center justify-center rounded-md hover:bg-stone-300 dark:hover:bg-stone-800"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <i class="bi bi-moon-stars-fill"  style={{ fontSize: "1.5em" }}></i>
      ) : (
        <i class="bi bi-sun-fill"  style={{ fontSize: "1.5em" }}></i>
      )}
      <span class="sr-only">Toggle Theme</span>
    </button>
  );
}
