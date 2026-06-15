import { useState } from "react"

const ScriptForm = () => {

    const [topic, setTopic] = useState("")

    const handleGenerate = () => {
        console.log(topic)
    }

    return (

        <div className="bg-white p-6 rounded-2xl border">

            <h2 className="text-2xl font-bold mb-5">
                Generate AI Script
            </h2>

            <textarea
                rows="5"
                placeholder="Enter your topic..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full p-4 rounded-xl border outline-none resize-none focus:ring-2 focus:ring-purple-500"
            />

            <button
                onClick={handleGenerate}
                className="mt-5 w-full py-3 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold"
            >

                Generate Script

            </button>

        </div>
    )
}

export default ScriptForm
