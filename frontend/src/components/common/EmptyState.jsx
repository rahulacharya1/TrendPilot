const EmptyState = ({
    title,
    description,
}) => {

    return (

        <div className="flex flex-col items-center justify-center py-20 text-center">

            <h2 className="text-2xl font-bold">
                {title}
            </h2>

            <p className="text-gray-500 mt-3 max-w-md">
                {description}
            </p>

        </div>
    )
}

export default EmptyState
