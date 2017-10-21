import React from 'react'
import Header from './Header'
import Main from './Main'
import 'semantic-ui-css/semantic.min.css'

export default class App extends React.Component {

	render() {
		return (
			<div className="App">
				<Header />
				<Main />
			</div>
		)
	}
}
