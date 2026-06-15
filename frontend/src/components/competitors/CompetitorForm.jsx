import { useState } from "react"

const CompetitorForm = () => {

    const [creator, setCreator] = useState("")

    return (

        <div className="bg-white p-6 rounded-2xl border">

            <h2 className="text-2xl font-bold mb-5">
                Analyze Competitor
            </h2>

            <input
                type="text"
                placeholder="Enter creator name..."
                value={creator}
                onChange={(e) => setCreator(e.target.value)}
                className="w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button className="mt-5 w-full py-3 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold">

                Analyze Now

            </button>

        </div>
    )
}

export default CompetitorForm
