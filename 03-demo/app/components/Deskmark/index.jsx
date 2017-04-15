/*
* @file component Deskmark
*/
import React from 'react';
import uuid from 'uuid';
import CreateBar from '../CreateBar';
import ItemList from '../ItemList';
import ItemEditor from '../ItemEditor';
import ItemPreview from '../ItemPreview';
// import './style.scss';

class Deskmark extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [],
			selectId: null,
			editing: false,
		};
	}
	saveItem(item) {
		let items = this.state.items;
		item.id = uuid.v4();
		item.time = new Date().getTime();
	}
	render() {
		const items =  [
			// {}
		];

		return (
			<section className="deskmark-component">
				<div className="container">
					<div className="row">
						<CreateBar />
						<ItemList items={items} />
						<ItemEditor item={currentItem} />
						<ItemPreview item={currentItem} />
					</div>
				</div>
			<section/>
		);
	}
}
