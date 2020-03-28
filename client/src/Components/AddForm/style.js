/* Библиотеки */
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	form__wrap: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		padding: 30,
		backgroundColor: 'white',
		border: '1px solid #d5d5d5'
	},

	form__label: {
		display: 'block',
		marginBottom: 10
	},

	form__item: {
		margin: '0px 40px'
	},

	form__input: {
		minHeight: 38,
		paddingLeft: 10,
		marginBottom: 10,
		border: '2px solid #cccccc',
		borderRadius: 10,
		backgroundColor: 'white',
		color: 'black',
		
		'&::placeholder' : {
			color: '#808080'
		},

		'&:hover': {
			opacity: 0.8,
			cursor: 'pointer'
		},

		'&:focus': {
			outline: 'none',
			boxShadow: '0 0 0 2px #2684ff'
		}
	},

	form__input_error: {
		borderColor: 'red'
	},

	form__input_success: {
		borderColor: 'green'
	},

	form__button: {
		border: 'none',
		color: 'white',
		borderRadius: 10,
		padding: 20,
		backgroundColor: '#00a8b0'
	},

	form__error: {
		display: 'block',
		position: 'relative',
		padding: '10px 28px',
		fontSize: 10,
		backgroundColor: 'tomato',
		color: '#ffffff',
		borderRadius: 5,

		'&::before': {
			content: '""',
			display: 'block',
			position: 'absolute',
			width: 12,
			height: 12,
			top: '50%',
			transform: 'translateY(-50%)',
			left: 8,
			background: `url(Image/error.svg)`
		}
	},

	form__errorIndicator: {
		color: 'red',
		display: 'flex',
		justifyContent: 'center'
	}
})

export default useStyles