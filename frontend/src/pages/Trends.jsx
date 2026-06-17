import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import DashboardLayout from "@/layouts/DashboardLayout"
import Header from "@/components/common/Header"
import useTrends from "@/hooks/useTrends"
import { Sparkles, RefreshCw } from "lucide-react"

const Trends = () => {
    const navigate = useNavigate()
    const { trends, loading, error, fetchTrends } = useTrends()

    useEffect(() => {
        fetchTrends()
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                                {[1, 2, 3, 4, 5].map((n) => (
                                    <tr key={n} className="animate-pulse">
                                        <td className="px-6 py-5"><div className="h-4 bg-muted rounded w-48" /></td>
                                        <td className="px-6 py-5"><div className="h-5 bg-muted rounded-full w-20" /></td>
                                        <td className="px-6 py-5"><div className="h-3.5 bg-muted rounded w-32" /></td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-2">
                                                <div className="h-1.5 bg-muted rounded w-16" />
                                                <div className="h-4 bg-muted rounded w-6" />
                                            </div>
                                        </td>
                                        <td className="px-6 py-5"><div className="h-5 bg-muted rounded w-16" /></td>
                                        <td className="px-6 py-5 text-right flex justify-end"><div className="h-8 bg-muted rounded-xl w-24" /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : error ? (
                <div className="p-8 border border-red-500/20 bg-red-500/5 rounded-2xl text-center select-none">
                    <p className="text-sm text-red-600 dark:text-red-400 font-medium">{error}</p>
                    <button onClick={fetchTrends} className="mt-3 text-xs text-primary font-semibold hover:underline cursor-pointer">
                        Try again
                    </button>
                </div>
            ) : trends.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-12 bg-card text-foreground rounded-2xl border border-border/80 shadow-xs text-center select-none min-h-75 h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 animate-pulse">
                        <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-muted-foreground text-sm font-semibold">
                        No trends discovered yet
                    </p>
                    <p className="text-xs text-muted-foreground/80 mt-1.5 max-w-xs leading-normal">
                        Your database has no seed trends. Run the data seeder command in the backend console to populate live trends.
                    </p>
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
                                                <button 
                                                    onClick={() => navigate("/hooks", { state: { topic: trend.title } })}
                                                    className="px-3 py-1.5 text-xs font-bold bg-primary text-primary-foreground hover:opacity-90 rounded-xl flex items-center gap-1 shadow-xs transition-all cursor-pointer"
                                                >
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

