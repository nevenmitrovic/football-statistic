import axios, { type AxiosInstance } from 'axios'

const axiosClient: AxiosInstance = axios.create({
	baseURL: '/api',
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
	},
})

axiosClient.interceptors.request.use(
	(config) => {
		return config
	},
	(error) => Promise.reject(error)
)

axiosClient.interceptors.response.use(
	(response) => response,
	(error) => {
		return Promise.reject(error)
	}
)

export default axiosClient
