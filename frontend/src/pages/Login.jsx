import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import MarketingLayout from "@/layouts/MarketingLayout"
import logo from "@/assets/logo/tp-logo.png"
import { loginUser } from "@/services/authService"
import useAuthStore from "@/store/authStore"

const Login = () => {
    const navigate = useNavigate()
    const setUser = useAuthStore((state) => state.setUser)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email.trim() || !password.trim()) {
            setError("Email and password are required.")
            return
        }

        setLoading(true)
        setError(null)
        try {
            const data = await loginUser({
                username: email,
                password,
            })
            if (data.success) {
                localStorage.setItem("token", data.access)
                localStorage.setItem("refreshToken", data.refresh)
                setUser(data.user)
                navigate("/dashboard")
            } else {
                setError(data.error || "Login failed.")
            }
        } catch (err) {
            console.error("Login error:", err)
            setError(err.response?.data?.detail || "Invalid email or password. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <MarketingLayout>
            <div className="py-24 flex items-center justify-center bg-background relative overflow-hidden">
                {/* Ambient Radial Accent */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-20%,rgba(124,58,237,0.08),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_60%_60%_at_50%_-20%,rgba(124,58,237,0.12),rgba(0,0,0,0))] pointer-events-none" />

                <div className="w-full max-w-md border border-border/80 bg-card/70 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-xl relative z-10 select-none">
                    <div className="flex items-center gap-2 mb-8 justify-center">
                        <img src={logo} alt="TrendPilot" className="w-8 h-8" />
                        <span className="text-xl font-bold bg-linear-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
                            TrendPilot
                        </span>
                    </div>

                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                            Welcome Back
                        </h1>
                        <p className="text-xs text-muted-foreground mt-2">
                            Enter your credentials to access your dashboard
                        </p>
                    </div>

                    {error && (
                        <div className="mt-6 p-3.5 text-xs font-semibold rounded-xl bg-destructive/10 text-destructive border border-destructive/20 text-center animate-in fade-in duration-200">
                            {error}
                        </div>
                    )}

                    <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                                className="w-full pl-4 pr-4 py-3 text-sm rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all disabled:opacity-75"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                                    Password
                                </label>
                                <NavLink to="/login" className="text-xs text-primary hover:underline">
                                    Forgot password?
                                </NavLink>
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={loading}
                                className="w-full pl-4 pr-4 py-3 text-sm rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all disabled:opacity-75"
                            />
                        </div>

                        <button 
                            type="submit"
                            disabled={loading}
                            className="w-full mt-2 py-3 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-sm transition-all shadow-md shadow-purple-500/10 active:scale-[0.99] cursor-pointer disabled:from-muted disabled:to-muted disabled:text-muted-foreground disabled:cursor-not-allowed"
                        >
                            {loading ? "Signing In..." : "Sign In"}
                        </button>
                    </form>

                    <p className="text-center text-sm text-muted-foreground mt-6">
                        Don't have an account?{" "}
                        <NavLink to="/register" className="text-primary font-medium hover:underline">
                            Sign up for free
                        </NavLink>
                    </p>
                </div>
            </div>
        </MarketingLayout>
    )
}

export default Login


