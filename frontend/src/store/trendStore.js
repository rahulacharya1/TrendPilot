import { create } from "zustand"

const useTrendStore = create((set) => ({
    trends: [],

    setTrends: (trends) =>
        set({ trends }),
}))

export default useTrendStore
