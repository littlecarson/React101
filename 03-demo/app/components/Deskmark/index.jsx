/*
* @file component Deskmark
*/

// 1. 导入依赖
import React from 'react';
import uuid from 'uuid';

import './style.scss';
import CreateBar from '../CreateBar';
import ItemList from '../ItemList';
import ItemEditor from '../ItemEditor';
import ItemPreview from '../ItemPreview';

// 2. 定义组件
class Deskmark extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			items: [],
			selectId: null,
			editing: false,
		};

		this.selectItem = this.selectItem.bind(this);
		this.saveItem = this.saveItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.createItem = this.createItem.bind(this);
		this.editItem = this.editItem.bind(this);
		this.cancelEdit = this.cancelEdit.bind(this);
	}

	// 从左侧列表选择一篇文章
	// 将selected 设置为文章的id，并且将 editing 状态置为 false
	selectItem(id) {
		if (id === this.state.selectedId) {
			return;
		}

		this.setState({
			selectedId: id,
			editing: false,
		});
	}

	saveItem(item) {
		// item 是编辑器返回的对象，里面应该包含标题和内容

		// 当前的 items state
		let items = this.state.items;

		// new item
		if (!item.id) {
			items = [...items, {
				...item,
				id: uuid.v4(),
				time: new Date().getTime(),
			}];
		} else {
			// existed item
			items = items.map(
				exist => (
					exist.id === item.id
					? {
						...exist,
						...item,
					}
					: exist
				)
			);
		}

		this.setState({
			items,
			selectedId: item.id,
			editing: false,
		});
	}

	deleteItem(id) {
		if (!id) {
			return;
		}
		this.setState({
			items: this.state.items.filter(
				result => result.id !== id
			),
		});
	}

	createItem() {
		this.setState({
			selectedId: null,
			editing: true,
		});
	}

	editItem(id) {
		this.setState({
			selectedId: id,
			editing: true
		});
	}

	cancelEdit() {
		this.setState({editing: false});
	}

	render() {
		const {items, selectedId, editing} = this.state;
		const selected = selectedId && items.find(item => item.id === selectedId);
		const mainPart = editing
			? (
				<ItemEditor
					item={selected}
					onSave={this.saveItem}
					onCancel={this.cancelEdit}
				/>
			)
			: (
				<ItemPreview
					item={selected}
					onEdit={this.editItem}
					onDelete={this.deleteItem}
				/>
			);

		return (
			<section className="deskmark-component">
				<nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
					<a className="navbar-brand" href="#">Deskmark App</a>
				</nav>
				<div className="container">
					<div className="row">
						<div className="col-md-4 list-group">
							<CreateBar onClick={this.createItem} />
							<ItemList
								items={this.state.items}
								onSelect={this.selectItem}
							/>
						</div>
						{mainPart}
					</div>
				</div>
			</section>
		);
	}
}

export default Deskmark;
