import { NavLink } from "react-router-dom"
import logo from "@/assets/logo/tp-logo.png"
import { TrendingUp, Sparkles, FileText, Users, ArrowRight, CheckCircle2 } from "lucide-react"
import MarketingLayout from "@/layouts/MarketingLayout"


const MockupDashboard = () => {
    return (
        <div className="w-full max-w-lg lg:max-w-none border border-slate-800/80 bg-slate-950 rounded-3xl shadow-2xl overflow-hidden font-sans text-slate-300 select-none transition-transform duration-300 hover:scale-[1.01] relative z-10">
            {/* Window bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-900 bg-slate-950">
                <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
                </div>
                <div className="text-[10px] text-slate-500 font-semibold bg-slate-900/60 px-4 py-0.5 rounded-md border border-slate-900">
                    trendpilot.ai/dashboard
                </div>
                <div className="w-10" />
            </div>

            {/* Inner Dashboard Layout */}
            <div className="grid grid-cols-12 h-85">
                {/* Sidebar mock */}
                <div className="col-span-3 border-r border-slate-900 bg-slate-950/60 p-4 space-y-3 hidden sm:block">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                        <span className="text-xs text-purple-400 font-bold">TP</span>
                    </div>
                    <div className="space-y-3">
                        <div className="h-2.5 w-16 bg-slate-900 rounded-sm" />
                        <div className="h-2 bg-slate-900/50 w-12 rounded-sm" />
                        <div className="h-2.5 w-20 bg-primary/20 border border-primary/20 rounded-sm" />
                        <div className="h-2 bg-slate-900/50 w-14 rounded-sm" />
                    </div>
                </div>

                {/* Main panel */}
                <div className="col-span-12 sm:col-span-9 p-6 flex flex-col justify-between bg-slate-950/20">
                    {/* Prompt Box */}
                    <div className="space-y-4">
                        <div className="bg-slate-900/60 border border-slate-900 rounded-xl p-3.5 space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">AI INPUT</span>
                                <span className="text-[10px] text-slate-500">Gemini 1.5 Active</span>
                            </div>
                            <p className="text-xs text-slate-200 font-medium leading-relaxed">
                                "Generate Curiosity hooks for tech micro-SaaS trends."
                            </p>
                        </div>

                        {/* AI Output Generation */}
                        <div className="bg-slate-900/30 border border-slate-900/40 rounded-xl p-3.5 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">GENERATED HOOKS</span>
                                <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-md">99% Viral Score</span>
                            </div>
                            <div className="space-y-2">
                                <div className="p-2.5 bg-slate-900/40 rounded-lg border border-slate-900/60 text-[11px] leading-relaxed text-slate-300">
                                    "This new Vite compiler will compile your project in 0.2 seconds..."
                                </div>
                                <div className="p-2.5 bg-slate-900/20 rounded-lg border border-slate-900/20 text-[11px] leading-relaxed text-slate-500">
                                    "I built a SaaS in 30 days using only these 3 libraries..."
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats details */}
                    <div className="flex justify-between items-center pt-4 border-t border-slate-900">
                        <div className="flex gap-4">
                            <div>
                                <p className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Trend Score</p>
                                <p className="text-xs font-bold text-emerald-400 mt-0.5">98.4 / 100</p>
                            </div>
                            <div>
                                <p className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Growth</p>
                                <p className="text-xs font-bold text-purple-400 mt-0.5">+142% breakout</p>
                            </div>
                        </div>
                        <div className="h-6 px-2.5 rounded-full bg-purple-500/15 border border-purple-500/20 flex items-center justify-center">
                            <span className="text-[8px] text-purple-400 font-bold uppercase tracking-wider">Breakout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <MarketingLayout>
            <div className="bg-background text-foreground transition-colors duration-300">
                {/* Hero Section */}
                <section className="relative py-16 overflow-hidden">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-6 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-600 dark:text-purple-400 mb-6 select-none">
                                <Sparkles className="w-3.5 h-3.5" />
                                Next-Gen AI Content Tool
                            </div>
                            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight font-sans text-foreground">
                                Create Viral Content <br />
                                <span className="bg-linear-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                    Guided by AI 🚀
                                </span>
                            </h1>
                            <p className="text-muted-foreground text-lg sm:text-xl mt-6 leading-relaxed">
                                Discover trending topics, generate high-converting hooks, write complete scripts, and track your content analytics. All powered by advanced Google Gemini AI models.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <NavLink
                                    to="/register"
                                    className="px-6 py-3.5 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-purple-500/20 transition-all hover:scale-[1.02] cursor-pointer"
                                >
                                    Start Generating Free
                                    <ArrowRight className="w-4 h-4" />
                                </NavLink>
                                <NavLink
                                    to="/login"
                                    className="px-6 py-3.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                                >
                                    Live Demo
                                </NavLink>
                            </div>
                        </div>

                        <div className="lg:col-span-6 flex justify-center">
                            <div className="relative w-full max-w-lg lg:max-w-none">
                                <div className="absolute inset-0 bg-linear-to-tr from-purple-500/10 to-indigo-500/10 rounded-3xl blur-2xl -z-10" />
                                <MockupDashboard />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 border-t border-border/50 bg-muted/30">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Everything You Need to Go Viral</h2>
                            <p className="text-muted-foreground mt-4 text-base sm:text-lg">
                                Stop guessing what content works. Use data-backed social insights and advanced creative models to engage your audience.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Feature 1 */}
                            <div className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-200">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-5">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                                <h3 className="font-semibold text-lg text-foreground">Trend Discovery</h3>
                                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                                    Identify breakout topics, score viral probability, and filter by platform niche before they saturate.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-200">
                                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center mb-5">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <h3 className="font-semibold text-lg text-foreground">Hook Generator</h3>
                                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                                    Produce high-converting opening hooks tailored to Curiosity, Authority, or Storytelling frameworks.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-200">
                                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center mb-5">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <h3 className="font-semibold text-lg text-foreground">AI Scriptwriter</h3>
                                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                                    Write complete video scripts including audio cues, visual instructions, and calls to action instantly.
                                </p>
                            </div>

                            {/* Feature 4 */}
                            <div className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-200">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-5">
                                    <Users className="w-5 h-5" />
                                </div>
                                <h3 className="font-semibold text-lg text-foreground">Competitor Gap</h3>
                                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                                    Scrape external creators, extract metadata and gaps, and capture untapped search traffic.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Premium CTA Banner */}
                <section className="py-20 max-w-5xl mx-auto px-6">
                    <div className="rounded-3xl bg-linear-to-br from-purple-900 to-indigo-950 text-white p-8 sm:p-12 relative overflow-hidden shadow-xl">
                        <div className="absolute top-0 right-0 w-75 h-75 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
                        <div className="relative z-10 max-w-xl">
                            <h2 className="text-3xl sm:text-4xl font-bold">Ready to automate your content engine?</h2>
                            <p className="text-purple-200 mt-4 text-base sm:text-lg leading-relaxed">
                                Join over 5,000+ creators and marketers using TrendPilot to scale views and conversions today.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4 items-center">
                                <NavLink
                                    to="/register"
                                    className="px-6 py-3 rounded-xl bg-white text-indigo-950 font-semibold hover:bg-opacity-90 transition-all cursor-pointer"
                                >
                                    Get Started Free
                                </NavLink>
                                <span className="text-xs text-purple-200 flex items-center gap-1.5 select-none">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> No credit card required
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </MarketingLayout>
    )
}

export default Home
