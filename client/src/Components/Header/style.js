/* Библиотеки */
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	header: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column'
	},

	header__title: {
		margin: 0,
		marginBottom: 10
	},

	header__desc: {
		margin: 0
	}
})

export default useStyles