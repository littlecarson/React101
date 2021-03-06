/*
* @file component ItemPreview
*/

// 1. 加载依赖
import './style.scss';
import React from 'react';
import { PropTypes } from 'prop-types';
import marked from 'marked';

// 2. 定义属性验证
const propTypes = {
	item: PropTypes.object,
	onEdit: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
};

// 3. 定义组件 : 无状态组件
function ItemPreview({item}) {
	// 3.1 如果没有传入Item 返回一些静态提示
	if (!item || !item.id) {
		return (
			<div className="col-md-8 item-show-layer-component">
				<div className="no-select"> 没有选择文档 </div>
			</div>
		);
	}
	// 3.2 将 markdown 转换成 HTML
	let content = marked(item.content);
	return (
		<div className="col-md-8 item-show-layer-component">
			<div className="control-area">
				<button
					className="btn btn-primary"
					onClick={()=>onEdit(item.id)}
					>编辑</button>
				<button
					className="btn btn-danger"
					onClick={()=>onDelete(item.id)}
					>删除</button>
			</div>
			<h2> {item.title} </h2>
			<div className="item-text">
				<div dangerouslySetInnerHTML={{__html: content}} />
			</div>
		</div>
	);
}

// 4. 添加属性验证
ItemPreview.propTypes = propTypes;

// 5. 导出组件
export default ItemPreview;
