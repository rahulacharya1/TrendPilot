import DashboardLayout from "@/layouts/DashboardLayout"

import Header from "@/components/common/Header"

import CompetitorForm from "@/components/competitors/CompetitorForm"
import GapAnalysis from "@/components/competitors/GapAnalysis"

const Competitors = () => {

    return (

        <DashboardLayout>

            <Header
                title="Competitor Analysis"
                subtitle="Analyze creators and find gaps"
            />

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                <CompetitorForm />

                <GapAnalysis />

            </div>

        </DashboardLayout>
    )
}

export default Competitors
