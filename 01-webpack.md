## 基于 Webpack 进行开发

### install

	npm install webpack@1.12.14 -g // global
	npm install webpack@1.12.14 --save-dev // dev

### start

```
// touch webpack.config.js
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// 配置入口文件
	entry : path.join(__dirname, 'index'),
	// 配置打包位置
	output : {
		path : __dirname,
		filename : 'bundle.js'
	},
	// 配置资源加载器
	module : {
		loaders: [
			{
				// 匹配资源类型的对应加载器
				test : /\.css4/,
				loaders : ['style-loader', 'css-loader']
			}
		]
	},
	// 配置插件的使用
	plugins : [
		new HtmlWebpackPlugin({
			title : 'Using Plugin'
		})
	]
};
```
