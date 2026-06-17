const StatsCard = ({
    title,
    value,
    growth,
    icon,
    loading,
}) => {
    // Custom colors based on metric category
    let iconColors = "bg-primary/10 text-primary"
    if (title.includes("Trends")) iconColors = "bg-emerald-500/10 text-emerald-500"
    if (title.includes("Hooks")) iconColors = "bg-purple-500/10 text-purple-500"
    if (title.includes("Scripts")) iconColors = "bg-indigo-500/10 text-indigo-500"
    if (title.includes("Competitors")) iconColors = "bg-blue-500/10 text-blue-500"

    const isPositive = growth?.startsWith("+")

    return (
        <div className="bg-card p-6 rounded-2xl border border-border/80 shadow-xs hover:shadow-md hover:border-border transition-all duration-200 select-none">
            <div className="flex items-center justify-between">
                <div className="space-y-2 w-full pr-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {title}
                    </p>
                    {loading ? (
                        <div className="space-y-2 animate-pulse pt-1">
                            <div className="h-8 bg-muted rounded w-20" />
                            <div className="flex items-center gap-1.5 pt-1">
                                <div className="h-4 bg-muted rounded w-8" />
                                <div className="h-4 bg-muted rounded w-16" />
                            </div>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-3xl font-bold text-foreground">
                                {value}
                            </h2>
                            <div className="flex items-center gap-1.5 pt-1.5">
                                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                                    isPositive 
                                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" 
                                        : "bg-destructive/10 text-destructive"
                                }`}>
                                    {growth}
                                </span>
                                <span className="text-[10px] text-muted-foreground font-medium">
                                    vs last month
                                </span>
                            </div>
                        </>
                    )}
                </div>

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${iconColors}`}>
                    {icon}
                </div>
            </div>
        </div>
    )
}

export default StatsCard

