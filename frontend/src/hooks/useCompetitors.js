import { useState } from "react"

const useCompetitors = () => {

    const [competitors] = useState([])

    const analyzeCompetitor = async (
        name
    ) => {

        console.log(name)

    }

    return {
        competitors,
        analyzeCompetitor,
    }
}

export default useCompetitors
