/* Библиотеки */
import React from 'react'

/* Стили и компоненты */
import useStyles from './style';
import Header from '../Header/Header'
import AddForm from '../AddForm/AddForm'
import TodoList from '../TodoList/TodoList'

const App = () => {
	const classes = useStyles()

	return (
		<div className={classes.container}>
			<div className={classes.header}>
				<Header />
			</div>
			<div className={classes.form}>
				<AddForm />
			</div>
			<TodoList />
		</div>
	)
}

export default App