/* Библиотеки */
import React from 'react'

const ErrorIndicator = (props) => {
	const { message } = props

	return (
		<p>Ошибка: {message}</p>
	)
}

export default ErrorIndicator

