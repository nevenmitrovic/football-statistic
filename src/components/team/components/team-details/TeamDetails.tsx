import { useParams } from 'react-router-dom'

import './team-details.scss'

const TeamDetails = () => {
	const { teamId } = useParams<{ teamId: string }>()

	return <div>Team Details {teamId}</div>
}

export default TeamDetails
