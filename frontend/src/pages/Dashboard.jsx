import { useEffect, useState } from "react"
import DashboardLayout from "@/layouts/DashboardLayout"
import Header from "@/components/common/Header"
import StatsCard from "@/components/dashboard/StatsCard"
import DashboardGrid from "@/components/dashboard/DashboardGrid"
import AnalyticsChart from "@/components/dashboard/AnalyticsChart"
import RecentHooks from "@/components/dashboard/RecentHooks"
import TopTopics from "@/components/dashboard/TopTopics"
import { getDashboardStats } from "@/services/analyticsService"
import useAuthStore from "@/store/authStore"

import {
    TrendingUp,
    Sparkles,
    FileText,
    Users,
} from "lucide-react"

const Dashboard = () => {
    const [stats, setStats] = useState(null)
    const [loading, setLoading] = useState(true)
    const { user } = useAuthStore()

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const data = await getDashboardStats()
                setStats(data)
            } catch (err) {
                console.error("Failed to fetch dashboard stats", err)
            } finally {
                setLoading(false)
            }
        }
        fetchStats()
    }, [])

    return (

        <DashboardLayout>

            <Header
                title="Dashboard"
                subtitle={`Welcome back ${user?.username || "Creator"} 👋`}
            />

            <DashboardGrid>

                <StatsCard
                    title="Total Trends"
                    value={stats?.trends?.count ?? "0"}
                    growth={stats?.trends?.growth ?? "+0%"}
                    icon={<TrendingUp />}
                    loading={loading}
                />

                <StatsCard
                    title="Generated Hooks"
                    value={stats?.hooks?.count ?? "0"}
                    growth={stats?.hooks?.growth ?? "+0%"}
                    icon={<Sparkles />}
                    loading={loading}
                />

                <StatsCard
                    title="AI Scripts"
                    value={stats?.scripts?.count ?? "0"}
                    growth={stats?.scripts?.growth ?? "+0%"}
                    icon={<FileText />}
                    loading={loading}
                />

                <StatsCard
                    title="Competitors"
                    value={stats?.competitors?.count ?? "0"}
                    growth={stats?.competitors?.growth ?? "+0%"}
                    icon={<Users />}
                    loading={loading}
                />

            </DashboardGrid>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                <div className="xl:col-span-2">

                    <AnalyticsChart data={stats?.chart_data} />

                </div>

                <TopTopics />

            </div>

            <RecentHooks />

        </DashboardLayout>
    )
}

export default Dashboard
