import hero from "@/assets/images/hero-image.png"

const Home = () => {

    return (

        <div className="min-h-screen bg-white">

            <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                <div>

                    <h1 className="text-6xl font-bold leading-tight">

                        Create Viral Content
                        With AI 🚀

                    </h1>

                    <p className="text-gray-500 text-lg mt-6">

                        Discover trends, generate hooks,
                        create scripts and grow faster
                        using AI powered insights.

                    </p>

                    <button className="mt-8 px-6 py-4 rounded-2xl bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold">

                        Get Started

                    </button>

                </div>

                <div>

                    <img
                        src={hero}
                        alt="Hero"
                        className="w-full"
                    />

                </div>

            </section>

        </div>
    )
}

export default Home
