import { useNavigate } from 'react-router-dom'

import './team-card.scss'
import type { Team } from '../../types'
import Button from '@/components/common/components/button/Button'

const TeamCard = ({ logo, name, code, country, founded, id }: Team) => {
	const navigate = useNavigate()

	const handleNavigate = () => {
		navigate(`/team/${id}`)
	}

	return (
		<div className='teamCard'>
			<img src={logo} alt='team logo' />
			<div className='clubInfo'>
				<p>
					<b>Name:</b> {name}
				</p>
				<p>
					<b>Code:</b> {code}
				</p>
				<p>
					<b>Country:</b> {country}
				</p>
				<p>
					<b>Founded:</b> {founded}
				</p>
				<div className='details'>
					<Button type='button' text='View details' onClick={handleNavigate} />
				</div>
			</div>
		</div>
	)
}

export default TeamCard
