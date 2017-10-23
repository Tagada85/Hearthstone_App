import React from 'react'
import 'semantic-ui-css/semantic.min.css'

import PropTypes from 'prop-types'

export default class App extends React.Component {
	render() {
		return <div className="App">{this.props.content}</div>
	}
}

App.propTypes = {
	content: PropTypes.node
}
