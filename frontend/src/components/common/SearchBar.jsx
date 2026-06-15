import { Search } from "lucide-react"

const SearchBar = () => {
    return (
        <div className="relative w-full max-w-xs md:max-w-sm">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
            <input
                type="text"
                placeholder="Search resources..."
                className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
            />
        </div>
    )
}

export default SearchBar

