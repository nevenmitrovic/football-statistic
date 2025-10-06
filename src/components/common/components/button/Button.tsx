import './button.scss'

interface Button {
	type: 'button' | 'submit'
	text: string
	onChange: () => void
}

const Button = ({ type, text, onChange }: Button) => {
	return (
		<button type={type} onChange={onChange} className='button'>
			{text}
		</button>
	)
}

export default Button
