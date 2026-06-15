import { useEffect, useState } from "react"
import { getHooks } from "@/services/hookService"

const RecentHooks = () => {
    const [hooks, setHooks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchRecent = async () => {
            try {
                const data = await getHooks()
                setHooks(data.slice(0, 3))
            } catch (err) {
                console.error("Failed to load recent hooks", err)
            } finally {
                setLoading(false)
            }
        }
        fetchRecent()
    }, [])

    return (
        <div className="bg-card text-foreground p-6 rounded-2xl border border-border/80 shadow-xs mb-6 select-none animate-in fade-in duration-300">
            <h2 className="text-xl font-bold mb-5 text-foreground tracking-tight flex items-center gap-2">
                <span>Recent Hooks</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            </h2>

            {loading ? (
                <div className="space-y-3">
                    <div className="h-14 bg-muted animate-pulse rounded-xl" />
                    <div className="h-14 bg-muted animate-pulse rounded-xl" />
                    <div className="h-14 bg-muted animate-pulse rounded-xl" />
                </div>
            ) : hooks.length === 0 ? (
                <div className="p-8 text-center text-sm text-muted-foreground bg-muted/20 border border-dashed border-border/60 rounded-xl">
                    No hooks generated yet. Head over to the Hook Generator to create some.
                </div>
            ) : (
                <div className="space-y-3.5">
                    {hooks.map((item) => {
                        let badgeColors = "bg-primary/10 text-primary"
                        const type = item.hook_type || ""
                        if (type.includes("Curiosity")) badgeColors = "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                        if (type.includes("Authority")) badgeColors = "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                        if (type.includes("Storytelling")) badgeColors = "bg-purple-500/10 text-purple-600 dark:text-purple-400"
                        
                        return (
                            <div
                                key={item.id}
                                className="p-4 rounded-xl bg-muted/40 border border-border/40 hover:bg-muted/70 transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-3"
                            >
                                <p className="text-sm font-medium leading-relaxed text-foreground">
                                    "{item.content}"
                                </p>
                                <div className="flex items-center gap-2 shrink-0">
                                    {type && (
                                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase ${badgeColors}`}>
                                            {type}
                                        </span>
                                    )}
                                    <span className="text-[10px] text-muted-foreground font-medium">
                                        for {item.trend_title || "General"}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default RecentHooks
