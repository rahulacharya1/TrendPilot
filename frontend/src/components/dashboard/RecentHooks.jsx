const hooks = [
    "This AI tool changed content creation forever",
    "Stop posting reels without this trick",
    "The easiest way to go viral in 2026",
]

const RecentHooks = () => {

    return (

        <div className="bg-white p-6 rounded-2xl border">

            <h2 className="text-2xl font-bold mb-5">
                Recent Hooks
            </h2>

            <div className="space-y-4">

                {hooks.map((hook) => (

                    <div
                        key={hook}
                        className="p-4 rounded-xl bg-gray-50"
                    >

                        {hook}

                    </div>

                ))}

            </div>

        </div>
    )
}

export default RecentHooks
