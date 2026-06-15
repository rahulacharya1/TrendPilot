import { create } from "zustand"

const useAuthStore = create((set) => ({
    user: (() => {
        try {
            const stored = localStorage.getItem("user")
            return stored ? JSON.parse(stored) : null
        } catch {
            return null
        }
    })(),
    accessToken: localStorage.getItem("token") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,

    setAuth: (user, accessToken, refreshToken) => {
        localStorage.setItem("token", accessToken)
        localStorage.setItem("refreshToken", refreshToken)
        localStorage.setItem("user", JSON.stringify(user))
        set({ user, accessToken, refreshToken })
    },

    logout: () => {
        localStorage.removeItem("token")
        localStorage.removeItem("refreshToken")
        localStorage.removeItem("user")
        set({ user: null, accessToken: null, refreshToken: null })
    },
}))

export default useAuthStore
