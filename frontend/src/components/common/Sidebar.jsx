import {
    LayoutDashboard,
    TrendingUp,
    Sparkles,
    FileText,
    Users,
} from "lucide-react"

const Sidebar = () => {

    const menus = [
        {
            title: "Dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "Trends",
            icon: TrendingUp,
        },
        {
            title: "Hooks",
            icon: Sparkles,
        },
        {
            title: "Scripts",
            icon: FileText,
        },
        {
            title: "Competitors",
            icon: Users,
        },
    ]

    return (

        <aside className="w-64 min-h-screen border-r bg-white p-6">

            <h1 className="text-3xl font-bold mb-10">
                TrendPilot
            </h1>

            <div className="space-y-4">

                {menus.map((menu) => (

                    <button
                        key={menu.title}
                        className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition"
                    >

                        <menu.icon className="w-5 h-5" />

                        <span>
                            {menu.title}
                        </span>

                    </button>

                ))}

            </div>

        </aside>
    )
}

export default Sidebar
