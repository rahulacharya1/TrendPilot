import DashboardLayout from "@/layouts/DashboardLayout"

import Header from "@/components/common/Header"

import HookForm from "@/components/hooks/HookForm"
import HookList from "@/components/hooks/HookList"

const Hooks = () => {

    return (

        <DashboardLayout>

            <Header
                title="Hook Generator"
                subtitle="Generate viral hooks with AI"
            />

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                <HookForm />

                <HookList />

            </div>

        </DashboardLayout>
    )
}

export default Hooks
