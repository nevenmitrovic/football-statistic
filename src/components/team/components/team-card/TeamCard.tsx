import './team-card.scss'
import type { TeamResponse } from '../../types'

const TeamCard = ({ team, venue }: TeamResponse) => {
	return (
		<div className='teamCard'>
			<div className='team'>
				<img src={team.logo} alt='team logo' />
				<div>
					<p>Name: {team.name}</p>
					<p>Code: {team.code}</p>
					<p>Country: {team.country}</p>
					<p>Founded: {team.founded}</p>
				</div>
			</div>
			<div className='venue'>
				<img src={venue.image} alt='team logo' />
				<div>
					<p>Name: {venue.name}</p>
					<p>Address: {venue.address}</p>
					<p>City: {venue.city}</p>
					<p>Capacity: {venue.capacity}</p>
					<p>Surface: {venue.surface}</p>
				</div>
			</div>
		</div>
	)
}

export default TeamCard
