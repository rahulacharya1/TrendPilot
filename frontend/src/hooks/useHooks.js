import { useState } from "react"
import { getHooks, generateHooks as apiGenerateHooks } from "@/services/hookService"

const useHooks = () => {
    const [hooks, setHooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchHooks = async () => {
        setLoading(true)
        setError(null)
        try {
            const data = await getHooks()
            setHooks(data)
        } catch (err) {
            console.error("Failed to fetch hooks", err)
            setError("Failed to load hooks history.")
        } finally {
            setLoading(false)
        }
    }

    const generateHooks = async (topic) => {
        setLoading(true)
        setError(null)
        try {
            const data = await apiGenerateHooks(topic)
            if (data.success && data.hooks) {
                setHooks((prev) => [...data.hooks, ...prev])
                return data.hooks
            }
        } catch (err) {
            console.error("Failed to generate hooks", err)
            setError("Failed to generate new hooks. Please try again.")
            throw err;
        } finally {
            setLoading(false)
        }
    }

    return {
        hooks,
        loading,
        error,
        fetchHooks,
        generateHooks,
    }
}

export default useHooks
