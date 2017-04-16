/*
 * @file component CreateBar
 */

// 1. 加载依赖
import './style.scss';
import React from 'react';
import { PropTypes } from 'prop-types';

// 2. 定义属性验证
const propTypes = {
  onClick: PropTypes.func.isRequired,
};

// 3. 定义组件 : 无状态组件
function CreateBar({ onClick }) {
  return (
    <a href="#" onClick={() => {onClick();}} className="list-group-item create-bar-component">
      + 创建新的文档
    </a>
  );
}

// 4. 添加属性验证
CreateBar.propTypes = propTypes;

// 5. 导出组件
export default CreateBar;
