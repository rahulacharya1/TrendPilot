import { useState } from "react"

const useCompetitors = () => {

    const [competitors, setCompetitors] = useState([])

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
