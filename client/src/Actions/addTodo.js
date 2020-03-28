/* Action creator */
import { getTodos } from './index'

/* Api */
import Api from '../Api/Api'

const api = new Api();

export const addTodo = (todo) => dispatch => {
	dispatch({ type: 'ADD_TODO_REQUEST' })

	api.addTodo(todo)
		.then(() => dispatch({ type: 'ADD_TODO_SUCCESS' }))
		.catch(() => dispatch({ type: 'ADD_TODO_FAILED', payload: 'Не удалось добавить задачу, попробуйте снова' }))
		.then(() => dispatch(getTodos()))
}



