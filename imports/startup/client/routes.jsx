import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount } from 'react-mounter'
import React from 'react'

import App from '/imports/ui/layouts/App'
import Home from '/imports/ui/pages/Home'
import Catalog from '/imports/ui/pages/Catalog'

FlowRouter.route('/', {
	name: 'Home',
	action(){
		mount( App, {
			content: <Home />
		})
	}
})

FlowRouter.route('/catalog', {
	name: 'Catalog',
	action(){
		mount( Catalog, {
			content: <Catalog />
		})
	}
})