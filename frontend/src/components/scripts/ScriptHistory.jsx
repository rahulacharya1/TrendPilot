const scripts = [
    "AI Reels Strategy",
    "Instagram Growth Hacks",
    "Faceless YouTube Automation",
]

const ScriptHistory = () => {

    return (

        <div className="bg-white p-6 rounded-2xl border">

            <h2 className="text-2xl font-bold mb-5">
                Recent Scripts
            </h2>

            <div className="space-y-4">

                {scripts.map((script) => (

                    <div
                        key={script}
                        className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
                    >

                        {script}

                    </div>

                ))}

            </div>

        </div>
    )
}

export default ScriptHistory
