import { useState } from "react"

const useTrends = () => {

    const [trends, setTrends] = useState([])

    const fetchTrends = async () => {

        console.log("fetch trends")

    }

    return {
        trends,
        fetchTrends,
    }
}

export default useTrends
