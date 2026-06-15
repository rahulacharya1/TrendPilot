const topics = [
    "AI Tools",
    "Instagram Growth",
    "YouTube Automation",
    "Faceless Content",
]

const TopTopics = () => {

    return (

        <div className="bg-white p-6 rounded-2xl border">

            <h2 className="text-2xl font-bold mb-5">
                Top Topics
            </h2>

            <div className="space-y-4">

                {topics.map((topic) => (

                    <div
                        key={topic}
                        className="flex items-center justify-between p-4 rounded-xl bg-gray-50"
                    >

                        <span>
                            {topic}
                        </span>

                        <span className="text-purple-500 font-bold">
                            Trending
                        </span>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default TopTopics
