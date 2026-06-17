import axios from "axios"
import useAuthStore from "../store/authStore"

const BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api/v1"

const axiosInstance = axios.create({
    baseURL: BASE_URL,
})

// Request Interceptor: automatically attach accessToken to Authorization header
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Response Interceptor: refresh expired token on 401
let isRefreshing = false
let failedQueue = []

const processQueue = (error, token = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error)
        } else {
            prom.resolve(token)
        }
    })
    failedQueue = []
}

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config

        // If error status is 401 Unauthorized and request has not been retried yet
        if (error.response?.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject })
                })
                    .then((token) => {
                        originalRequest.headers.Authorization = `Bearer ${token}`
                        return axiosInstance(originalRequest)
                    })
                    .catch((err) => {
                        return Promise.reject(err)
                    })
            }

            originalRequest._retry = true
            isRefreshing = true

            const refreshToken = localStorage.getItem("refreshToken")
            if (!refreshToken) {
                useAuthStore.getState().logout()
                window.location.href = "/login"
                return Promise.reject(error)
            }

            try {
                // Call accounts JWT refresh API path
                const response = await axios.post(`${BASE_URL}/accounts/refresh/`, {
                    refresh: refreshToken,
                })
                const { access } = response.data

                localStorage.setItem("token", access)
                useAuthStore.setState({ accessToken: access })

                processQueue(null, access)
                originalRequest.headers.Authorization = `Bearer ${access}`
                return axiosInstance(originalRequest)
            } catch (refreshError) {
                processQueue(refreshError, null)
                useAuthStore.getState().logout()
                window.location.href = "/login"
                return Promise.reject(refreshError)
            } finally {
                isRefreshing = false
            }
        }

        return Promise.reject(error)
    }
)

export default axiosInstance

