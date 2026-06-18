import { useState } from "react"
import { X, Sparkles, AlertCircle } from "lucide-react"

const TrendModal = ({ isOpen, onClose, onSave, trend }) => {
    const [title, setTitle] = useState("")
    const [platform, setPlatform] = useState("YouTube")
    const [category, setCategory] = useState("Technology & AI")
    const [score, setScore] = useState(80)
    const [freshness, setFreshness] = useState("Breakout")
    const [errors, setErrors] = useState({})

    const [prevTrend, setPrevTrend] = useState(null)
    const [prevIsOpen, setPrevIsOpen] = useState(false)

    if (trend !== prevTrend || isOpen !== prevIsOpen) {
        setPrevTrend(trend)
        setPrevIsOpen(isOpen)
        setTitle(trend ? trend.title || "" : "")
        setPlatform(trend ? trend.platform || "YouTube" : "YouTube")
        setCategory(trend ? trend.category || "Technology & AI" : "Technology & AI")
        setScore(trend ? trend.score || 80 : 80)
        setFreshness(trend ? trend.freshness || "Breakout" : "Breakout")
        setErrors({})
    }

    if (!isOpen) return null

    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = {}
        if (!title.trim()) {
            newErrors.title = "Title is required"
        } else if (title.trim().length < 3) {
            newErrors.title = "Title must be at least 3 characters"
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        onSave({
            title: title.trim(),
            platform,
            category,
            score: parseInt(score, 10),
            freshness,
        })
    }

    return (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-card border border-border/80 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
                
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border/50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                            <Sparkles className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-foreground">
                                {trend ? "Edit Trend" : "Add Live Trend"}
                            </h2>
                            <p className="text-xs text-muted-foreground">
                                Populate the trend feed database manually
                            </p>
                        </div>
                    </div>
                    <button 
                        type="button"
                        onClick={onClose}
                        className="p-1.5 rounded-lg border border-border hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                            Trend Topic / Title
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Google Gemini AI Extensions for Productivity"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-3 text-sm rounded-xl border border-border bg-card text-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                        />
                        {errors.title && (
                            <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                                <AlertCircle className="w-3.5 h-3.5" />
                                {errors.title}
                            </p>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                                Platform
                            </label>
                            <select
                                value={platform}
                                onChange={(e) => setPlatform(e.target.value)}
                                className="w-full p-3 text-sm rounded-xl border border-border bg-card text-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all cursor-pointer"
                            >
                                <option value="YouTube">YouTube</option>
                                <option value="Instagram Reels">Instagram Reels</option>
                                <option value="General">General/Web</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                                Category
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Technology & AI"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full p-3 text-sm rounded-xl border border-border bg-card text-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                                Viral Score (0-100)
                            </label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={score}
                                    onChange={(e) => setScore(e.target.value)}
                                    className="flex-1 accent-primary cursor-pointer h-1.5 rounded-lg bg-muted appearance-none"
                                />
                                <span className="text-sm font-bold text-foreground w-8 text-right">{score}</span>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                                Freshness / Growth
                            </label>
                            <select
                                value={freshness}
                                onChange={(e) => setFreshness(e.target.value)}
                                className="w-full p-3 text-sm rounded-xl border border-border bg-card text-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all cursor-pointer"
                            >
                                <option value="Breakout">Breakout</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-border/50 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2.5 rounded-xl border border-border hover:bg-muted text-foreground text-xs font-bold transition-all cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-5 py-2.5 rounded-xl bg-linear-to-r from-primary to-purple-600 hover:from-primary/95 hover:to-purple-700 text-white text-xs font-bold transition-all shadow-md active:scale-[0.99] cursor-pointer"
                        >
                            {trend ? "Save Changes" : "Create Trend"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TrendModal
