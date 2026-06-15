import { create } from "zustand"

const useScriptStore = create((set) => ({
    scripts: [],

    setScripts: (scripts) =>
        set({ scripts }),
}))

export default useScriptStore
