import { Navigate } from "react-router-dom"
import useAuthStore from "@/store/authStore"

const ProtectedRoute = ({ children }) => {
    const accessToken = useAuthStore((state) => state.accessToken)

    const isAuthenticated = !!accessToken

    return isAuthenticated ? children : <Navigate to="/login" />
}

export default ProtectedRoute
