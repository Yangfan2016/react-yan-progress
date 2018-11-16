const path = require('path');

module.exports = {
	mode: "production",
	entry: {
		"YanProgress": path.resolve(__dirname, './src/index.js')
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].min.js',
		publicPath: "./build/",
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', "@babel/preset-react"]
						}
					},
				],
				include: path.resolve(__dirname, "./src/"),
			},
			{

				test: /\.css$/,
				loader: "css-loader",
				include: path.resolve(__dirname, "./src/"),
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
};
