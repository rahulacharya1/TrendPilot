import MarketingNavbar from "@/components/common/MarketingNavbar"
import MarketingFooter from "@/components/common/MarketingFooter"

const MarketingLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col justify-between transition-colors duration-300">
            <MarketingNavbar />
            <main className="flex-1 pt-16">
                {children}
            </main>
            <MarketingFooter />
        </div>
    )
}

export default MarketingLayout
