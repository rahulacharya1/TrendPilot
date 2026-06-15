import MarketingLayout from "@/layouts/MarketingLayout"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const Contact = () => {
    return (
        <MarketingLayout>
            <div className="py-20 select-none">
                {/* Hero section */}
                <div className="max-w-4xl mx-auto text-center px-6 mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground font-sans">
                        Have Questions? <br />
                        <span className="bg-linear-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                            Get In Touch With Us
                        </span>
                    </h1>
                    <p className="text-muted-foreground text-base sm:text-lg mt-6 leading-relaxed">
                        We're here to help you scale your digital strategy. Reach out to our technical support team or business inquiries department.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Contact details */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="p-6 rounded-2xl border border-border bg-card flex gap-4 items-center">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email Us</h4>
                                <p className="text-sm font-semibold text-foreground mt-1">support@trendpilot.ai</p>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl border border-border bg-card flex gap-4 items-center">
                            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Call Us</h4>
                                <p className="text-sm font-semibold text-foreground mt-1">+1 (555) 234-5678</p>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl border border-border bg-card flex gap-4 items-center">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Visit Us</h4>
                                <p className="text-sm font-semibold text-foreground mt-1">100 Pine Street, San Francisco, CA</p>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Form */}
                    <div className="lg:col-span-7 p-8 rounded-3xl border border-border bg-card shadow-xs">
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="John"
                                        className="w-full pl-4 pr-4 py-3 text-sm rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Doe"
                                        className="w-full pl-4 pr-4 py-3 text-sm rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full pl-4 pr-4 py-3 text-sm rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="How can we help your creative workflow?"
                                    className="w-full p-4 text-sm rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground outline-none resize-none focus:border-primary transition-all"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3.5 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-sm transition-all shadow-md shadow-purple-500/10 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <Send className="w-4 h-4" /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </MarketingLayout>
    )
}

export default Contact
