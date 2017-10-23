import React from 'react'
import {Grid, Button} from 'semantic-ui-react' 

import PropTypes from 'prop-types'
export default class Cards extends React.Component {
	constructor( props ){
		super( props )
		this.state = {
			ACTIVE_SETS: ['Basic', 'Classic', 'Knights of the Frozen Throne', 'Journey to Un\'Goro', 'Mean Streets of Gadgetzan', 'Whisper of the Old Gods', 'One Night in Karazhan']
		}
	}
	
	componentWillMount(){
		Meteor.callPromise('getAllCards')
			.then( cards => {
				this.registerCards( cards )
			})
			.catch( err => {
				console.log(err)
			})
	}

	registerCards = cards => {
		let druidCards = [], priestCards = [], shamanCards = [], hunterCards = [], commonCards = [], paladinCards = [], rogueCards = [], warriorCards = [], warlockCards = [], mageCards = []
		for( let set in cards ){
			if( this.state.ACTIVE_SETS.includes( set )){
				cards[set].map( card => {
					switch(card.playerClass){
					case 'Druid':
						druidCards.push(card)
						break
					case 'Priest':
						priestCards.push(card)
						break
					case 'Shaman':
						shamanCards.push(card)
						break
					case 'Hunter':
						hunterCards.push(card)
						break
					case 'Neutral':
						commonCards.push(card)
						break
					case 'Paladin':
						paladinCards.push(card)
						break
					case 'Rogue':
						rogueCards.push(card)
						break
					case 'Warrior':
						warriorCards.push(card)
						break
					case 'Warlock':
						warlockCards.push(card)
						break
					case 'Mage':
						mageCards.push(card)
						break
					default:
						console.log('Type not handled,', card.playerClass)
					}
				})
			}
		}

		this.setState({
			Druid: druidCards,
			Mage: mageCards,
			Hunter: hunterCards,
			Warlock: warlockCards,
			Warrior: warriorCards,
			Rogue: rogueCards,
			Paladin: paladinCards,
			Common: commonCards,
			Shaman: shamanCards,
			Priest: priestCards,
			ready: true
		})
	}
	render(){
		return (
			<div>
				<Grid.Column>
					<Button
						onClick={this.props.previousPage}
						content=''
						icon='left arrow'/>
				</Grid.Column>
				<Grid.Column
					largeScreen={10}>
				</Grid.Column>
				<Grid.Column>
					<Button
						onClick={this.props.nextPage}
						content=''
						icon='right arrow' />
				</Grid.Column>
			</div>
		)
	}
}

Cards.propTypes = {
	nextPage: PropTypes.func,
	previousPage: PropTypes.func
}
