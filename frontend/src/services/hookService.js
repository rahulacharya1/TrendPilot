import axiosInstance from "@/api/axios"

export const getHooks = async () => {
    const response = await axiosInstance.get("/hooks/")
    return response.data
}

export const generateHooks = async (topic) => {
    const response = await axiosInstance.post("/hooks/generate/", { topic })
    return response.data
}
