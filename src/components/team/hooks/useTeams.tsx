import axiosClient from '@/axios/axiosClient'
import type { TeamParams, TeamResponse } from '../types'
import type { ApiResponse } from '@/components/common/types/globalTypes'
import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '@/react-query/query-keys'

const PARAMS: TeamParams = { league: '286', season: '2025' }

async function getTeams(
	params: TeamParams = PARAMS
): Promise<ApiResponse<TeamResponse, TeamParams>> {
	try {
		const res = await axiosClient.get('/teams', {
			params,
		})
		console.log(res.data)
		return res.data
	} catch (error) {
		console.error(error)
		throw new Error(`Failed to fetch teams. Please try again.`)
	}
}

export function useTeams() {
	const { data: teams, isFetching } = useQuery<ApiResponse<TeamResponse, TeamParams>>({
		queryKey: [queryKeys.teams],
		queryFn: () => getTeams(),
	})
	console.log(teams)
	return { teams: teams?.response ?? [], isFetchingTeams: isFetching }
}
