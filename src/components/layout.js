import * as React from "react"
import { Link } from "gatsby"
import ThemeToggle from "./theme-toggle"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const [theme, setTheme] = React.useState("light")

  React.useEffect(() => {
    // Only run in browser (not during SSR)
    if (typeof window === "undefined") return

    // Get theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute("data-theme", savedTheme)
    } else {
      // Check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
      const systemTheme = prefersDark ? "dark" : "light"
      setTheme(systemTheme)
      document.documentElement.setAttribute("data-theme", systemTheme)
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = e => {
      // Only update if no saved preference
      if (!localStorage.getItem("theme")) {
        const newTheme = e.matches ? "dark" : "light"
        setTheme(newTheme)
        document.documentElement.setAttribute("data-theme", newTheme)
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const toggleTheme = () => {
    if (typeof window === "undefined") return

    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
  }

  let header

  if (isRootPath) {
    header = (
      <div className="header-content">
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    )
  } else {
    header = (
      <div className="header-content">
        <Link className="header-link-home" to="/">
          {title}
        </Link>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
