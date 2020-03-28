/* Библиотеки */
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	todo__list: {
		display: 'flex',
		flexDirection: 'column',
		padding: 30,
		backgroundColor: 'white',
		border: '1px solid #d5d5d5'
	}, 

	todo__title: {
		margin: 0,
		marginBottom: 20,
		textAlign: 'center'
	},

	todo__error: {
		display: 'flex',
		justifyContent: 'center',
		color: 'red'
	},

	todo__spinner: {
		display: 'flex',
		justifyContent: 'center',
	}
})

export default useStyles