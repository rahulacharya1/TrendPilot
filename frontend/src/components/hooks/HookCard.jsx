const HookCard = ({
    hook,
    type,
}) => {

    return (

        <div className="bg-white p-5 rounded-2xl border hover:shadow-md transition">

            <div className="flex items-center justify-between mb-4">

                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm">

                    {type}

                </span>

                <button className="text-sm text-blue-500">
                    Copy
                </button>

            </div>

            <p className="text-lg leading-relaxed">
                {hook}
            </p>

        </div>
    )
}

export default HookCard
