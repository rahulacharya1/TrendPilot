const UserMenu = () => {
    return (
        <div className="flex items-center gap-3 select-none">
            <div className="w-9 h-9 rounded-full bg-linear-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white text-sm font-bold shadow-sm">
                R
            </div>
            <div className="hidden sm:block text-left">
                <h3 className="font-medium text-sm text-foreground leading-none">
                    Rahul
                </h3>
                <p className="text-xs text-muted-foreground mt-1 leading-none">
                    Creator Account
                </p>
            </div>
        </div>
    )
}

export default UserMenu

