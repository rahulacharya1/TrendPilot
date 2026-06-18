import { Navigate } from "react-router-dom"
import useAuthStore from "@/store/authStore"

const AdminRoute = ({ children }) => {
    const accessToken = useAuthStore((state) => state.accessToken)
    const user = useAuthStore((state) => state.user)

    const isAuthenticated = !!accessToken
    const isAdmin = user && (user.isStaff || user.isSuperuser)

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    if (!isAdmin) {
        return <Navigate to="/dashboard" />
    }

    return children
}

export default AdminRoute
