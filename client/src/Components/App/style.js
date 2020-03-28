/* Библиотеки */
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	'@global': {
		body: {
			margin: 0,
			boxSizing: 'border-box',
			fontFamily: 'Arial, Heltevica, sans-serif',
			backgroundColor: '#f5f5f5'
		},
		html: {
			boxSizing: 'border-box'
		}
	},
	
	container: {
		width: 1170,
		margin: '0 auto'
	},

	header: {
		paddingTop: 30,
		marginBottom: 50
	},

	form: {
		marginBottom: 50
	}
})

export default useStyles