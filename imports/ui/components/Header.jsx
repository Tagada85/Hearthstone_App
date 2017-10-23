import React from 'react'
import { Menu } from 'semantic-ui-react'
import { FlowRouter } from 'meteor/kadira:flow-router'

const Header = () => (
	<header>
		<Menu>
			<Menu.Item>
				<a href="" onClick={() => FlowRouter.go('/')}>
					Home
				</a>
			</Menu.Item>
			<Menu.Item>
				<a href="" onClick={() => FlowRouter.go('/catalog')}>
					Catalog
				</a>
			</Menu.Item>
		</Menu>
	</header>
)

export default Header
