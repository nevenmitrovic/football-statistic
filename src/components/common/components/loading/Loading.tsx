import { ClipLoader } from 'react-spinners'

import './loading.scss'

const Loading = () => {
	return (
		<div className='loadingContainer'>
			<ClipLoader color='yellow' size={30} />
		</div>
	)
}

export default Loading
