/* Библиотеки */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/* Store */
import { store } from './Store/store'

/* Стили и компоненты */
import App from './Components/App/App';
import ErrorBoundry from './Components/ErrorBoundry/ErrorBoundry';

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<App />
		</ErrorBoundry>
	</Provider>
	, document.getElementById('root'))



