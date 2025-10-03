import { lazy } from 'react'
import { Route, Routes } from 'react-router'

const Dashboard = lazy(() => import('@/components/dashboard/Dashboard'))

const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Dashboard />} />
		</Routes>
	)
}

export default AppRouter
