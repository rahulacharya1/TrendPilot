import { useState } from "react"
import { Users } from "lucide-react"

const CompetitorForm = ({ onAnalyze, loading }) => {
    const [creator, setCreator] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!creator.trim() || loading) return
        onAnalyze(creator.trim())
    }

    return (
        <form onSubmit={handleSubmit} className="bg-card p-6 rounded-2xl border border-border/80 shadow-xs select-none">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Users className="w-5 h-5" />
                </div>
                <div>
                    <h2 className="text-lg font-bold text-foreground">
                        Analyze Competitor
                    </h2>
                    <p className="text-xs text-muted-foreground">
                        Examine creator channels to discover content gaps & untapped angles.
                    </p>
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Creator Name / Channel ID
                    </label>
                    <input
                        type="text"
                        placeholder="e.g. MrBeast or TechWithTim..."
                        value={creator}
                        onChange={(e) => setCreator(e.target.value)}
                        disabled={loading}
                        className="w-full p-4 text-sm rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all disabled:opacity-75"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading || !creator.trim()}
                    className="w-full py-3.5 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-muted disabled:to-muted disabled:text-muted-foreground text-white font-semibold text-sm transition-all shadow-md shadow-purple-500/10 active:scale-[0.99] cursor-pointer disabled:cursor-not-allowed"
                >
                    {loading ? "Analyzing Channel..." : "Analyze Creator"}
                </button>
            </div>
        </form>
    )
}

export default CompetitorForm
