import './button.scss'

interface Button {
	type: 'button' | 'submit'
	text: string
	onClick: () => void
}

const Button = ({ type, text, onClick }: Button) => {
	return (
		<button type={type} onClick={onClick} className='button'>
			{text}
		</button>
	)
}

export default Button
