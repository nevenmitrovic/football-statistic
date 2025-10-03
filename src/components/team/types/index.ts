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
