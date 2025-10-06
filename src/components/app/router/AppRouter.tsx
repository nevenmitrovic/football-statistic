import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'

import Loading from '@/components/common/components/loading/Loading'

const Dashboard = lazy(() => import('@/components/app/Dashboard'))
const TeamDetails = lazy(() => import('@/components/team/components/team-details/TeamDetails'))

const AppRouter = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route index element={<Dashboard />} />
				<Route path='/team/:teamId' element={<TeamDetails />} />
			</Routes>
		</Suspense>
	)
}

export default AppRouter
