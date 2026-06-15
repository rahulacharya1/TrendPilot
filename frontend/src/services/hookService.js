import axiosInstance from "@/api/axios"

export const generateHooks = async (
    topic
) => {

    const response =
        await axiosInstance.post(
            "/hooks/generate/",
            {
                topic,
            }
        )

    return response.data
}
