/* Библиотеки */
import {combineReducers} from 'redux'

/* Reducers */
import {todoReducer} from './todoReducer'
import {executorReducer} from './executorReducer'

export const rootReducer = combineReducers({
	todo: todoReducer,
	executor: executorReducer
})

