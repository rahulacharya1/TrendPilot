import { useState } from "react"
import Navbar from "@/components/common/Navbar"
import Sidebar from "@/components/common/Sidebar"

const MainLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="flex bg-background text-foreground min-h-screen relative overflow-x-hidden">
            {/* Mobile Sidebar Backdrop */}
            {sidebarOpen && (
                <div 
                    className="fixed inset-0 bg-background/80 backdrop-blur-xs z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar drawer */}
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex-1 flex flex-col min-w-0">
                <Navbar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />
                <main className="p-8 flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default MainLayout

