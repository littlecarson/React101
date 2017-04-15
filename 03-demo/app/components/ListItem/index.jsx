/*
* @file component ListItem
*/

// 1. 加载依赖
import React from 'react';
import { PropTypes } from 'prop-types';

// 2. 定义属性验证
const propTypes = {
	item: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired,
};

// 3. 定义组件 : 无状态组件
function ListItem({item}) {
	return (
		<a href="#" className="list-group-item item-component">
			<span className="label label-default label-pill pull-xs-right">
				{item.time}
			</span>
			{item.title}
		</a>
	);
}

// 4. 添加属性验证
ListItem.propTypes = propTypes;

// 5. 导出组件
export default ListItem;
