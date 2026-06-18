import axiosInstance from "@/api/axios"

export const getAdminStats = async () => {
    const response = await axiosInstance.get("/analytics/admin/stats/")
    return response.data
}

export const getAdminUsers = async () => {
    const response = await axiosInstance.get("/accounts/admin/users/")
    return response.data
}

export const deleteUser = async (userId) => {
    const response = await axiosInstance.delete(`/accounts/admin/users/${userId}/`)
    return response.data
}

export const toggleUserStaff = async (userId) => {
    const response = await axiosInstance.post(`/accounts/admin/users/${userId}/toggle-staff/`)
    return response.data
}

export const createTrend = async (trendData) => {
    const response = await axiosInstance.post("/trends/", trendData)
    return response.data
}

export const updateTrend = async (trendId, trendData) => {
    const response = await axiosInstance.put(`/trends/admin/${trendId}/`, trendData)
    return response.data
}

export const deleteTrend = async (trendId) => {
    const response = await axiosInstance.delete(`/trends/admin/${trendId}/`)
    return response.data
}
