/* Action creator */
import { getTodos } from './index'

/* Api */
import Api from '../Api/Api'

const api = new Api();

export const deleteTodo = (id) => dispatch => {
	dispatch({ type: 'DELETE_TODO_REQUEST' })

	api.deleteTodo(id)
		.then(() => dispatch({ type: 'DELETE_TODO_SUCCESS' }))
		.catch(() => dispatch({ type: 'DELETE_TODO_FAILED', payload: 'Не удалось удалить задачу, попробуйте снова' }))
		.then(() => dispatch(getTodos()))
}