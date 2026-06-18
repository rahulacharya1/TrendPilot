import { useState, useEffect } from "react"
import DashboardLayout from "@/layouts/DashboardLayout"
import Header from "@/components/common/Header"
import TrendModal from "@/components/admin/TrendModal"
import useAuthStore from "@/store/authStore"
import {
    getAdminStats,
    getAdminUsers,
    deleteUser,
    toggleUserStaff,
    createTrend,
    updateTrend,
    deleteTrend
} from "@/services/adminService"
import { getTrends } from "@/services/trendService"
import {
    Users,
    TrendingUp,
    Trash2,
    Edit3,
    Plus,
    Search,
    RefreshCw,
    AlertCircle,
    UserCheck,
    UserX
} from "lucide-react"
import { toast } from "sonner"

const AdminDashboard = () => {
    const currentUser = useAuthStore((state) => state.user)
    const [activeTab, setActiveTab] = useState("overview")
    
    // Data States
    const [stats, setStats] = useState(null)
    const [usersList, setUsersList] = useState([])
    const [trendsList, setTrendsList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Modal & Search States
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedTrend, setSelectedTrend] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")

    const loadData = async () => {
        setLoading(true)
        setError(null)
        try {
            const [statsData, usersData, trendsData] = await Promise.all([
                getAdminStats(),
                getAdminUsers(),
                getTrends()
            ])
            setStats(statsData)
            setUsersList(usersData)
            setTrendsList(trendsData)
        } catch (err) {
            console.error("Failed to load admin dashboard data:", err)
            setError("Failed to fetch administrative data. Please verify your permissions.")
            toast.error("Error loading administration data.")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const init = async () => {
            await Promise.resolve()
            loadData()
        }
        init()
    }, [])

    const handleSaveTrend = async (trendData) => {
        try {
            if (selectedTrend) {
                // Edit mode
                await updateTrend(selectedTrend.id, trendData)
                toast.success("Trend updated successfully!")
            } else {
                // Add mode
                await createTrend(trendData)
                toast.success("Trend created successfully!")
            }
            setModalOpen(false)
            setSelectedTrend(null)
            loadData() // Refresh database stats and listing
        } catch (err) {
            console.error("Failed to save trend:", err)
            toast.error(err.response?.data?.error || "Failed to save trend. Please try again.")
        }
    }

    const handleDeleteTrend = async (trendId) => {
        if (!confirm("Are you sure you want to delete this trend? This action cannot be undone.")) return
        try {
            await deleteTrend(trendId)
            toast.success("Trend deleted successfully!")
            loadData()
        } catch (err) {
            console.error("Failed to delete trend:", err)
            toast.error("Failed to delete trend. Please try again.")
        }
    }

    const handleToggleStaff = async (userId) => {
        try {
            const res = await toggleUserStaff(userId)
            if (res.success) {
                toast.success(`User staff privilege updated to: ${res.isStaff ? "Staff" : "Standard"}`)
                loadData()
            }
        } catch (err) {
            console.error("Failed to toggle staff status:", err)
            toast.error(err.response?.data?.error || "Failed to change user role permissions.")
        }
    }

    const handleDeleteUser = async (userId) => {
        if (!confirm("Are you sure you want to delete this user? This will remove all their content and is irreversible.")) return
        try {
            const res = await deleteUser(userId)
            if (res.success) {
                toast.success("User deleted successfully.")
                loadData()
            }
        } catch (err) {
            console.error("Failed to delete user:", err)
            toast.error(err.response?.data?.error || "Failed to delete user account.")
        }
    }

    const openCreateModal = () => {
        setSelectedTrend(null)
        setModalOpen(true)
    }

    const openEditModal = (trend) => {
        setSelectedTrend(trend)
        setModalOpen(true)
    }

    // Filter Logic
    const filteredUsers = usersList.filter(u => 
        u.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (u.email && u.email.toLowerCase().includes(searchQuery.toLowerCase()))
    )

    const filteredTrends = trendsList.filter(t => 
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.platform.toLowerCase().includes(searchQuery.toLowerCase())
    )



    return (
        <DashboardLayout>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none mb-6">
                <Header
                    title="Control Panel"
                    subtitle="Platform metrics, trend seeding, and account controls"
                />
                <button
                    onClick={loadData}
                    disabled={loading}
                    className="self-start sm:self-center p-2.5 rounded-xl border border-border bg-card text-foreground hover:bg-muted transition duration-200 cursor-pointer flex items-center gap-2 text-xs font-semibold"
                >
                    <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
                    Refresh Stats
                </button>
            </div>

            {/* ERROR BOUNDARY */}
            {error && (
                <div className="p-5 border border-red-500/20 bg-red-500/5 rounded-2xl mb-8 flex items-start gap-3 select-none">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-bold text-sm text-red-600 dark:text-red-400">Permissions Error</h4>
                        <p className="text-xs text-muted-foreground mt-1">{error}</p>
                    </div>
                </div>
            )}

            {/* TAB SELECTOR */}
            <div className="flex border-b border-border/50 mb-8 gap-6 select-none">
                <button
                    onClick={() => { setActiveTab("overview"); setSearchQuery(""); }}
                    className={`pb-4 text-sm font-bold transition-all border-b-2 cursor-pointer ${
                        activeTab === "overview" 
                            ? "border-primary text-primary" 
                            : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                >
                    Overview
                </button>
                <button
                    onClick={() => { setActiveTab("users"); setSearchQuery(""); }}
                    className={`pb-4 text-sm font-bold transition-all border-b-2 cursor-pointer ${
                        activeTab === "users" 
                            ? "border-primary text-primary" 
                            : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                >
                    User Management
                </button>
                <button
                    onClick={() => { setActiveTab("trends"); setSearchQuery(""); }}
                    className={`pb-4 text-sm font-bold transition-all border-b-2 cursor-pointer ${
                        activeTab === "trends" 
                            ? "border-primary text-primary" 
                            : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                >
                    Trend Feed
                </button>
            </div>

            {loading ? (
                // LOADING STATES
                <div className="space-y-6 animate-pulse select-none">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="bg-card h-28 border border-border/80 rounded-2xl" />
                        ))}
                    </div>
                    <div className="bg-card h-72 border border-border/80 rounded-2xl" />
                </div>
            ) : (
                <>
                    {/* TAB 1: OVERVIEW */}
                    {activeTab === "overview" && stats && (
                        <div className="space-y-8 animate-in fade-in duration-200">
                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 select-none">
                                <div className="bg-card p-6 border border-border/80 rounded-2xl shadow-xs">
                                    <div className="flex justify-between items-start mb-4">
                                        <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Total Users</p>
                                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                                            <Users className="w-4.5 h-4.5" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-extrabold text-foreground">{stats.users?.count}</h3>
                                    <p className="text-[10px] text-emerald-500 font-bold mt-1.5">{stats.users?.growth} registrations</p>
                                </div>

                                <div className="bg-card p-6 border border-border/80 rounded-2xl shadow-xs">
                                    <div className="flex justify-between items-start mb-4">
                                        <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Seeded Trends</p>
                                        <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center">
                                            <TrendingUp className="w-4.5 h-4.5" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-extrabold text-foreground">{stats.trends?.count}</h3>
                                    <p className="text-[10px] text-emerald-500 font-bold mt-1.5">{stats.trends?.growth} growth score</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB 2: USER MANAGEMENT */}
                    {activeTab === "users" && (
                        <div className="space-y-6 animate-in fade-in duration-200">
                            {/* Search bar */}
                            <div className="flex max-w-md items-center gap-3 px-4 py-2.5 border border-border bg-card rounded-2xl select-none">
                                <Search className="w-4 h-4 text-muted-foreground shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Search users by name or email..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full text-xs text-foreground bg-transparent outline-none placeholder:text-muted-foreground"
                                />
                            </div>

                            {/* Table */}
                            <div className="bg-card border border-border/80 rounded-2xl overflow-hidden shadow-xs select-none">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-border/50 bg-muted/20 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                                <th className="px-6 py-4">User</th>
                                                <th className="px-6 py-4">Niche / Platform</th>
                                                <th className="px-6 py-4">Audience</th>
                                                <th className="px-6 py-4">Admin Staff</th>
                                                <th className="px-6 py-4 text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border/40 text-sm text-foreground">
                                            {filteredUsers.length === 0 ? (
                                                <tr>
                                                    <td colSpan="5" className="px-6 py-10 text-center text-xs text-muted-foreground font-medium">
                                                        No user accounts found matching your search.
                                                    </td>
                                                </tr>
                                            ) : (
                                                filteredUsers.map((user) => {
                                                    const isSelf = user.id === currentUser.id
                                                    const isSuper = user.isSuperuser

                                                    return (
                                                        <tr key={user.id} className="hover:bg-muted/10 transition-colors">
                                                            <td className="px-6 py-4 flex items-center gap-3">
                                                                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                                                                    {user.fullName.substring(0, 2).toUpperCase() || "US"}
                                                                </div>
                                                                <div>
                                                                    <p className="font-semibold text-foreground text-xs">{user.fullName}</p>
                                                                    <p className="text-[10px] text-muted-foreground mt-0.5">{user.email}</p>
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <p className="text-xs font-semibold text-foreground">{user.niche || "Not specified"}</p>
                                                                <p className="text-[10px] text-muted-foreground mt-0.5">{user.platform || "Not specified"}</p>
                                                            </td>
                                                            <td className="px-6 py-4 text-xs text-muted-foreground font-medium">
                                                                {user.audienceType || "General"}
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                {isSuper ? (
                                                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-500">
                                                                        Superuser
                                                                    </span>
                                                                ) : user.isStaff ? (
                                                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-500">
                                                                        Staff
                                                                    </span>
                                                                ) : (
                                                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-500/10 text-slate-500 dark:text-slate-400">
                                                                        Standard
                                                                    </span>
                                                                )}
                                                            </td>
                                                            <td className="px-6 py-4 text-right">
                                                                <div className="flex justify-end gap-2.5">
                                                                    {/* Toggle Staff (Only enabled for superusers) */}
                                                                    {currentUser.isSuperuser && !isSuper && !isSelf && (
                                                                        <button
                                                                            onClick={() => handleToggleStaff(user.id)}
                                                                            title={user.isStaff ? "Demote to Standard" : "Promote to Staff"}
                                                                            className="p-1.5 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition cursor-pointer"
                                                                        >
                                                                            {user.isStaff ? <UserX className="w-3.5 h-3.5 text-red-500" /> : <UserCheck className="w-3.5 h-3.5 text-emerald-500" />}
                                                                        </button>
                                                                    )}
                                                                    {/* Delete User (Only enabled for superusers) */}
                                                                    {currentUser.isSuperuser && !isSuper && !isSelf && (
                                                                        <button
                                                                            onClick={() => handleDeleteUser(user.id)}
                                                                            title="Delete user account"
                                                                            className="p-1.5 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-red-500 transition cursor-pointer"
                                                                        >
                                                                            <Trash2 className="w-3.5 h-3.5" />
                                                                        </button>
                                                                    )}
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB 3: TREND MANAGEMENT */}
                    {activeTab === "trends" && (
                        <div className="space-y-6 animate-in fade-in duration-200">
                            {/* Search + Action Header */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 select-none">
                                <div className="flex max-w-md w-full items-center gap-3 px-4 py-2.5 border border-border bg-card rounded-2xl">
                                    <Search className="w-4 h-4 text-muted-foreground shrink-0" />
                                    <input
                                        type="text"
                                        placeholder="Search trends by title or platform..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full text-xs text-foreground bg-transparent outline-none placeholder:text-muted-foreground"
                                    />
                                </div>
                                <button
                                    onClick={openCreateModal}
                                    className="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground hover:opacity-90 font-bold text-xs flex items-center gap-2 shadow-xs transition cursor-pointer"
                                >
                                    <Plus className="w-4 h-4" /> Add Trend
                                </button>
                            </div>

                            {/* Table */}
                            <div className="bg-card border border-border/80 rounded-2xl overflow-hidden shadow-xs select-none">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-border/50 bg-muted/20 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                                <th className="px-6 py-4">Topic / Trend</th>
                                                <th className="px-6 py-4">Platform</th>
                                                <th className="px-6 py-4">Category</th>
                                                <th className="px-6 py-4">Viral Score</th>
                                                <th className="px-6 py-4">Freshness</th>
                                                <th className="px-6 py-4 text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border/40 text-sm text-foreground">
                                            {filteredTrends.length === 0 ? (
                                                <tr>
                                                    <td colSpan="6" className="px-6 py-10 text-center text-xs text-muted-foreground font-medium">
                                                        No trends found in the database.
                                                    </td>
                                                </tr>
                                            ) : (
                                                filteredTrends.map((trend) => {
                                                    let platformBadge = "bg-slate-500/10 text-slate-600 dark:text-slate-400"
                                                    if (trend.platform === "YouTube") platformBadge = "bg-red-500/10 text-red-600 dark:text-red-400"
                                                    if (trend.platform === "Instagram Reels") platformBadge = "bg-pink-500/10 text-pink-600 dark:text-pink-400"

                                                    let freshnessBadge = "bg-muted text-muted-foreground"
                                                    if (trend.freshness === "Breakout") freshnessBadge = "bg-purple-500/10 text-purple-600 dark:text-purple-400"
                                                    if (trend.freshness === "High") freshnessBadge = "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                                    if (trend.freshness === "Medium") freshnessBadge = "bg-amber-500/10 text-amber-600 dark:text-amber-400"

                                                    return (
                                                        <tr key={trend.id} className="hover:bg-muted/10 transition-colors">
                                                            <td className="px-6 py-4 font-semibold text-foreground text-xs max-w-xs truncate">
                                                                {trend.title}
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${platformBadge}`}>
                                                                    {trend.platform}
                                                                </span>
                                                            </td>
                                                            <td className="px-6 py-4 text-xs text-muted-foreground font-medium">
                                                                {trend.category}
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <div className="flex items-center gap-2">
                                                                    <div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden">
                                                                        <div
                                                                            className="h-full bg-primary rounded-full"
                                                                            style={{ width: `${trend.score}%` }}
                                                                        />
                                                                    </div>
                                                                    <span className="text-[10px] font-bold">{trend.score}</span>
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${freshnessBadge}`}>
                                                                    {trend.freshness}
                                                                </span>
                                                            </td>
                                                            <td className="px-6 py-4 text-right">
                                                                <div className="flex justify-end gap-2.5">
                                                                    <button
                                                                        onClick={() => openEditModal(trend)}
                                                                        title="Edit trend details"
                                                                        className="p-1.5 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition cursor-pointer"
                                                                    >
                                                                        <Edit3 className="w-3.5 h-3.5" />
                                                                    </button>
                                                                    <button
                                                                        onClick={() => handleDeleteTrend(trend.id)}
                                                                        title="Delete trend from feed"
                                                                        className="p-1.5 rounded-lg border border-border bg-card hover:bg-muted text-muted-foreground hover:text-red-500 transition cursor-pointer"
                                                                    >
                                                                        <Trash2 className="w-3.5 h-3.5" />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}

            {/* CREATE/EDIT MODAL */}
            <TrendModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onSave={handleSaveTrend}
                trend={selectedTrend}
            />
        </DashboardLayout>
    )
}

export default AdminDashboard
