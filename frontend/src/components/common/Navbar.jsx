import { Bell, Search, LogOut, Menu } from "lucide-react"
import useAuthStore from "../../store/authStore"
import ThemeToggle from "./ThemeToggle"

const Navbar = ({ onToggleSidebar }) => {
    const { user, logout } = useAuthStore()

    return (
        <nav className="w-full h-16 border-b border-border bg-card text-foreground flex items-center justify-between px-8 select-none gap-4">
            {/* Toggle Hamburger Button on Mobile */}
            <button
                onClick={onToggleSidebar}
                className="p-2.5 rounded-xl border border-border bg-card text-foreground hover:bg-muted transition duration-200 lg:hidden cursor-pointer shrink-0"
                aria-label="Toggle Sidebar"
            >
                <Menu className="w-4.5 h-4.5" />
            </button>

            {/* Left Search Bar */}
            <div className="flex items-center gap-4 flex-1">
                <div className="relative max-w-xs w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input 
                        type="text" 
                        placeholder="Quick search..." 
                        className="w-full h-9 pl-9 pr-4 rounded-xl border border-border bg-muted/20 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition duration-200 text-xs"
                    />
                </div>
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

                {/* Theme Switcher */}
                <ThemeToggle />

                {/* Vertical Divider */}
                <div className="h-6 w-px bg-border" />

                {/* User Profile */}
                <div className="flex items-center gap-3 bg-muted/25 border border-border pl-3 pr-2 py-1.5 rounded-xl">
                    <span className="text-xs font-medium text-foreground select-none">
                        {user?.email ? user.email.split('@')[0] : 'Guest'}
                    </span>
                    <button
                        onClick={logout}
                        className="p-1 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors cursor-pointer"
                        title="Logout"
                    >
                        <LogOut className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

