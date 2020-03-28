/* Библиотеки */
import React from 'react'

/* Стили и компоненты */
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'

export default class ErrorBoundry extends React.Component {
	state = {
		hasError: false
	}

	componentWillCatch() {
		this.setState({hasError: true})
	}

	render() {
		if (this.state.hasError) {
			return <ErrorIndicator message={'Упс, что то пошло не так!'}/>
		}

		return this.props.children
	}
}

