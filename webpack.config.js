var webpack = require('webpack');

var webpack = require('webpack');

module.exports = {
	entry: "./client/index.jsx",
	output: {
		path: __dirname + '/client/static/',
		filename: "index.js"
	},

	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.js/, loader: "jsx-loader"}
		]
	}
};
