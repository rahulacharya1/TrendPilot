import Navbar from "@/components/common/Navbar"
import Sidebar from "@/components/common/Sidebar"

const MainLayout = ({
    children,
}) => {

    return (

        <div className="flex bg-gray-50 min-h-screen">

            <Sidebar />

            <div className="flex-1">

                <Navbar />

                <main className="p-8">

                    {children}

                </main>

            </div>

        </div>
    )
}

export default MainLayout
