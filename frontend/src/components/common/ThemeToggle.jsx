import { Moon, Sun } from "lucide-react"
import useTheme from "@/hooks/useTheme"

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-border bg-card text-foreground hover:bg-muted transition duration-200 flex items-center justify-center cursor-pointer"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun className="w-4.5 h-4.5 text-amber-500" />
            ) : (
                <Moon className="w-4.5 h-4.5 text-slate-700" />
            )}
        </button>
    )
}

export default ThemeToggle

