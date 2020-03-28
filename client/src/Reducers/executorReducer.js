const initialState = {
	executors: [],
	isLoading: false,
	error: ''
}

export const executorReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_EXECUTORS_REQUEST':
			return { ...state, isLoading: true }
		case 'GET_EXECUTORS_SUCCESS':
			return { ...state, isLoading: false, executors: action.payload }
		case 'GET_EXECUTORS_FAILED':
			return { ...state, isLoading: false, error: action.payload }
		default:
			return state
	}
}

