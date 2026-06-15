import { NavLink } from "react-router-dom"
import logo from "@/assets/logo/tp-logo.png"

const GithubIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
)

const TwitterIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
)

const LinkedinIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
)

const MarketingFooter = () => {
    return (
        <footer className="border-t border-border/40 bg-card py-16 text-foreground select-none transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
                {/* Brand Section */}
                <div className="md:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="TrendPilot Logo" className="w-7 h-7" />
                        <span className="font-bold text-base bg-linear-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
                            TrendPilot AI
                        </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
                        TrendPilot is an AI-powered content and trend intelligence platform that helps digital creators, marketers, and brands discover breakout topics, generate hooks, and write viral scripts.
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-border/80 bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-all">
                            <GithubIcon className="w-4 h-4" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-border/80 bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-all">
                            <TwitterIcon className="w-4 h-4" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-border/80 bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-all">
                            <LinkedinIcon className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Navigation Columns */}
                <div className="md:col-span-2 space-y-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Product</h4>
                    <ul className="space-y-2.5">
                        <li><NavLink to="/services" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Features</NavLink></li>
                        <li><NavLink to="/services" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Pricing Plans</NavLink></li>
                        <li><NavLink to="/services" className="text-xs text-muted-foreground hover:text-foreground transition-colors">API Docs</NavLink></li>
                    </ul>
                </div>

                <div className="md:col-span-2 space-y-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Company</h4>
                    <ul className="space-y-2.5">
                        <li><NavLink to="/about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">About Us</NavLink></li>
                        <li><NavLink to="/contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Contact Us</NavLink></li>
                        <li><NavLink to="/about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Careers</NavLink></li>
                    </ul>
                </div>

                <div className="md:col-span-3 space-y-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Newsletter</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        Subscribe to get latest social media trends delivered directly to your inbox.
                    </p>
                    <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-3 py-2 text-xs rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-all"
                        />
                        <button type="submit" className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-all cursor-pointer">
                            Join
                        </button>
                    </form>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[10px] text-muted-foreground text-center sm:text-left">
                    &copy; 2026 TrendPilot. All rights reserved. Designed for digital content creators.
                </p>
                <div className="flex gap-6">
                    <NavLink to="/about" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</NavLink>
                    <NavLink to="/about" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors">Terms of Service</NavLink>
                </div>
            </div>
        </footer>
    )
}

export default MarketingFooter
