import { useState } from "react"

const useHooks = () => {

    const [hooks, setHooks] = useState([])

    const generateHooks = async (
        topic
    ) => {

        console.log(topic)

    }

    return {
        hooks,
        generateHooks,
    }
}

export default useHooks
