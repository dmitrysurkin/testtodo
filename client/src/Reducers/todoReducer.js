const initialState = {
	todos: [],
	isLoading: false,
	error: ''
}

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_TODOS_REQUEST':
		case 'ADD_TODO_REQUEST':
		case 'CHANGE_TODO_REQUEST':
		case 'DELETE_TODO_REQUEST':
			return {...state, isLoading: true}

		case 'GET_TODOS_FAILED':
		case 'ADD_TODO_FAILED':
		case 'CHANGE_TODO_FAILED':
		case 'DELETE_TODO_FAILED':
			return {...state, isLoading: false, error: action.payload}

		case 'GET_TODOS_SUCCESS':
			return { ...state, isLoading: false, todos: action.payload }

		case 'ADD_TODO_SUCCESS':
			return { ...state, isLoading: false }

		case 'CHANGE_TODO_SUCCESS':
			return { ...state, isLoading: false }

		case 'DELETE_TODO_SUCCESS':
			return { ...state, isLoading: false }
	
		default:
			return state
	}
}


