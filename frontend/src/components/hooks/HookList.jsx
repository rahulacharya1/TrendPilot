import HookCard from "./HookCard"

const HookList = ({ hooks = [], loading }) => {
    if (loading && hooks.length === 0) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 4, 5].map((n) => (
                    <div key={n} className="bg-card p-5 rounded-2xl border border-border/80 h-32 animate-pulse flex flex-col justify-between">
                        <div className="h-4 bg-muted w-16 rounded" />
                        <div className="h-4 bg-muted w-full rounded mt-3" />
                        <div className="h-4 bg-muted w-3/4 rounded mt-2" />
                    </div>
                ))}
            </div>
        )
    }

    if (hooks.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-12 bg-card text-foreground rounded-2xl border border-border/80 shadow-xs text-center select-none min-h-75 h-full">
                <p className="text-muted-foreground text-sm font-medium">
                    No hooks generated yet.
                </p>
                <p className="text-xs text-muted-foreground/80 mt-1.5 max-w-xs">
                    Type a topic on the left to generate premium viral hooks using Gemini AI.
                </p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-max">
            {hooks.map((item) => (
                <HookCard
                    key={item.id}
                    type={item.hook_type}
                    hook={item.content}
                />
            ))}
        </div>
    )
}

export default HookList
