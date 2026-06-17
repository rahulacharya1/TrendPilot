import { NavLink } from "react-router-dom"
import logo from "@/assets/logo/tp-logo.png"
import useAuthStore from "../../store/authStore"
import ThemeToggle from "./ThemeToggle"

const MarketingNavbar = () => {
    const accessToken = useAuthStore((state) => state.accessToken)

    const navLinks = [
        { title: "Home", path: "/" },
        { title: "Our Services", path: "/services" },
        { title: "About Us", path: "/about" },
        { title: "Contact Us", path: "/contact" },
    ]

    return (
        <header className="fixed top-0 left-0 w-full border-b border-border/40 bg-background/80 backdrop-blur-md z-50 select-none transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Brand */}
                <NavLink to="/" className="flex items-center gap-3">
                    <img src={logo} alt="TrendPilot Logo" className="w-8 h-8" />
                    <span className="text-lg font-bold bg-linear-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
                        TrendPilot
                    </span>
                </NavLink>

                {/* Center Links */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.title}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors hover:text-foreground ${
                                    isActive ? "text-primary" : "text-muted-foreground"
                                }`
                            }
                        >
                            {link.title}
                        </NavLink>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    {accessToken ? (
                        <NavLink
                            to="/dashboard"
                            className="text-sm font-medium px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-xs"
                        >
                            Dashboard
                        </NavLink>
                    ) : (
                        <>
                            <NavLink
                                to="/login"
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/register"
                                className="text-sm font-medium px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-xs"
                            >
                                Get Started
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}

export default MarketingNavbar
