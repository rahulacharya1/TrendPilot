const ScriptHistory = ({ scripts = [], loading, onSelect, selectedId }) => {
    if (loading && scripts.length === 0) {
        return (
            <div className="bg-card text-foreground p-6 rounded-2xl border border-border/80 shadow-xs select-none">
                <h2 className="text-xl font-bold mb-5 tracking-tight">Recent Scripts</h2>
                <div className="space-y-3">
                    <div className="h-12 bg-muted animate-pulse rounded-xl" />
                    <div className="h-12 bg-muted animate-pulse rounded-xl" />
                    <div className="h-12 bg-muted animate-pulse rounded-xl" />
                </div>
            </div>
        )
    }

    if (scripts.length === 0) {
        return (
            <div className="bg-card text-foreground p-6 rounded-2xl border border-border/80 shadow-xs select-none min-h-50 flex flex-col items-center justify-center text-center">
                <p className="text-sm font-semibold text-muted-foreground">No scripts generated yet</p>
                <p className="text-xs text-muted-foreground/80 mt-1 max-w-50">
                    Create a script description on the left to generate short-form videos scripts.
                </p>
            </div>
        )
    }

    return (
        <div className="bg-card text-foreground p-6 rounded-2xl border border-border/80 shadow-xs select-none">
            <h2 className="text-xl font-bold mb-5 tracking-tight animate-in fade-in duration-300">Recent Scripts</h2>
            <div className="space-y-2.5">
                {scripts.map((item) => {
                    const isSelected = item.id === selectedId
                    return (
                        <div
                            key={item.id}
                            onClick={() => onSelect(item)}
                            className={`p-4 rounded-xl transition-all duration-200 cursor-pointer border ${
                                isSelected
                                    ? "bg-primary/10 border-primary/60 text-primary font-bold shadow-xs scale-[1.01]"
                                    : "bg-muted/40 border-border/40 hover:bg-muted/70 text-foreground font-medium"
                            }`}
                        >
                            <div className="flex justify-between items-center">
                                <span className="text-sm truncate pr-2 max-w-50">
                                    {item.trend_title || "AI Generated Script"}
                                </span>
                                <span className="text-[10px] text-muted-foreground shrink-0 font-normal">
                                    {new Date(item.created_at).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ScriptHistory
