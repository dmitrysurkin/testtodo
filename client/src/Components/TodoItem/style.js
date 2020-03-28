/* Библиотеки */
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	todo__item: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center', 
		padding: '20px 20px',
		backgroundColor: 'white',
		border: '1px solid #d5d5d5',
	},

	todo__title: {
		margin: 0,
		marginBottom: 10,
		marginRight: 10,
	},

	todo__change: {
		border: 'none',
		color: 'white',
		borderRadius: 50,
		backgroundColor: '#00a8b0',
		cursor: 'pointer'
	},

	todo__priority: {
		padding: '0 5px'
	},

	todo__button: {
		background: 'none',
		color: '#00a8b0',
		borderRadius: 10,
		padding: 10,
		border: '2px solid #00a8b0',
		cursor: 'pointer'
	}
})

export default useStyles