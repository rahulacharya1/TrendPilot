import { NavLink } from "react-router-dom"
import useAuthStore from "@/store/authStore"
import {
    LayoutDashboard,
    TrendingUp,
    Sparkles,
    FileText,
    Users,
    BarChart3,
    Shield,
} from "lucide-react"
import logo from "@/assets/logo/tp-logo.png"

const Sidebar = ({ isOpen, onClose }) => {
    const user = useAuthStore((state) => state.user)
    const isAdmin = user && (user.isStaff || user.isSuperuser)

    const menus = [
        {
            title: "Dashboard",
            icon: LayoutDashboard,
            path: "/dashboard",
        },
        {
            title: "Trends",
            icon: TrendingUp,
            path: "/trends",
        },
        {
            title: "Hooks",
            icon: Sparkles,
            path: "/hooks",
        },
        {
            title: "Scripts",
            icon: FileText,
            path: "/scripts",
        },
        {
            title: "Competitors",
            icon: Users,
            path: "/competitors",
        },
        {
            title: "Analytics",
            icon: BarChart3,
            path: "/analytics",
        },
    ]

    if (isAdmin) {
        menus.push({
            title: "Admin Panel",
            icon: Shield,
            path: "/admin-panel",
        })
    }

    return (
        <aside className={`w-64 min-h-screen border-r border-sidebar-border bg-sidebar text-sidebar-foreground p-6 flex flex-col justify-between select-none fixed inset-y-0 left-0 z-50 lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
            <div>
                {/* Brand Logo & Name */}
                <div className="flex items-center gap-3 mb-8 px-2">
                    <img src={logo} alt="TrendPilot" className="w-9 h-9" />
                    <span className="text-xl font-bold bg-linear-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
                        TrendPilot
                    </span>
                </div>

                {/* Navigation Items */}
                <nav className="space-y-1">
                    {menus.map((menu) => (
                        <NavLink
                            key={menu.title}
                            to={menu.path}
                            onClick={onClose}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                                    isActive
                                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.02]"
                                        : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                                }`
                            }
                        >
                            <menu.icon className="w-4.5 h-4.5 transition-transform duration-200 group-hover:scale-110" />
                            <span>{menu.title}</span>
                        </NavLink>
                    ))}
                </nav>
            </div>

            {/* Premium Indicator / Footer */}
            <div className="mt-auto pt-6 border-t border-sidebar-border/50">
                <div className="bg-linear-to-br from-purple-500/5 to-indigo-500/5 border border-purple-500/10 rounded-2xl p-4 text-center">
                    <p className="text-xs font-semibold text-purple-600 dark:text-purple-400">Upgrade to Pro</p>
                    <p className="text-[10px] text-muted-foreground mt-1 leading-relaxed">Get unlimited AI generations & real-time trends</p>
                    <NavLink
                        to="/dashboard"
                        onClick={onClose}
                        className="mt-3 block w-full py-1.5 px-3 rounded-lg bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-[11px] font-semibold text-center transition-all shadow-sm"
                    >
                        Go Premium
                    </NavLink>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar

