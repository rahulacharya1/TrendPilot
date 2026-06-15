const ActivityCard = ({
    title,
    description,
    time,
}) => {

    return (

        <div className="bg-white p-5 rounded-2xl border">

            <h3 className="font-semibold">
                {title}
            </h3>

            <p className="text-gray-500 mt-2">
                {description}
            </p>

            <span className="text-sm text-gray-400 mt-4 block">
                {time}
            </span>

        </div>
    )
}

export default ActivityCard
