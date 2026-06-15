const stats = [
    {
        label: "Posts / Week",
        value: "14",
    },
    {
        label: "Avg Views",
        value: "120K",
    },
    {
        label: "Viral Rate",
        value: "18%",
    },
    {
        label: "Top Platform",
        value: "Instagram",
    },
]

const CompetitorStats = () => {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {stats.map((stat) => (

                <div
                    key={stat.label}
                    className="bg-white p-6 rounded-2xl border"
                >

                    <p className="text-gray-500">
                        {stat.label}
                    </p>

                    <h2 className="text-3xl font-bold mt-3">
                        {stat.value}
                    </h2>

                </div>

            ))}

        </div>
    )
}

export default CompetitorStats
