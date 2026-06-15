import DashboardLayout from "@/layouts/DashboardLayout"

import Header from "@/components/common/Header"

import ScriptForm from "@/components/scripts/ScriptForm"
import ScriptHistory from "@/components/scripts/ScriptHistory"

const Scripts = () => {

    return (

        <DashboardLayout>

            <Header
                title="Script Generator"
                subtitle="Create AI powered scripts"
            />

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                <ScriptForm />

                <ScriptHistory />

            </div>

        </DashboardLayout>
    )
}

export default Scripts
