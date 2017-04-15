/*
* @file component ItemList
*/

// 1. 加载依赖
import React from 'react';
import { PropTypes } from 'prop-types';
import ListItem from '../ListItem';

// 2. 定义属性验证
const propTypes = {
	items: PropTypes.array.isRequired,
};

// 3. 定义组件 : 无状态组件
function ItemList({items}) {

	items = items.map(
		item => (
			<listItem item={item} key={item.id} />
		)
	);

	return (
		<div className="list-component col-md-4 list-group">
			{items}
		</div>
	);
}

// 4. 添加属性验证
ListItem.propTypes = propTypes;

// 5. 导出组件
export default ItemList;
