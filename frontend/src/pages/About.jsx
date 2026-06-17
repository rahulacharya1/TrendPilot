import MarketingLayout from "@/layouts/MarketingLayout"
import { Award, Zap, Code, Shield } from "lucide-react"

const About = () => {
    return (
        <MarketingLayout>
            <div className="py-20 select-none">
                {/* Hero section */}
                <div className="max-w-4xl mx-auto text-center px-6 mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground font-sans">
                        Empowering Creators with <br />
                        <span className="bg-linear-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                            AI-Driven Content Strategy
                        </span>
                    </h1>
                    <p className="text-muted-foreground text-base sm:text-lg mt-6 leading-relaxed">
                        At TrendPilot, we believe content creation shouldn't be a guessing game. We combine advanced web scrapers, data analytics, and the power of Google Gemini AI models to help creators and marketers grow their digital footprint efficiently.
                    </p>
                </div>

                {/* Grid stats/pillars */}
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    <div className="p-6 rounded-2xl border border-border bg-card">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center mb-4">
                            <Award className="w-5 h-5" />
                        </div>
                        <h3 className="font-semibold text-base text-foreground">Creator Focused</h3>
                        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                            Built by creators, for creators. Our tools are optimized for platform engagement.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-border bg-card">
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center mb-4">
                            <Zap className="w-5 h-5" />
                        </div>
                        <h3 className="font-semibold text-base text-foreground">Real-time Data</h3>
                        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                            Identify trends and platform metrics instantly to capture immediate viral traffic.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-border bg-card">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                            <Code className="w-5 h-5" />
                        </div>
                        <h3 className="font-semibold text-base text-foreground">Advanced Tech</h3>
                        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                            Leveraging Vite, React, Django REST framework, and Google Gemini API.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-border bg-card">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                            <Shield className="w-5 h-5" />
                        </div>
                        <h3 className="font-semibold text-base text-foreground">Security First</h3>
                        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                            Your API keys and content drafts are secured with industry-standard protocols.
                        </p>
                    </div>
                </div>

                {/* Detailed story */}
                <div className="max-w-4xl mx-auto px-6 border border-border bg-muted/20 rounded-3xl p-8 sm:p-12">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">Our Mission</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                        The creator economy is growing at an unprecedented rate, but creators face a constant struggle: **burnout** and **ideas exhaustion**. Deciding what to write, what visual hooks to use, and how to structure a script consumes hours of cognitive load.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                        TrendPilot changes this. By scanning YouTube, Instagram, and web sources for breakout patterns, our algorithms evaluate trend velocity. When a trend is discovered, our integration with Gemini AI drafts optimized hooks and complete scripts automatically. This gives creators their time back, enabling them to focus on what they do best: **delivering high-quality performance and connection**.
                    </p>
                </div>
            </div>
        </MarketingLayout>
    )
}

export default About
