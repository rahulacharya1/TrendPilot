const HookFilters = () => {

    const filters = [
        "All",
        "Funny",
        "Curiosity",
        "Storytelling",
        "Authority",
    ]

    return (

        <div className="flex flex-wrap gap-3">

            {filters.map((filter) => (

                <button
                    key={filter}
                    className="px-4 py-2 rounded-xl border hover:bg-purple-500 hover:text-white transition"
                >

                    {filter}

                </button>

            ))}

        </div>
    )
}

export default HookFilters
