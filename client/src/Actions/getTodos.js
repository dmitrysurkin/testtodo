/* Api */
import Api from '../Api/Api'

const api = new Api()

export const getTodos = () => dispatch => {
	dispatch({
		type: 'GET_TODOS_REQUEST'
	})

	api.getTodos()
		.then(res => dispatch({	type: 'GET_TODOS_SUCCESS', payload: res	}))
		.catch(() => dispatch({	type: 'GET_TODOS_FAILED', payload: 'Не удалось получить задачи, попробуйте снова' }))
}