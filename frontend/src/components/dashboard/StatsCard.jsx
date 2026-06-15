const StatsCard = ({
    title,
    value,
    growth,
    icon,
}) => {

    return (

        <div className="bg-white p-6 rounded-2xl border shadow-sm">

            <div className="flex items-center justify-between">

                <div>

                    <p className="text-gray-500">
                        {title}
                    </p>

                    <h2 className="text-4xl font-bold mt-3">
                        {value}
                    </h2>

                    <p className="text-green-500 mt-2">
                        {growth}
                    </p>

                </div>

                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center">

                    {icon}

                </div>

            </div>

        </div>
    )
}

export default StatsCard
