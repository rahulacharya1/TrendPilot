import { FileText } from "lucide-react"

const GapAnalysis = ({ analysis, loading }) => {
    if (loading) {
        return (
            <div className="bg-card p-6 rounded-2xl border border-border/80 shadow-xs space-y-6 animate-pulse select-none">
                <div className="h-6 bg-muted rounded w-1/3" />
                <div className="space-y-3">
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="h-4 bg-muted rounded w-3/4" />
                </div>
                <div className="space-y-3 pt-4 border-t border-border/60">
                    <div className="h-6 bg-muted rounded w-1/4" />
                    <div className="h-10 bg-muted rounded w-full" />
                </div>
            </div>
        )
    }

    if (!analysis) {
        return (
            <div className="flex flex-col items-center justify-center p-12 bg-card text-foreground rounded-2xl border border-border/80 shadow-xs text-center select-none min-h-[300px] h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm font-semibold">
                    No competitor analysis loaded
                </p>
                <p className="text-xs text-muted-foreground/80 mt-1.5 max-w-xs leading-normal">
                    Enter a creator's name on the left to inspect their content style, check audience gaps, and view untapped opportunities.
                </p>
            </div>
        )
    }

    return (
        <div className="bg-card p-6 rounded-2xl border border-border/80 shadow-xs space-y-6 select-none animate-in fade-in duration-300">
            <div>
                <h3 className="text-lg font-bold text-foreground">
                    Analysis for {analysis.creator_name}
                </h3>
                <p className="text-xs text-muted-foreground">
                    Generated via Gemini AI in real-time
                </p>
            </div>

            {/* Content Style & Strategy */}
            <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Content Angle & Style
                </label>
                <div className="p-4 rounded-xl bg-muted/40 border border-border/40 text-sm leading-relaxed text-foreground font-medium">
                    {analysis.content_angle}
                </div>
            </div>

            {/* Gaps Found */}
            <div className="space-y-2 pt-2 border-t border-border/60">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Identified Content Gaps
                </label>
                <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10 text-sm leading-relaxed text-purple-700 dark:text-purple-300 font-semibold">
                    {analysis.gap_found}
                </div>
            </div>

            {/* Opportunities */}
            <div className="space-y-2 pt-2 border-t border-border/60">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Untapped Angles & Competitor Trends
                </label>
                <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-sm leading-relaxed text-emerald-700 dark:text-emerald-300 font-semibold">
                    {analysis.competitor_trends}
                </div>
            </div>
        </div>
    )
}

export default GapAnalysis
