const insights = [
    "Posting consistently at night performs better",
    "Short educational hooks get highest engagement",
    "Carousel posts are underutilized",
    "AI niche competition is increasing rapidly",
]

const CompetitorInsights = () => {

    return (

        <div className="bg-white p-6 rounded-2xl border">

            <h2 className="text-2xl font-bold mb-5">
                AI Insights
            </h2>

            <div className="space-y-4">

                {insights.map((insight) => (

                    <div
                        key={insight}
                        className="p-4 rounded-xl bg-gray-50"
                    >

                        {insight}

                    </div>

                ))}

            </div>

        </div>
    )
}

export default CompetitorInsights
