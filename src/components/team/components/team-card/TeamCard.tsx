import './team-card.scss'
import type { Team } from '../../types'
import Button from '@/components/common/button/Button'

const TeamCard = ({ logo, name, code, country, founded }: Team) => {
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
					<Button type='button' text='View details' onChange={() => {}} />
				</div>
			</div>
		</div>
	)
}

export default TeamCard
