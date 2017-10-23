// Client entry point, imports all client code
import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import '/imports/startup/client'

import App from '/imports/ui/layouts/App'

Meteor.startup(() => {
	render(<App />, document.getElementById('root'))
})