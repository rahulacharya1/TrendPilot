import DashboardLayout from "@/layouts/DashboardLayout"

import Header from "@/components/common/Header"

import StatsCard from "@/components/dashboard/StatsCard"
import DashboardGrid from "@/components/dashboard/DashboardGrid"
import AnalyticsChart from "@/components/dashboard/AnalyticsChart"
import RecentHooks from "@/components/dashboard/RecentHooks"
import TopTopics from "@/components/dashboard/TopTopics"

import {
    TrendingUp,
    Sparkles,
    FileText,
    Users,
} from "lucide-react"

const Dashboard = () => {

    return (

        <DashboardLayout>

            <Header
                title="Dashboard"
                subtitle="Welcome back Rahul 👋"
            />

            <DashboardGrid>

                <StatsCard
                    title="Total Trends"
                    value="120"
                    growth="+12%"
                    icon={<TrendingUp />}
                />

                <StatsCard
                    title="Generated Hooks"
                    value="340"
                    growth="+22%"
                    icon={<Sparkles />}
                />

                <StatsCard
                    title="AI Scripts"
                    value="85"
                    growth="+8%"
                    icon={<FileText />}
                />

                <StatsCard
                    title="Competitors"
                    value="27"
                    growth="+5%"
                    icon={<Users />}
                />

            </DashboardGrid>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                <div className="xl:col-span-2">

                    <AnalyticsChart />

                </div>

                <TopTopics />

            </div>

            <RecentHooks />

        </DashboardLayout>
    )
}

export default Dashboard
