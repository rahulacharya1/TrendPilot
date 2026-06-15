import axiosInstance from "@/api/axios"

export const getDashboardStats = async () => {
    const response = await axiosInstance.get("/analytics/stats/")
    return response.data
}
