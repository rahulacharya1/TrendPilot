import { useState } from "react"
import { getScripts, generateScript as apiGenerateScript } from "@/services/scriptService"

const useScripts = () => {
    const [scripts, setScripts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchScripts = async () => {
        setLoading(true)
        setError(null)
        try {
            const data = await getScripts()
            setScripts(Array.isArray(data) ? data : (data.results || []))
        } catch (err) {
            console.error("Failed to fetch scripts", err)
            setError("Failed to load scripts history.")
        } finally {
            setLoading(false)
        }
    }

    const generateScript = async (topic) => {
        setLoading(true)
        setError(null)
        try {
            const data = await apiGenerateScript(topic)
            if (data.success && data.script) {
                setScripts((prev) => [data.script, ...prev])
                return data.script
            }
        } catch (err) {
            console.error("Failed to generate script", err)
            setError("Failed to generate new script. Please try again.")
            throw err;
        } finally {
            setLoading(false)
        }
    }

    return {
        scripts,
        loading,
        error,
        fetchScripts,
        generateScript,
    }
}

export default useScripts
