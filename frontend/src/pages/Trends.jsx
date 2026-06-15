import { useEffect } from "react"
import DashboardLayout from "@/layouts/DashboardLayout"
import Header from "@/components/common/Header"
import useTrends from "@/hooks/useTrends"
import { Sparkles, RefreshCw } from "lucide-react"

const Trends = () => {
    const { trends, loading, error, fetchTrends } = useTrends()

    useEffect(() => {
        fetchTrends()
    }, [])

    return (
        <DashboardLayout>
            <div className="flex items-center justify-between select-none">
                <Header
                    title="Trend Discovery"
                    subtitle="Identify high-scoring breakout topics across social channels"
                />
                <button
                    onClick={fetchTrends}
                    disabled={loading}
                    className="p-2.5 rounded-xl border border-border bg-card text-foreground hover:bg-muted transition duration-200 cursor-pointer flex items-center gap-2 text-xs font-semibold"
                >
                    <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
                    Refresh Feed
                </button>
            </div>

            {loading ? (
                <div className="flex flex-col items-center justify-center py-20 space-y-4">
                    <div className="w-10 h-10 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                    <p className="text-xs text-muted-foreground">Fetching trend feeds...</p>
                </div>
            ) : error ? (
                <div className="p-8 border border-destructive/20 bg-destructive/5 rounded-2xl text-center select-none">
                    <p className="text-sm text-destructive font-medium">{error}</p>
                    <button onClick={fetchTrends} className="mt-3 text-xs text-primary font-semibold hover:underline">
                        Try again
                    </button>
                </div>
            ) : trends.length === 0 ? (
                <div className="p-12 border border-border/80 bg-card rounded-2xl text-center select-none">
                    <p className="text-sm text-muted-foreground">No trends found in database. Seed data first.</p>
                </div>
            ) : (
                <div className="bg-card border border-border/80 rounded-2xl overflow-hidden shadow-xs select-none">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-border/50 bg-muted/20 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                    <th className="px-6 py-4">Topic / Trend</th>
                                    <th className="px-6 py-4">Platform</th>
                                    <th className="px-6 py-4">Category</th>
                                    <th className="px-6 py-4">Viral Score</th>
                                    <th className="px-6 py-4">Freshness</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 text-sm text-foreground">
                                {trends.map((trend) => {
                                    // Colored platform badges
                                    let platformBadge = "bg-slate-500/10 text-slate-600 dark:text-slate-400"
                                    if (trend.platform === "TikTok") platformBadge = "bg-rose-500/10 text-rose-600 dark:text-rose-400"
                                    if (trend.platform === "YouTube") platformBadge = "bg-red-500/10 text-red-600 dark:text-red-400"
                                    if (trend.platform === "Instagram Reels") platformBadge = "bg-pink-500/10 text-pink-600 dark:text-pink-400"

                                    // Colored freshness badges
                                    let freshnessBadge = "bg-muted text-muted-foreground"
                                    if (trend.freshness === "Breakout") freshnessBadge = "bg-purple-500/10 text-purple-600 dark:text-purple-400"
                                    if (trend.freshness === "High") freshnessBadge = "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                    if (trend.freshness === "Medium") freshnessBadge = "bg-amber-500/10 text-amber-600 dark:text-amber-400"

                                    return (
                                        <tr key={trend.id} className="hover:bg-muted/10 transition-colors">
                                            <td className="px-6 py-4 font-semibold text-foreground">
                                                {trend.title}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${platformBadge}`}>
                                                    {trend.platform}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-xs text-muted-foreground font-medium">
                                                {trend.category}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden">
                                                        <div
                                                            className="h-full bg-primary rounded-full"
                                                            style={{ width: `${trend.score}%` }}
                                                        />
                                                    </div>
                                                    <span className="text-xs font-bold">{trend.score}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${freshnessBadge}`}>
                                                    {trend.freshness}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="px-3 py-1.5 text-xs font-bold bg-primary text-primary-foreground hover:opacity-90 rounded-xl flex items-center gap-1 shadow-xs transition-all cursor-pointer">
                                                    <Sparkles className="w-3 h-3" /> Get Hooks
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </DashboardLayout>
    )
}

export default Trends

