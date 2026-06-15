import { useEffect, useState } from "react"
import { getTrends } from "@/services/trendService"
import { Sparkles } from "lucide-react"

const TopTopics = () => {
    const [topics, setTopics] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const trends = await getTrends()
                const uniqueCategories = [...new Set(trends.map(t => t.category))].filter(Boolean)
                if (uniqueCategories.length > 0) {
                    setTopics(uniqueCategories.slice(0, 4))
                } else {
                    setTopics(["Tech & Web", "AI Workflow", "SaaS Business", "Creator Economy"])
                }
            } catch (err) {
                console.error("Failed to load top topics", err)
                setTopics(["Tech & Web", "AI Workflow", "SaaS Business", "Creator Economy"])
            } finally {
                setLoading(false)
            }
        }
        fetchTopics()
    }, [])

    return (
        <div className="bg-card text-foreground p-6 rounded-2xl border border-border/80 shadow-xs select-none">
            <h2 className="text-xl font-bold mb-5 tracking-tight text-foreground flex items-center justify-between">
                <span>Top Topics</span>
                <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
            </h2>

            {loading ? (
                <div className="space-y-3">
                    <div className="h-14 bg-muted animate-pulse rounded-xl" />
                    <div className="h-14 bg-muted animate-pulse rounded-xl" />
                    <div className="h-14 bg-muted animate-pulse rounded-xl" />
                </div>
            ) : (
                <div className="space-y-3">
                    {topics.map((topic) => (
                        <div
                            key={topic}
                            className="flex items-center justify-between p-4 rounded-xl bg-muted/40 border border-border/40 hover:bg-muted/70 transition-all duration-200"
                        >
                            <span className="text-sm font-semibold text-foreground">
                                {topic}
                            </span>
                            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400">
                                Trending
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default TopTopics
