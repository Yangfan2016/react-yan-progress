const path = require('path');

module.exports = {
	mode: "production",
	entry: {
		"YanProgress": path.resolve(__dirname, './src/index.tsx')
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].min.js',
		publicPath: "./build/",
		libraryTarget: 'umd',
		library: 'YanProgress',
		libraryExport: 'default',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', "@babel/preset-react"]
						}
					},
					{
						loader: 'ts-loader',
					}
				],
				include: path.resolve(__dirname, "./src/"),
			},
			{

				test: /\.css$/,
				loader: "style-loader!css-loader?modules&localIdentName=[hash:8]", // http://www.ruanyifeng.com/blog/2016/06/css_modules.html
				include: path.resolve(__dirname, "./src/"),
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	externals: {
		react: 'react'
	}
};
