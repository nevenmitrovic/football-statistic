export interface TeamResponse {
	team: Team
	venue: Venue
}
export interface Venue {
	id: number
	name: string
	address: string
	city: string
	capacity: number
	surface: string
	image: string
}
export interface Team {
	id: number
	name: string
	code: string | null
	country: string
	founded: number | null
	national: boolean
	logo: string
}
export interface TeamParams {
	league: string
	season: string
}
export interface TeamStatisticParams {
	league: string
	season: string
	team: string
}
export interface TeamStatisticResponse {
	league: {
		id: number
		name: string
		country: string
		logo: string
		flag: string
		season: number
	}
	team: {
		id: number
		name: string
		logo: string
	}
	form: string
	fixtures: {
		played: {
			home: number
			away: number
			total: number
		}
		wins: {
			home: number
			away: number
			total: number
		}
		draws: {
			home: number
			away: number
			total: number
		}
		loses: {
			home: number
			away: number
			total: number
		}
	}
	goals: {
		for: GoalStatistics
		against: GoalStatistics
	}
	biggest: {
		streak: {
			wins: number
			draws: number
			loses: number
		}
		wins: {
			home: string
			away: string
		}
		loses: {
			home: string | null
			away: string | null
		}
		goals: {
			for: {
				home: number
				away: number
			}
			against: {
				home: number
				away: number
			}
		}
	}
	clean_sheet: {
		home: number
		away: number
		total: number
	}
	failed_to_score: {
		home: number
		away: number
		total: number
	}
	penalty: {
		scored: {
			total: number
			percentage: string
		}
		missed: {
			total: number
			percentage: string
		}
		total: number
	}
	lineups: Array<{
		formation: string
		played: number
	}>
	cards: {
		yellow: CardMinuteStatistics
		red: CardMinuteStatistics
	}
}

interface GoalStatistics {
	total: {
		home: number
		away: number
		total: number
	}
	average: {
		home: string
		away: string
		total: string
	}
	minute: {
		'0-15': MinuteStatistic
		'16-30': MinuteStatistic
		'31-45': MinuteStatistic
		'46-60': MinuteStatistic
		'61-75': MinuteStatistic
		'76-90': MinuteStatistic
		'91-105': MinuteStatistic
		'106-120': MinuteStatistic
	}
	under_over: {
		'0.5': UnderOverStatistic
		'1.5': UnderOverStatistic
		'2.5': UnderOverStatistic
		'3.5': UnderOverStatistic
		'4.5': UnderOverStatistic
	}
}

interface MinuteStatistic {
	total: number | null
	percentage: string | null
}

interface UnderOverStatistic {
	over: number
	under: number
}

interface CardMinuteStatistics {
	'0-15': MinuteStatistic
	'16-30': MinuteStatistic
	'31-45': MinuteStatistic
	'46-60': MinuteStatistic
	'61-75': MinuteStatistic
	'76-90': MinuteStatistic
	'91-105': MinuteStatistic
	'106-120': MinuteStatistic
}
