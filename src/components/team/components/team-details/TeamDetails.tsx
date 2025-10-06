import { useParams } from 'react-router-dom'

import './team-details.scss'
import type { ApiResponse } from '@/components/common/types/globalTypes'
import type { TeamStatisticParams, TeamStatisticResponse } from '../../types'

const mockTeamStatistic: ApiResponse<TeamStatisticResponse, TeamStatisticParams> = {
	get: 'teams/statistics',
	parameters: {
		league: '286',
		season: '2025',
		team: '573',
	},
	errors: [],
	results: 11,
	paging: {
		current: 1,
		total: 1,
	},
	response: {
		league: {
			id: 286,
			name: 'Super Liga',
			country: 'Serbia',
			logo: 'https://media.api-sports.io/football/leagues/286.png',
			flag: 'https://media.api-sports.io/flags/rs.svg',
			season: 2025,
		},
		team: {
			id: 573,
			name: 'FK Partizan',
			logo: 'https://media.api-sports.io/football/teams/573.png',
		},
		form: 'WWWWDWWLWW',
		fixtures: {
			played: {
				home: 5,
				away: 5,
				total: 10,
			},
			wins: {
				home: 4,
				away: 4,
				total: 8,
			},
			draws: {
				home: 0,
				away: 1,
				total: 1,
			},
			loses: {
				home: 1,
				away: 0,
				total: 1,
			},
		},
		goals: {
			for: {
				total: {
					home: 11,
					away: 17,
					total: 28,
				},
				average: {
					home: '2.2',
					away: '3.4',
					total: '2.8',
				},
				minute: {
					'0-15': {
						total: null,
						percentage: null,
					},
					'16-30': {
						total: 5,
						percentage: '17.86%',
					},
					'31-45': {
						total: 6,
						percentage: '21.43%',
					},
					'46-60': {
						total: 3,
						percentage: '10.71%',
					},
					'61-75': {
						total: 5,
						percentage: '17.86%',
					},
					'76-90': {
						total: 9,
						percentage: '32.14%',
					},
					'91-105': {
						total: null,
						percentage: null,
					},
					'106-120': {
						total: null,
						percentage: null,
					},
				},
				under_over: {
					'0.5': {
						over: 10,
						under: 0,
					},
					'1.5': {
						over: 7,
						under: 3,
					},
					'2.5': {
						over: 3,
						under: 7,
					},
					'3.5': {
						over: 3,
						under: 7,
					},
					'4.5': {
						over: 3,
						under: 7,
					},
				},
			},
			against: {
				total: {
					home: 4,
					away: 6,
					total: 10,
				},
				average: {
					home: '0.8',
					away: '1.2',
					total: '1.0',
				},
				minute: {
					'0-15': {
						total: null,
						percentage: null,
					},
					'16-30': {
						total: 1,
						percentage: '10.00%',
					},
					'31-45': {
						total: 2,
						percentage: '20.00%',
					},
					'46-60': {
						total: 4,
						percentage: '40.00%',
					},
					'61-75': {
						total: 2,
						percentage: '20.00%',
					},
					'76-90': {
						total: 1,
						percentage: '10.00%',
					},
					'91-105': {
						total: null,
						percentage: null,
					},
					'106-120': {
						total: null,
						percentage: null,
					},
				},
				under_over: {
					'0.5': {
						over: 6,
						under: 4,
					},
					'1.5': {
						over: 4,
						under: 6,
					},
					'2.5': {
						over: 0,
						under: 10,
					},
					'3.5': {
						over: 0,
						under: 10,
					},
					'4.5': {
						over: 0,
						under: 10,
					},
				},
			},
		},
		biggest: {
			streak: {
				wins: 4,
				draws: 1,
				loses: 1,
			},
			wins: {
				home: '5-1',
				away: '2-7',
			},
			loses: {
				home: '1-2',
				away: null,
			},
			goals: {
				for: {
					home: 5,
					away: 7,
				},
				against: {
					home: 2,
					away: 2,
				},
			},
		},
		clean_sheet: {
			home: 2,
			away: 2,
			total: 4,
		},
		failed_to_score: {
			home: 0,
			away: 0,
			total: 0,
		},
		penalty: {
			scored: {
				total: 2,
				percentage: '100.00%',
			},
			missed: {
				total: 0,
				percentage: '0%',
			},
			total: 2,
		},
		lineups: [
			{
				formation: '4-2-3-1',
				played: 5,
			},
			{
				formation: '4-1-4-1',
				played: 3,
			},
			{
				formation: '4-1-3-2',
				played: 2,
			},
		],
		cards: {
			yellow: {
				'0-15': {
					total: 1,
					percentage: '8.33%',
				},
				'16-30': {
					total: 1,
					percentage: '8.33%',
				},
				'31-45': {
					total: 1,
					percentage: '8.33%',
				},
				'46-60': {
					total: 2,
					percentage: '16.67%',
				},
				'61-75': {
					total: 2,
					percentage: '16.67%',
				},
				'76-90': {
					total: 3,
					percentage: '25.00%',
				},
				'91-105': {
					total: 2,
					percentage: '16.67%',
				},
				'106-120': {
					total: null,
					percentage: null,
				},
			},
			red: {
				'0-15': {
					total: null,
					percentage: null,
				},
				'16-30': {
					total: null,
					percentage: null,
				},
				'31-45': {
					total: null,
					percentage: null,
				},
				'46-60': {
					total: null,
					percentage: null,
				},
				'61-75': {
					total: null,
					percentage: null,
				},
				'76-90': {
					total: null,
					percentage: null,
				},
				'91-105': {
					total: null,
					percentage: null,
				},
				'106-120': {
					total: null,
					percentage: null,
				},
			},
		},
	},
}

const TeamDetails = () => {
	const { teamId } = useParams<{ teamId: string }>()

	return <div>Team Details {teamId}</div>
}

export default TeamDetails
