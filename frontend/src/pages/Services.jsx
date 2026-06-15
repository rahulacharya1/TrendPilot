import MarketingLayout from "@/layouts/MarketingLayout"
import { TrendingUp, Sparkles, FileText, Users, ArrowRight } from "lucide-react"
import { NavLink } from "react-router-dom"

const Services = () => {
    const servicesList = [
        {
            title: "Trend Discovery",
            description: "Scrapes global and localized video streams, tweets, search metrics, and forum breakouts. Calculates trend freshness and platforms weight index to flag early-stage viral topics.",
            icon: TrendingUp,
            color: "text-emerald-500 bg-emerald-500/10",
        },
        {
            title: "Hook Generator",
            description: "Generates high-converting, psychologically targeted hooks. Choose from Curiosity (boost click-through rates), Authority (establish expertise), or Storytelling (capture long-term retention).",
            icon: Sparkles,
            color: "text-purple-500 bg-purple-500/10",
        },
        {
            title: "AI Scriptwriter",
            description: "Transforms a simple topic into a full multi-column script. Provides speech dialog, pacing notes, B-roll cues, sound effects directions, and high-impact calls-to-actions automatically.",
            icon: FileText,
            color: "text-indigo-500 bg-indigo-500/10",
        },
        {
            title: "Competitor gap",
            description: "Analyzes competitor metadata, search indexing, and viewer comment boards to map exact information gaps. Delivers structured content plans focusing on high-demand, low-supply topics.",
            icon: Users,
            color: "text-blue-500 bg-blue-500/10",
        },
    ]

    return (
        <MarketingLayout>
            <div className="py-20 select-none">
                {/* Hero section */}
                <div className="max-w-4xl mx-auto text-center px-6 mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground font-sans">
                        Complete Creator Tool Suite <br />
                        <span className="bg-linear-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                            Our Core AI Services
                        </span>
                    </h1>
                    <p className="text-muted-foreground text-base sm:text-lg mt-6 leading-relaxed">
                        Scale your social channels and digital marketing outputs with our unified creative tool suite. No placeholders, no friction. Just real AI-powered outcomes.
                    </p>
                </div>

                {/* Grid */}
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {servicesList.map((service, index) => (
                        <div key={index} className="p-8 rounded-3xl border border-border bg-card hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
                            <div>
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-border/50">
                                <NavLink to="/register" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:gap-3 transition-all">
                                    Start using {service.title} <ArrowRight className="w-3.5 h-3.5" />
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MarketingLayout>
    )
}

export default Services
