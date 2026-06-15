import axiosInstance from "@/api/axios"

export const loginUser = async (data) => {

    const response =
        await axiosInstance.post(
            "/accounts/login/",
            data
        )

    return response.data
}

export const registerUser = async (data) => {

    const response =
        await axiosInstance.post(
            "/accounts/register/",
            data
        )

    return response.data
}
