const TrendCard = ({
    title,
    score,
    category,
}) => {

    return (

        <div className="bg-white p-5 rounded-2xl border">

            <div className="flex items-center justify-between">

                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm">

                    {category}

                </span>

                <span className="font-bold text-green-500">

                    {score}

                </span>

            </div>

            <h2 className="text-xl font-semibold mt-5">

                {title}

            </h2>

        </div>
    )
}

export default TrendCard
