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
		config.headers['x-rapidapi-key'] = import.meta.env.VITE_RAPID_API_KEY
		config.headers['x-rapidapi-host'] = 'v3.football.api-sports.io'
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
