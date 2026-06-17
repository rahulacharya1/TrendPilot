import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import DashboardLayout from "@/layouts/DashboardLayout"
import Header from "@/components/common/Header"
import HookForm from "@/components/hooks/HookForm"
import HookList from "@/components/hooks/HookList"
import useHooks from "@/hooks/useHooks"

const Hooks = () => {
    const { hooks, loading, error, fetchHooks, generateHooks } = useHooks()
    const location = useLocation()
    const initialTopic = location.state?.topic || ""

    useEffect(() => {
        fetchHooks()
    }, [])

    return (
        <DashboardLayout>
            <Header
                title="Hook Generator"
                subtitle="Generate viral hooks with AI"
            />

            {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm font-medium">
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <HookForm onGenerate={generateHooks} loading={loading} initialTopic={initialTopic} />
                <HookList hooks={hooks} loading={loading} />
            </div>
        </DashboardLayout>
    )
}

export default Hooks
