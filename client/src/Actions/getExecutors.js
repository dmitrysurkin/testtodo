/* Api */
import Api from '../Api/Api'

const api = new Api()

export const getExecutors = () => dispatch => {
	dispatch({
		type: 'GET_EXECUTORS_REQUEST'
	})

	api.getExecutors()
		.then(res => dispatch({	type: 'GET_EXECUTORS_SUCCESS', payload: res	}))
		.catch(() => dispatch({	type: 'GET_EXECUTORS_FAILED', payload: 'Не удалось загрузить исполнителей, попробуйте обновить страницу'}))
}
