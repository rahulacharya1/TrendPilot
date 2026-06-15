import logo from "@/assets/logo/tp-logo.png"

const Navbar = () => {

    return (

        <nav className="w-full h-16 border-b bg-white flex items-center justify-between px-6">

            <div className="flex items-center gap-3">

                <img
                    src={logo}
                    alt="TrendPilot"
                    className="w-10 h-10"
                />

                <h1 className="text-2xl font-bold">
                    TrendPilot
                </h1>

            </div>

            <div className="flex items-center gap-4">

                <button className="px-4 py-2 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 text-white">
                    Upgrade
                </button>

            </div>

        </nav>
    )
}

export default Navbar;
