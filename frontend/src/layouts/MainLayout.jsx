import Navbar from "@/components/common/Navbar"
import Sidebar from "@/components/common/Sidebar"

const MainLayout = ({
    children,
}) => {
    return (
        <div className="flex bg-background text-foreground min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0">
                <Navbar />
                <main className="p-8 flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default MainLayout

