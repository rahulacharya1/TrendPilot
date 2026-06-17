import { NavLink } from "react-router-dom"
import logo from "@/assets/logo/tp-logo.png"
import { 
    TrendingUp, 
    Sparkles, 
    FileText, 
    Users, 
    ArrowRight, 
    CheckCircle2, 
    Zap, 
    Play, 
    Globe, 
    Activity, 
    ArrowUpRight 
} from "lucide-react"
import MarketingLayout from "@/layouts/MarketingLayout"
import useAuthStore from "@/store/authStore"

const MockupDashboard = () => {
    return (
        <div className="w-full max-w-lg lg:max-w-none border border-border/80 bg-card/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden font-sans text-foreground/80 select-none transition-all duration-300 hover:scale-[1.01] hover:border-primary/30 relative z-10">
            {/* Window bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-border/40 bg-muted/20">
                <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-destructive" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <div className="text-[10px] text-muted-foreground font-semibold bg-muted/65 px-4 py-0.5 rounded-md border border-border/60">
                    trendpilot.ai/dashboard
                </div>
                <div className="w-10" />
            </div>

            {/* Inner Dashboard Layout */}
            <div className="grid grid-cols-12 h-96">
                {/* Sidebar mock */}
                <div className="col-span-3 border-r border-border/40 bg-muted/10 p-4 space-y-4 hidden sm:block">
                    <div className="flex items-center gap-2 mb-6">
                        <img src={logo} alt="Logo" className="w-6 h-6" />
                        <span className="text-[11px] font-bold tracking-tight text-foreground">TrendPilot</span>
                    </div>
                    <div className="space-y-3">
                        <div className="h-2.5 w-16 bg-muted rounded-md" />
                        <div className="h-2 bg-muted/40 w-12 rounded-md" />
                        <div className="h-2.5 w-20 bg-primary/10 border border-primary/20 rounded-md" />
                        <div className="h-2 bg-muted/40 w-14 rounded-md" />
                    </div>
                </div>

                {/* Main panel */}
                <div className="col-span-12 sm:col-span-9 p-6 flex flex-col justify-between bg-card/30">
                    {/* Prompt Box */}
                    <div className="space-y-4">
                        <div className="bg-muted/30 border border-border/50 rounded-xl p-3.5 space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">AI INPUT</span>
                                <span className="text-[10px] text-muted-foreground">Gemini 1.5 Active</span>
                            </div>
                            <p className="text-xs text-foreground font-semibold leading-relaxed">
                                "Generate Curiosity hooks for tech micro-SaaS trends."
                            </p>
                        </div>

                        {/* AI Output Generation */}
                        <div className="bg-primary/5 border border-primary/10 rounded-xl p-3.5 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">GENERATED HOOKS</span>
                                <span className="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-md">99% Viral Score</span>
                            </div>
                            <div className="space-y-2">
                                <div className="p-2.5 bg-card/90 rounded-lg border border-border/50 text-[11px] leading-relaxed text-foreground font-semibold shadow-xs">
                                    "This new Vite compiler will compile your project in 0.2 seconds..."
                                </div>
                                <div className="p-2.5 bg-card/45 rounded-lg border border-border/20 text-[11px] leading-relaxed text-muted-foreground">
                                    "I built a SaaS in 30 days using only these 3 libraries..."
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats details */}
                    <div className="flex justify-between items-center pt-4 border-t border-border/40">
                        <div className="flex gap-4">
                            <div>
                                <p className="text-[9px] text-muted-foreground uppercase tracking-wider font-semibold">Trend Score</p>
                                <p className="text-xs font-bold text-emerald-500 mt-0.5">98.4 / 100</p>
                            </div>
                            <div>
                                <p className="text-[9px] text-muted-foreground uppercase tracking-wider font-semibold">Growth</p>
                                <p className="text-xs font-bold text-primary mt-0.5">+142% breakout</p>
                            </div>
                        </div>
                        <div className="h-6 px-2.5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                            <span className="text-[8px] text-primary font-bold uppercase tracking-wider">Breakout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Home = () => {
    const accessToken = useAuthStore((state) => state.accessToken)

    return (
        <MarketingLayout>
            <div className="bg-background text-foreground transition-colors duration-300 relative">
                
                {/* HERO SECTION WITH DYNAMIC GRADIENTS */}
                <section className="relative py-20 lg:py-32 overflow-hidden px-6">
                    {/* Glowing Orbs */}
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse duration-6000" />
                    <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
                        <div className="lg:col-span-6 text-center lg:text-left space-y-6">
                            
                            {/* Accent pill */}
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary select-none animate-bounce duration-1000">
                                <Sparkles className="w-3.5 h-3.5 text-primary" />
                                <span>TrendPilot AI Platform v1.2</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] font-sans text-foreground">
                                Scale Your Content <br className="hidden sm:inline" />
                                <span className="bg-linear-to-r from-primary via-purple-600 to-indigo-500 bg-clip-text text-transparent">
                                    Engine with AI
                                </span>
                            </h1>

                            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                                Discover breakout topics across social channels, draft viral hooks in seconds, write complete production scripts, and monitor competitor gaps instantly.
                            </p>

                            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                {accessToken ? (
                                    <NavLink
                                        to="/dashboard"
                                        className="px-8 py-4 rounded-2xl bg-linear-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] cursor-pointer"
                                    >
                                        Go to Dashboard
                                        <ArrowRight className="w-4 h-4" />
                                    </NavLink>
                                ) : (
                                    <>
                                        <NavLink
                                            to="/register"
                                            className="px-8 py-4 rounded-2xl bg-linear-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] cursor-pointer"
                                        >
                                            Start Generating Free
                                            <ArrowRight className="w-4 h-4" />
                                        </NavLink>
                                        <NavLink
                                            to="/login"
                                            className="px-8 py-4 rounded-2xl border border-border bg-card/50 backdrop-blur-xs hover:bg-muted text-foreground font-bold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.01] cursor-pointer"
                                        >
                                            <Play className="w-3.5 h-3.5 text-primary fill-primary" /> Live Demo
                                        </NavLink>
                                    </>
                                )}
                            </div>

                            {/* Trust Badge */}
                            <div className="pt-6 flex flex-wrap justify-center lg:justify-start items-center gap-6 text-xs text-muted-foreground font-semibold">
                                <div className="flex items-center gap-1.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    <span>No Credit Card Required</span>
                                </div>
                                <div className="w-1.5 h-1.5 rounded-full bg-border hidden sm:block" />
                                <div className="flex items-center gap-1.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    <span>Google Gemini Powered</span>
                                </div>
                            </div>
                        </div>

                        {/* HERO MOCKUP WITH DECORATIVE FLOATING METRICS */}
                        <div className="lg:col-span-6 flex justify-center relative">
                            {/* Floating Card 1 */}
                            <div className="absolute -top-6 -left-6 bg-card/80 backdrop-blur-md border border-border/60 p-4 rounded-2xl shadow-lg z-20 hidden sm:flex items-center gap-3 animate-bounce duration-4000 select-none">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                                    <Activity className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Live Scrapers</p>
                                    <p className="text-sm font-bold text-foreground">1,842 requests/s</p>
                                </div>
                            </div>

                            {/* Floating Card 2 */}
                            <div className="absolute -bottom-6 -right-6 bg-card/80 backdrop-blur-md border border-border/60 p-4 rounded-2xl shadow-lg z-20 hidden sm:flex items-center gap-3 animate-bounce duration-5000 select-none">
                                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Niches Analyzed</p>
                                    <p className="text-sm font-bold text-foreground">42 Content Areas</p>
                                </div>
                            </div>

                            <div className="relative w-full max-w-lg lg:max-w-none">
                                <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-purple-500/10 rounded-3xl blur-2xl -z-10" />
                                <MockupDashboard />
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROCEDURAL HOW IT WORKS SECTION */}
                <section className="py-20 lg:py-28 border-y border-border/40 bg-muted/20 relative px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                                Content Automation in 3 Steps
                            </h2>
                            <p className="text-muted-foreground text-sm sm:text-base font-medium">
                                Transform viral data insights into production-ready script assets instantly.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
                            {/* Connect line for visual layout */}
                            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 border-t border-dashed border-border/60 -z-10" />

                            {/* Step 1 */}
                            <div className="bg-card/40 backdrop-blur-xs border border-border/60 p-8 rounded-3xl text-center flex flex-col items-center group hover:-translate-y-1 hover:border-primary/20 transition-all duration-300">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-extrabold text-lg border border-primary/20 mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                                    1
                                </div>
                                <h3 className="font-bold text-lg text-foreground">Discover Trends</h3>
                                <p className="text-muted-foreground text-xs mt-3 leading-relaxed max-w-xs font-medium">
                                    Track rising social search topics and audit viral breakout scoring patterns.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-card/40 backdrop-blur-xs border border-border/60 p-8 rounded-3xl text-center flex flex-col items-center group hover:-translate-y-1 hover:border-primary/20 transition-all duration-300">
                                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-extrabold text-lg border border-purple-500/20 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all duration-200">
                                    2
                                </div>
                                <h3 className="font-bold text-lg text-foreground">Draft Copy</h3>
                                <p className="text-muted-foreground text-xs mt-3 leading-relaxed max-w-xs font-medium">
                                    Leverage Gemini client utilities to write custom hook lists and complete video scripts.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-card/40 backdrop-blur-xs border border-border/60 p-8 rounded-3xl text-center flex flex-col items-center group hover:-translate-y-1 hover:border-primary/20 transition-all duration-300">
                                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-extrabold text-lg border border-indigo-500/20 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-200">
                                    3
                                </div>
                                <h3 className="font-bold text-lg text-foreground">Audit Gaps</h3>
                                <p className="text-muted-foreground text-xs mt-3 leading-relaxed max-w-xs font-medium">
                                    Examine competitor creator indexes to extract metadata and find untapped traffic.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PREMIUM FEATURES GRID */}
                <section className="py-20 lg:py-28 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                                Everything You Need to Go Viral
                            </h2>
                            <p className="text-muted-foreground text-sm sm:text-base font-medium">
                                Data-backed content templates and smart creators insights built to engage audiences.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            
                            {/* Feature 1 */}
                            <div className="p-8 rounded-3xl border border-border/60 bg-card/50 backdrop-blur-md hover:bg-card hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                                        <TrendingUp className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-lg text-foreground">Trend Discovery</h3>
                                    <p className="text-muted-foreground text-xs leading-relaxed font-medium">
                                        Scrape real-time breakout trends, viral scoring metrics, and keyword index topics instantly.
                                    </p>
                                </div>
                                <div className="pt-6">
                                    <NavLink to="/trends" className="text-xs font-bold text-emerald-500 flex items-center gap-1 hover:underline select-none">
                                        Open Discovery <ArrowUpRight className="w-3.5 h-3.5" />
                                    </NavLink>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="p-8 rounded-3xl border border-border/60 bg-card/50 backdrop-blur-md hover:bg-card hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
                                        <Sparkles className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-lg text-foreground">Hook Generator</h3>
                                    <p className="text-muted-foreground text-xs leading-relaxed font-medium">
                                        Draft structured opening hooks targeting Curiosity or Authority formats.
                                    </p>
                                </div>
                                <div className="pt-6">
                                    <NavLink to="/hooks" className="text-xs font-bold text-purple-600 flex items-center gap-1 hover:underline select-none">
                                        Generate Hooks <ArrowUpRight className="w-3.5 h-3.5" />
                                    </NavLink>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="p-8 rounded-3xl border border-border/60 bg-card/50 backdrop-blur-md hover:bg-card hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-lg text-foreground">AI Scriptwriter</h3>
                                    <p className="text-muted-foreground text-xs leading-relaxed font-medium">
                                        Write complete production scripts with visual guidance text and call-to-actions.
                                    </p>
                                </div>
                                <div className="pt-6">
                                    <NavLink to="/scripts" className="text-xs font-bold text-indigo-600 flex items-center gap-1 hover:underline select-none">
                                        Draft Scripts <ArrowUpRight className="w-3.5 h-3.5" />
                                    </NavLink>
                                </div>
                            </div>

                            {/* Feature 4 */}
                            <div className="p-8 rounded-3xl border border-border/60 bg-card/50 backdrop-blur-md hover:bg-card hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-lg text-foreground">Competitor Gap</h3>
                                    <p className="text-muted-foreground text-xs leading-relaxed font-medium">
                                        Analyze creator indices to capture keywords and find audience gaps.
                                    </p>
                                </div>
                                <div className="pt-6">
                                    <NavLink to="/competitors" className="text-xs font-bold text-primary flex items-center gap-1 hover:underline select-none">
                                        Analyze Gaps <ArrowUpRight className="w-3.5 h-3.5" />
                                    </NavLink>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* DYNAMIC TRANSPARENT PRICING GRID */}
                <section className="py-20 lg:py-28 border-t border-border/40 bg-muted/10 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                                Simple, Transparent Pricing
                            </h2>
                            <p className="text-muted-foreground text-sm sm:text-base font-medium">
                                Choose the plan matching your output frequency. Downgrade or upgrade anytime.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            
                            {/* Free Tier */}
                            <div className="border border-border bg-card rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:border-border/80 transition-all duration-300 group hover:-translate-y-1">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-extrabold text-lg text-foreground">Starter Free</h3>
                                        <p className="text-xs text-muted-foreground mt-1">For beginners & hobbyists</p>
                                    </div>
                                    <div className="flex items-baseline gap-1 text-foreground">
                                        <span className="text-4xl font-black tracking-tight">₹0</span>
                                        <span className="text-xs text-muted-foreground font-semibold">/ forever</span>
                                    </div>
                                    <ul className="space-y-4 text-xs font-semibold text-foreground/80 border-t border-border/40 pt-6">
                                        <li className="flex items-center gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                            <span>5 AI Generations / day</span>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                            <span>Basic Trend Dashboard</span>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                            <span>Standard Community Support</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pt-8">
                                    <NavLink
                                        to="/register"
                                        className="block w-full py-3.5 rounded-xl border border-border bg-background hover:bg-muted text-center font-bold text-xs transition duration-200 select-none cursor-pointer"
                                    >
                                        Get Started Free
                                    </NavLink>
                                </div>
                            </div>

                            {/* Pro Tier (Recommended Accent) */}
                            <div className="border-2 border-primary bg-card rounded-3xl p-8 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 relative group hover:-translate-y-1">
                                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-linear-to-r from-primary to-purple-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm select-none">
                                    Most Popular
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-extrabold text-lg text-foreground flex items-center gap-2">
                                            Creator Pro <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                                        </h3>
                                        <p className="text-xs text-muted-foreground mt-1">For active digital influencers</p>
                                    </div>
                                    <div className="flex items-baseline gap-1 text-foreground">
                                        <span className="text-4xl font-black tracking-tight">₹2,499</span>
                                        <span className="text-xs text-muted-foreground font-semibold">/ month</span>
                                    </div>
                                    <ul className="space-y-4 text-xs font-semibold text-foreground border-t border-border/40 pt-6">
                                        <li className="flex items-center gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                            <span>Unlimited AI Generations</span>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                            <span>Full Competitor Gap Audits</span>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                            <span>Real-time social discoverability</span>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                            <span>Priority Email Support</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pt-8">
                                    <NavLink
                                        to="/register"
                                        className="block w-full py-3.5 rounded-xl bg-linear-to-r from-primary to-purple-600 text-white hover:opacity-90 text-center font-bold text-xs transition duration-200 shadow-md select-none cursor-pointer"
                                    >
                                        Go Premium Pro
                                    </NavLink>
                                </div>
                            </div>

                            {/* Agency Tier */}
                            <div className="border border-border bg-card rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:border-border/80 transition-all duration-300 group hover:-translate-y-1">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-extrabold text-lg text-foreground">Agency Squad</h3>
                                        <p className="text-xs text-muted-foreground mt-1">For teams & media hubs</p>
                                    </div>
                                    <div className="flex items-baseline gap-1 text-foreground">
                                        <span className="text-4xl font-black tracking-tight">₹6,499</span>
                                        <span className="text-xs text-muted-foreground font-semibold">/ month</span>
                                    </div>
                                    <ul className="space-y-4 text-xs font-semibold text-foreground/80 border-t border-border/40 pt-6">
                                        <li className="flex items-center gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                            <span>Everything in Creator Pro</span>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                            <span>Up to 5 team member profiles</span>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                            <span>Custom Brand voice templates</span>
                                        </li>
                                        <li className="flex items-center gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                            <span>Dedicated Account Manager</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pt-8">
                                    <NavLink
                                        to="/register"
                                        className="block w-full py-3.5 rounded-xl border border-border bg-background hover:bg-muted text-center font-bold text-xs transition duration-200 select-none cursor-pointer"
                                    >
                                        Get Started Agency
                                    </NavLink>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* PREMIUM GLOWING CTA BANNER */}
                <section className="py-20 lg:py-28 max-w-5xl mx-auto px-6">
                    <div className="rounded-3xl bg-linear-to-br from-indigo-950 via-slate-900 to-slate-950 text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl border border-indigo-500/10">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                        <div className="relative z-10 max-w-xl space-y-4">
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ready to scale your content engine?</h2>
                            <p className="text-indigo-200/80 text-sm sm:text-base leading-relaxed font-medium">
                                Join thousands of creators using TrendPilot to automate discovery, generate scripts, and grow conversion.
                            </p>
                            <div className="pt-4 flex flex-wrap gap-4 items-center">
                                {accessToken ? (
                                    <NavLink
                                        to="/dashboard"
                                        className="px-8 py-4 rounded-2xl bg-white text-indigo-950 font-bold hover:bg-opacity-95 transition-all shadow-md select-none cursor-pointer text-sm"
                                    >
                                        Go to Dashboard
                                    </NavLink>
                                ) : (
                                    <NavLink
                                        to="/register"
                                        className="px-8 py-4 rounded-2xl bg-white text-indigo-950 font-bold hover:bg-opacity-95 transition-all shadow-md select-none cursor-pointer text-sm"
                                    >
                                        Get Started Free
                                    </NavLink>
                                )}
                                <span className="text-xs text-indigo-200/80 flex items-center gap-1.5 select-none font-semibold">
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
