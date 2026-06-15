const ScriptCard = ({
    title,
    script,
}) => {

    return (

        <div className="bg-white p-6 rounded-2xl border hover:shadow-md transition">

            <h2 className="text-2xl font-bold mb-4">
                {title}
            </h2>

            <p className="text-gray-600 leading-relaxed">

                {script}

            </p>

        </div>
    )
}

export default ScriptCard
