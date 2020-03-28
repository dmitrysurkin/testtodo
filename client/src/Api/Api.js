/* Библиотеки */
import axios from 'axios'
import qs from 'qs'

export default class Api {
	_baseUrl = 'http://localhost:9000/testAPI'

	// Получить исполнителей
	getExecutors = async () => {
		const res = await axios.get(`${this._baseUrl}/executor`)

		return res.data
	}

	// Получить список задач
	getTodos = async () => {
		const res = await axios.get(`${this._baseUrl}/todos`)

		return res.data
	}

	// Добавить задачу (массив с задачами будет отсортирован на сервере)
	addTodo = async (todo) => {
		await axios({
			method: 'POST',
			url: `${this._baseUrl}/todos`,
			data: qs.stringify(todo),
		})
	}

	// Изменить приоритет задачи (массив с задачами будет отсортирован на сервере)
	changeTodo = async (id, count) => {
		await axios({
			method: 'PUT',
			url: `${this._baseUrl}/todos/${id}`,
			data: qs.stringify({ priority: count }),
		})
	}

	// Удалить задачу
	deleteTodo = async (id) => {
		await axios({
			method: 'DELETE',
			url: `${this._baseUrl}/todos/${id}`,
		})
	}
}