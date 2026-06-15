import axiosInstance from "@/api/axios"

export const analyzeCompetitor =
    async (creator) => {

        const response =
            await axiosInstance.post(
                "/competitors/gap/",
                {
                    creator,
                }
            )

        return response.data
    }
