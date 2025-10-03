import { QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { queryClient } from '@/react-query/queryClient'
import AppRouter from './router/AppRouter'

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AppRouter />

			<ToastContainer />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default App
