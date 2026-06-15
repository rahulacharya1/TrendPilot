import { Search } from "lucide-react"

const SearchBar = () => {

    return (

        <div className="relative w-full max-w-md">

            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />

            <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-purple-500"
            />

        </div>
    )
}

export default SearchBar
