export interface ApiResponse<T, P> {
	get: string
	parameters: P
	errors: any[]
	results: number
	paging: Paging
	response: T[] | T
}
interface Paging {
	current: number
	total: number
}
