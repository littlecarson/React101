# React + Webpack 开发环境


## 安装配置 Babel


> babel-presets-es2015 用来支持 ES6 语法 (let, const, ()=>)
> babel-presets-react 专门用于支持 React 的语法包（React ES6 classes, JSX)
> react-hot-loader 用于支持代码的热加载


	yarn add babel-core babel-loader --dev # babel core
	yarn add babel-presets-es2015 babel-presets-react --dev # babel presets for es2015, react
	yarn add react-hot-loader --dev # babel plugin for react hot module loader

	touch .babelrc
	{
    	"presets": [
    		["es2015", {"modules": false}],
    		"react"
    	],
    	"plugins": [
    		"transform-object-rest-spread",
    		"react-hot-loader/babel"
    	]
	}


## 安装配置 ESLint

	yarn add eslint eslint-loader --save-dev
	yarn add eslint-config-airbnb --save-dev

	touch .eslintrc
	{
		"extends": "airbnb",
		"rules": {
			"comma-dangle": ["error", "never"]
		}
	}


## 配置 Webpack

	yarn add webpack webpack-dev-server --dev
	yarn add html-webpack-plugin --dev


