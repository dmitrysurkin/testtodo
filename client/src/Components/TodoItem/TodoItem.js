/* Библиотеки */
import React from 'react'
import { useDispatch } from 'react-redux'

/* Action creator */
import { changeTodo, deleteTodo } from '../../Actions/index'

/* Стили и компоненты */
import useStyles from './style'

const TodoItem = ({ todo }) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	return (
		<div className={classes.todo__item}>
			<div>
				<button className={classes.todo__change} onClick={() => { dispatch(changeTodo(todo.id, +1)) }}>+</button>
				<span className={classes.todo__priority}>Приоритет: {todo.priority}</span>
				<button className={classes.todo__change} onClick={() => { dispatch(changeTodo(todo.id, -1)) }}>-</button>
			</div>
			<div>
				<span className={classes.todo__title}>{todo.title}</span>
				<button className={classes.todo__button} onClick={() => { dispatch(deleteTodo(todo.id)) }} >Удалить</button>
			</div>
			<div>
				<p>Исполнитель: {todo.executor}</p>
			</div>
		</div>
	)
}

export default TodoItem