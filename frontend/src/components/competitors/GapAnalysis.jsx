const gaps = [
    "No long-form storytelling content",
    "Weak AI tutorial coverage",
    "No faceless content strategy",
    "Low educational content output",
]

const GapAnalysis = () => {

    return (

        <div className="bg-white p-6 rounded-2xl border">

            <h2 className="text-2xl font-bold mb-5">
                Content Gaps
            </h2>

            <div className="space-y-4">

                {gaps.map((gap) => (

                    <div
                        key={gap}
                        className="p-4 rounded-xl bg-purple-50 border border-purple-100"
                    >

                        {gap}

                    </div>

                ))}

            </div>

        </div>
    )
}

export default GapAnalysis
