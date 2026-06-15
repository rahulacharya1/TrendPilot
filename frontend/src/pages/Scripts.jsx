import { useEffect, useState } from "react"
import DashboardLayout from "@/layouts/DashboardLayout"
import Header from "@/components/common/Header"
import ScriptForm from "@/components/scripts/ScriptForm"
import ScriptHistory from "@/components/scripts/ScriptHistory"
import useScripts from "@/hooks/useScripts"
import { Copy, Check, FileText } from "lucide-react"

const ScriptDetailsCard = ({ script }) => {
    const [copiedSec, setCopiedSec] = useState(null)

    const handleCopy = (text, key) => {
        navigator.clipboard.writeText(text)
        setCopiedSec(key)
        setTimeout(() => setCopiedSec(null), 2000)
    }

    return (
        <div className="bg-card text-foreground p-6 rounded-2xl border border-border/80 shadow-xs space-y-6 select-none animate-in fade-in duration-300">
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <div>
                    <h2 className="text-lg font-bold text-foreground">
                        {script.trend_title || "AI Generated Script"}
                    </h2>
                    <p className="text-xs text-muted-foreground">
                        Generated on {new Date(script.created_at).toLocaleDateString()}
                    </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                </div>
            </div>

            {/* Script Text Box */}
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Video Script & Visual Cues
                    </label>
                    <button
                        onClick={() => handleCopy(script.script, "script")}
                        className="text-xs flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition cursor-pointer"
                    >
                        {copiedSec === "script" ? (
                            <>
                                <Check className="w-3.5 h-3.5 text-emerald-500" />
                                <span>Copied!</span>
                            </>
                        ) : (
                            <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy Script</span>
                            </>
                        )}
                    </button>
                </div>
                <div className="p-4 rounded-xl bg-muted/30 border border-border/40 text-sm leading-relaxed whitespace-pre-wrap max-h-62.5 overflow-y-auto font-medium text-foreground">
                    {script.script}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Caption Section */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Caption
                        </label>
                        <button
                            onClick={() => handleCopy(script.caption, "caption")}
                            className="text-xs flex items-center gap-1 p-1 rounded-md text-muted-foreground hover:text-foreground transition cursor-pointer"
                        >
                            {copiedSec === "caption" ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                    </div>
                    <div className="p-3.5 rounded-xl bg-muted/40 border border-border/40 text-xs text-foreground leading-normal min-h-15">
                        {script.caption}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            Call to Action (CTA)
                        </label>
                        <button
                            onClick={() => handleCopy(script.cta, "cta")}
                            className="text-xs flex items-center gap-1 p-1 rounded-md text-muted-foreground hover:text-foreground transition cursor-pointer"
                        >
                            {copiedSec === "cta" ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                    </div>
                    <div className="p-3.5 rounded-xl bg-muted/40 border border-border/40 text-xs text-foreground leading-normal min-h-15">
                        {script.cta}
                    </div>
                </div>
            </div>

            {/* Hashtags Section */}
            <div className="space-y-2 pt-2 border-t border-border/60">
                <div className="flex justify-between items-center">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Viral Hashtags
                    </label>
                    <button
                        onClick={() => handleCopy(script.hashtags, "hashtags")}
                        className="text-xs flex items-center gap-1.5 px-2 py-0.5 rounded border border-border bg-card text-muted-foreground hover:text-foreground transition cursor-pointer"
                    >
                        {copiedSec === "hashtags" ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                    </button>
                </div>
                <div className="text-sm font-bold text-primary flex gap-2 flex-wrap">
                    {script.hashtags ? (
                        script.hashtags.split(" ").map((tag) => (
                            <span key={tag} className="px-2 py-0.5 rounded-md bg-primary/10">
                                {tag}
                            </span>
                        ))
                    ) : (
                        <span className="text-xs text-muted-foreground font-normal">No hashtags.</span>
                    )}
                </div>
            </div>
        </div>
    )
}

const Scripts = () => {
    const { scripts, loading, fetchScripts, generateScript } = useScripts()
    const [selectedScript, setSelectedScript] = useState(null)

    useEffect(() => {
        fetchScripts()
    }, [])

    const handleGenerate = async (topic) => {
        try {
            const newScript = await generateScript(topic)
            if (newScript) {
                setSelectedScript(newScript)
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <DashboardLayout>
            <Header
                title="Script Generator"
                subtitle="Create AI powered scripts"
            />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-1 space-y-6">
                    <ScriptForm onGenerate={handleGenerate} loading={loading} />
                    <ScriptHistory 
                        scripts={scripts} 
                        loading={loading} 
                        onSelect={setSelectedScript} 
                        selectedId={selectedScript?.id} 
                    />
                </div>

                <div className="xl:col-span-2">
                    {selectedScript ? (
                        <ScriptDetailsCard script={selectedScript} />
                    ) : (
                        <div className="bg-card text-foreground p-8 rounded-2xl border border-border/80 shadow-xs min-h-75 h-full flex flex-col items-center justify-center text-center select-none">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                                <FileText className="w-6 h-6 text-primary" />
                            </div>
                            <p className="text-muted-foreground text-sm font-semibold">
                                No script selected
                            </p>
                            <p className="text-xs text-muted-foreground/80 mt-1 max-w-xs">
                                Select a script from history or generate a new one to view script content, caption, and hashtags.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Scripts
