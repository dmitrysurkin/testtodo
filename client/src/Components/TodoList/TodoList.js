/* Библиотеки */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/* Store */
import { store } from '../../Store/store'

/* Action creator */
import { getTodos } from '../../Actions/index'

/* Стили и компоненты */
import useStyles from './style'
import TodoItem from '../TodoItem/TodoItem'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'
import Spinner from '../Spinner/Spinner'

const TodoList = () => {
	const classes = useStyles()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getTodos())
	}, [])

	const todos = useSelector(state => state.todo.todos)
	const error = useSelector(state => state.todo.error)
	const isLoading = useSelector(state => state.todo.isLoading)

	if (isLoading) {
		return (
			<div className={classes.todo__list}>
				<div className={classes.todo__spinner}>
					<Spinner />
				</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className={classes.todo__list}>
				<div className={classes.todo__error}>
					<ErrorIndicator message={error} />
				</div>
			</div>
		)
	}

	return (
		<div className={classes.todo__list}>
			<h3 className={classes.todo__title}>Ваши задачи:</h3>
			<div>
				{
					todos.map(todo => <div key={todo.id}>
										<TodoItem todo={todo} />
									</div>)
				}
			</div>
		</div>
	)
}

export default TodoList