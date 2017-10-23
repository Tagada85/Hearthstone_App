import React from 'react'
import { Menu } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const CardsTabs = props => {
	return (
		<Menu>
			<Menu.Item
				name="Druid"
				active={props.activeTab === 'Druid'}
				onClick={props.handleMenuClick}>
				Druid
			</Menu.Item>
			<Menu.Item
				name="Priest"
				active={props.activeTab === 'Priest'}
				onClick={props.handleMenuClick}>
				Priest
			</Menu.Item>
			<Menu.Item
				name="Mage"
				active={props.activeTab === 'Mage'}
				onClick={props.handleMenuClick}>
				Mage
			</Menu.Item>
			<Menu.Item
				name="Warlock"
				active={props.activeTab === 'Warlock'}
				onClick={props.handleMenuClick}>
				Warlock
			</Menu.Item>
			<Menu.Item
				name="Warrior"
				active={props.activeTab === 'Warrior'}
				onClick={props.handleMenuClick}>
				Warrior
			</Menu.Item>
			<Menu.Item
				name="Rogue"
				active={props.activeTab === 'Rogue'}
				onClick={props.handleMenuClick}>
				Rogue
			</Menu.Item>
			<Menu.Item
				name="Shaman"
				active={props.activeTab === 'Shaman'}
				onClick={props.handleMenuClick}>
				Shaman
			</Menu.Item>
			<Menu.Item
				name="Paladin"
				active={props.activeTab === 'Paladin'}
				onClick={props.handleMenuClick}>
				Paladin
			</Menu.Item>
			<Menu.Item
				name="Hunter"
				active={props.activeTab === 'Hunter'}
				onClick={props.handleMenuClick}>
				Hunter
			</Menu.Item>
			<Menu.Item
				name="Common"
				active={props.activeTab === 'Common'}
				onClick={props.handleMenuClick}>
				Common
			</Menu.Item>
		</Menu>
	)
}

CardsTabs.propTypes = {
	activeTab: PropTypes.string,
	handleMenuClick: PropTypes.func
}

export default CardsTabs
