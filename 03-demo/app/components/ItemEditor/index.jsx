/*
 * @file component ItemEditor
 */

// 1. 加载依赖
// import './style.scss';
import React from 'react';
import { PropTypes } from 'prop-types';

// 2. 定义属性验证
const propTypes = {
  item: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

// 3. 定义组件 : 无状态组件
class ItemEditor extends React.Component {

	render() {
		const {onSave, onCancel} = this.props;
		const item = this.props.item || {
			title: '',
			content: '',
		};
		let saveText = item.id ? '保存' : '创建';
		let save = () => {
			onSave({
				...item,
				title: this.refs.title.value,
				content: this.refs.content.value,
			});
		}
		return (
			<div className="col-md-8 item-show-layer-component">
				<div className="control-area">
					<button onClick={save} className="btn btn-success">{saveText}</button>
					<button onClick={onCancel} className="btn btn-danger">取消</button>
				</div>
			</div>
			<div className="edit-area">
				<input ref="title" placeholder="请填写标题" defaultValue={item.title} type="text" />
				<textarea ref="content" placeholder="请填写内容" defaultValue={item.content} />
			</div>
		);
	}
}

// 4. 添加属性验证
CreateBar.propTypes = propTypes;

// 5. 导出组件
export default ItemEditor;
