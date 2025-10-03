import { QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { queryClient } from '../../react-query/queryClient'

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div>APP</div>

			<ToastContainer />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default App
