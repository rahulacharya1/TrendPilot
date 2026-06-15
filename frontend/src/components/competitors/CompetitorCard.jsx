const CompetitorCard = ({
    name,
    niche,
    followers,
    engagement,
}) => {

    return (

        <div className="bg-white p-6 rounded-2xl border">

            <div className="flex items-center justify-between">

                <div>

                    <h2 className="text-2xl font-bold">
                        {name}
                    </h2>

                    <p className="text-gray-500 mt-1">
                        {niche}
                    </p>

                </div>

                <div className="w-14 h-14 rounded-full bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">

                    {name.charAt(0)}

                </div>

            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">

                <div className="p-4 rounded-xl bg-gray-50">

                    <p className="text-gray-500 text-sm">
                        Followers
                    </p>

                    <h3 className="text-2xl font-bold mt-2">
                        {followers}
                    </h3>

                </div>

                <div className="p-4 rounded-xl bg-gray-50">

                    <p className="text-gray-500 text-sm">
                        Engagement
                    </p>

                    <h3 className="text-2xl font-bold mt-2">
                        {engagement}
                    </h3>

                </div>

            </div>

        </div>
    )
}

export default CompetitorCard
