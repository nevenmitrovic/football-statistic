import {
	MutationCache,
	QueryCache,
	QueryClient,
	type QueryClientConfig,
} from '@tanstack/react-query'
import { toast } from 'react-toastify'

const LOAD_ID = 'react-query-toast-loading'

function createTitle(errorMsg: string, actionType: 'query' | 'mutation') {
	const action = actionType === 'query' ? 'fetch' : 'update'
	return `could not ${action} data: ${errorMsg ?? 'error connecting to server'}`
}

function errorHandler(title: string) {
	const id = 'react-query-error'

	if (!toast.isActive(id)) {
		toast.error(title, { toastId: id })
	}
}

export const queryClientOptions: QueryClientConfig = {
	defaultOptions: {
		queries: {
			staleTime: 600000, // 10min
			gcTime: 900000, // 15min
			refetchOnWindowFocus: false,
		},
	},
	queryCache: new QueryCache({
		onError: (error) => {
			toast.dismiss(LOAD_ID)
			const title = createTitle(error.message, 'query')
			errorHandler(title)
		},
	}),
	mutationCache: new MutationCache({
		onError: (error) => {
			toast.dismiss(LOAD_ID)
			const title = createTitle(error.message, 'mutation')
			errorHandler(title)
		},
	}),
}

export const queryClient = new QueryClient(queryClientOptions)
