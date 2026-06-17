import { useState } from "react"
import DashboardLayout from "@/layouts/DashboardLayout"
import Header from "@/components/common/Header"
import CompetitorForm from "@/components/competitors/CompetitorForm"
import GapAnalysis from "@/components/competitors/GapAnalysis"
import { analyzeCompetitor as apiAnalyzeCompetitor } from "@/services/competitorService"
import { toast } from "sonner"

const Competitors = () => {
    const [analysis, setAnalysis] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleAnalyze = async (creator) => {
        setLoading(true)
        setError(null)
        try {
            const data = await apiAnalyzeCompetitor(creator)
            if (data.success && data.analysis) {
                setAnalysis(data.analysis)
                toast.success("Competitor analysis completed successfully!")
            } else {
                setError(data.error || "Analysis failed.")
                toast.error(data.error || "Analysis failed.")
            }
        } catch (err) {
            console.error("Competitor analysis error:", err)
            const errMsg = err.response?.data?.error || "Failed to analyze competitor. Please try again."
            setError(errMsg)
            toast.error(errMsg)
        } finally {
            setLoading(false)
        }
    }

    return (
        <DashboardLayout>
            <Header
                title="Competitor Analysis"
                subtitle="Analyze creators and find gaps"
            />

            {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm font-medium">
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <CompetitorForm onAnalyze={handleAnalyze} loading={loading} />
                <GapAnalysis analysis={analysis} loading={loading} />
            </div>
        </DashboardLayout>
    )
}

export default Competitors
