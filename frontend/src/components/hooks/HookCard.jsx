import { useState } from "react"
import { Copy, Check } from "lucide-react"

const HookCard = ({
    hook,
    type,
}) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(hook)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    // Custom coloring for badges based on type
    let badgeColors = "bg-primary/10 text-primary"
    if (type.includes("Curiosity")) badgeColors = "bg-blue-500/10 text-blue-600 dark:text-blue-400"
    if (type.includes("Authority")) badgeColors = "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
    if (type.includes("Storytelling")) badgeColors = "bg-purple-500/10 text-purple-600 dark:text-purple-400"

    return (
        <div className="bg-card p-5 rounded-2xl border border-border/80 hover:border-border shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between select-none">
            <div>
                <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${badgeColors}`}>
                        {type}
                    </span>

                    <button 
                        onClick={handleCopy}
                        className="p-1.5 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted transition duration-200 cursor-pointer"
                        title="Copy hook to clipboard"
                    >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                </div>

                <p className="text-sm font-medium text-foreground leading-relaxed">
                    "{hook}"
                </p>
            </div>
        </div>
    )
}

export default HookCard

