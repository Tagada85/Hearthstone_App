import React from 'react'
import Header from '/imports/ui/components/Header'
import Cards from '/imports/ui/components/Cards'
import Deck from '/imports/ui/components/Deck'
import CardsTabs from '/imports/ui/components/CardsTabs'

import { Grid } from 'semantic-ui-react'

export default class Catalog extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			activeTab: 'Druid'
		}
	}

	handleMenuClick = (e, { name }) => {
		this.setState({
			activeTab: name
		})
	}
	render() {
		return (
			<div>
				<Header />
				<CardsTabs
					activeTab={this.state.activeTab}
					handleMenuClick={this.handleMenuClick}
				/>
				<Grid centered={true}>
					<Cards />
					<Deck />
				</Grid>
			</div>
		)
	}
}
