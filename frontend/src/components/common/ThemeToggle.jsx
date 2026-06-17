import { Sun, Moon } from "lucide-react"
import useTheme from "../../hooks/useTheme"

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-border bg-card text-foreground hover:bg-muted transition duration-200 flex items-center justify-center cursor-pointer relative"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                <Sun className="w-4.5 h-4.5 text-amber-500 animate-in spin-in-90 duration-300" />
            ) : (
                <Moon className="w-4.5 h-4.5 text-indigo-600 animate-in spin-in-90 duration-300" />
            )}
        </button>
    )
}

export default ThemeToggle
