import axiosInstance from "@/api/axios"

export const getScripts = async () => {
    const response = await axiosInstance.get("/scripts/")
    return response.data
}

export const generateScript = async (topic) => {
    const response = await axiosInstance.post("/scripts/generate/", { topic })
    return response.data
}
