var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// 一些常用的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {

	context: APP_PATH,

	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./app.jsx'
		// app: path.resolve(APP_PATH, 'app.jsx'),
	],
	output: {
		filename: 'bundle.js',
		path: BUILD_PATH,
		// publicPath: '/'
	},
	// 开启 dev source map
	devtool: 'inline-source-map',
	devServer: {
		hot: true,
		// contentBase: ROOT_PATH//
	},

	resolve: {
		extensions: ['.js', '.jsx']
	},

	module: {
		rules: [
			// 配置 preLoaders 将 eslint 添加进入
			// {
        		// test: /\.jsx$/,
	      		// enforce: "pre",
				// loader: "eslint-loader"
      		// },
			// 配置 loader 将 Babel 添加进去
			{
				test: /\.jsx?$/,
				loader: ["babel-loader"],
				include: APP_PATH
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loaser?modules']
			}
		]
	},

	// 配置插件
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: "My First React App"
		})
	]

};
