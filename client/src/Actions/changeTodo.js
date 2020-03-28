/* Action creator */
import { getTodos } from './index'

/* Api */
import Api from '../Api/Api'

const api = new Api();

export const changeTodo = (id, count) => dispatch => {
	dispatch({ type: 'CHANGE_TODO_REQUEST' })

	api.changeTodo(id, count)
		.then(() => dispatch({ type: 'CHANGE_TODO_SUCCESS' }))
		.catch(() => dispatch({ type: 'CHANGE_TODO_FAILED', payload: 'Не удалось изменить приоритет, попробуйте снова' }))
		.then(() => dispatch(getTodos()))
}