import DashboardLayout from "@/layouts/DashboardLayout"

import Header from "@/components/common/Header"

import AnalyticsChart from "@/components/dashboard/AnalyticsChart"

const Analytics = () => {

    return (

        <DashboardLayout>

            <Header
                title="Analytics"
                subtitle="Track performance and growth"
            />

            <AnalyticsChart />

        </DashboardLayout>
    )
}

export default Analytics
