import axiosInstance from "@/api/axios"

export const generateScript = async (
    topic
) => {

    const response =
        await axiosInstance.post(
            "/scripts/generate/",
            {
                topic,
            }
        )

    return response.data
}
