import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd())

	const BASE_URL = env.VITE_SPORTMONKS_API_BASE_URL

	return {
		plugins: [react()],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
		},
		server: {
			proxy: {
				'/api': {
					target: BASE_URL,
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, ''),
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					configure: (proxy, _options) => {
						proxy.on('proxyReq', (proxyReq, _req, _res) => {
							const url = new URL(proxyReq.path, BASE_URL)
							url.searchParams.set('api_token', env.VITE_SPORTMONKS_API_KEY)
							proxyReq.path = url.pathname + url.search
						})
					},
				},
			},
		},
	}
})
