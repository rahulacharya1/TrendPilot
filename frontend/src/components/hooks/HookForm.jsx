import { useState } from "react"
import { Sparkles, HelpCircle } from "lucide-react"

const HookForm = ({ onGenerate, loading }) => {
    const [topic, setTopic] = useState("")

    const handleGenerate = async () => {
        if (!topic.trim() || loading) return
        try {
            await onGenerate(topic)
            setTopic("")
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="bg-card p-6 rounded-2xl border border-border/80 shadow-xs select-none">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                </div>
                <div>
                    <h2 className="text-lg font-bold text-foreground">
                        Generate Viral Hooks
                    </h2>
                    <p className="text-xs text-muted-foreground">
                        Input a topic and let Gemini create high-converting hooks.
                    </p>
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Content Topic / Niche
                    </label>
                    <textarea
                        rows="4"
                        placeholder="e.g., How to build a SaaS in 30 days as a solo developer..."
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        disabled={loading}
                        className="w-full p-4 text-sm rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground outline-none resize-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all leading-relaxed disabled:opacity-75"
                    />
                </div>

                {/* Quick Hint / Tip */}
                <div className="p-3.5 rounded-xl bg-muted/40 border border-border/40 flex gap-2.5 items-start">
                    <HelpCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground leading-normal">
                        **Tip:** Be specific. Describe your target audience and the core value proposition of your content for the best hooks.
                    </p>
                </div>

                <button
                    onClick={handleGenerate}
                    disabled={loading || !topic.trim()}
                    className="w-full py-3.5 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-muted disabled:to-muted disabled:text-muted-foreground text-white font-semibold text-sm transition-all shadow-md shadow-purple-500/10 active:scale-[0.99] cursor-pointer disabled:cursor-not-allowed"
                >
                    {loading ? "Generating Hooks..." : "Generate Hooks"}
                </button>
            </div>
        </div>
    )
}

export default HookForm

