import { useEffect } from "react"
import DashboardLayout from "@/layouts/DashboardLayout"
import Header from "@/components/common/Header"
import HookForm from "@/components/hooks/HookForm"
import HookList from "@/components/hooks/HookList"
import useHooks from "@/hooks/useHooks"

const Hooks = () => {
    const { hooks, loading, fetchHooks, generateHooks } = useHooks()

    useEffect(() => {
        fetchHooks()
    }, [])

    return (
        <DashboardLayout>
            <Header
                title="Hook Generator"
                subtitle="Generate viral hooks with AI"
            />

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <HookForm onGenerate={generateHooks} loading={loading} />
                <HookList hooks={hooks} loading={loading} />
            </div>
        </DashboardLayout>
    )
}

export default Hooks
