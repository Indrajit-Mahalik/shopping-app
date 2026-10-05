import React from "react";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="theme_toggle_btn"
      onClick={toggleTheme}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle Dark and Light Mode"
    >
      <span className="theme_icon_wrapper">
        {isDark ? (
          <i className="fa fa-sun-o theme_sun_icon" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-moon-o theme_moon_icon" aria-hidden="true"></i>
        )}
      </span>
    </button>
  );
}

export default ThemeToggle;
