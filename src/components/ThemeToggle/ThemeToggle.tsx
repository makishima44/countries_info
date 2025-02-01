import { useEffect, useState } from "react";
import s from "./ThemeToggle.module.css";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <button className={s.toggleButton} onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
    </div>
  );
};
