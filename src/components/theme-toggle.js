import * as React from "react"

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="3" fill="currentColor"/>
          <circle cx="10" cy="2" r="1.5" fill="currentColor"/>
          <circle cx="10" cy="18" r="1.5" fill="currentColor"/>
          <circle cx="2" cy="10" r="1.5" fill="currentColor"/>
          <circle cx="18" cy="10" r="1.5" fill="currentColor"/>
          <circle cx="4.5" cy="4.5" r="1.5" fill="currentColor"/>
          <circle cx="15.5" cy="15.5" r="1.5" fill="currentColor"/>
          <circle cx="4.5" cy="15.5" r="1.5" fill="currentColor"/>
          <circle cx="15.5" cy="4.5" r="1.5" fill="currentColor"/>
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M17 10.5C16.8 14.9 13.1 18.5 8.6 18.5C4.9 18.5 1.7 16 0.5 12.5C0.4 12.3 0.5 12.1 0.7 12C0.9 11.9 1.1 12 1.2 12.2C2.3 14.1 4.3 15.4 6.6 15.4C10.2 15.4 13.1 12.5 13.1 8.9C13.1 6.6 11.9 4.6 10 3.4C9.8 3.3 9.7 3.1 9.8 2.9C9.9 2.7 10.1 2.6 10.3 2.7C14.5 4.1 17.3 7.1 17 10.5Z" fill="currentColor"/>
        </svg>
      )}
    </button>
  )
}

export default ThemeToggle
