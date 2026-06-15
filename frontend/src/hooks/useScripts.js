import { useState } from "react"

const useScripts = () => {

    const [scripts, setScripts] = useState([])

    const generateScript = async (
        topic
    ) => {

        console.log(topic)

    }

    return {
        scripts,
        generateScript,
    }
}

export default useScripts
