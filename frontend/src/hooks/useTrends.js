import { useState } from "react"
import { getTrends } from "@/services/trendService"

const useTrends = () => {
    const [trends, setTrends] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchTrends = async () => {
        setLoading(true)
        setError(null)
        try {
            const data = await getTrends()
            setTrends(Array.isArray(data) ? data : (data.results || []))
        } catch (err) {
            console.error("Failed to fetch trends", err)
            setError("Failed to load trends data.")
        } finally {
            setLoading(false)
        }
    }

    return {
        trends,
        loading,
        error,
        fetchTrends,
    }
}

export default useTrends

