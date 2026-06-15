import SearchBar from "./SearchBar"
import ThemeToggle from "./ThemeToggle"
import UserMenu from "./UserMenu"
import { Bell } from "lucide-react"

const Navbar = () => {
    return (
        <nav className="w-full h-16 border-b border-border bg-card text-foreground flex items-center justify-between px-8 select-none">
            {/* Left Search Bar */}
            <div className="flex items-center gap-4 flex-1">
                <SearchBar />
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-4">
                {/* Notification Bell */}
                <button 
                    className="p-2.5 rounded-xl border border-border bg-card text-foreground hover:bg-muted transition duration-200 flex items-center justify-center cursor-pointer relative"
                    aria-label="Notifications"
                >
                    <Bell className="w-4.5 h-4.5" />
                    <span className="absolute top-2 right-2.5 w-1.5 h-1.5 rounded-full bg-primary" />
                </button>

                {/* Theme Toggle */}
                <ThemeToggle />

                {/* Vertical Divider */}
                <div className="h-6 w-px bg-border" />

                {/* User Profile */}
                <UserMenu />
            </div>
        </nav>
    )
}

export default Navbar

