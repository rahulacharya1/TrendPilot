import axiosInstance from "@/api/axios"

export const getTrends = async () => {

    const response =
        await axiosInstance.get(
            "/trends/"
        )

    return response.data
}
