var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	// plugins: [commonsPlugin],

	entry: {
		index: './src/javascripts/index.js'
	},

	output: {
		path: './bin/',
		filename: '[name].bin.js'
	},

	module: {
		loaders: [
			{test: /\.js$/, loader: 'jsx-loader?harmony'},
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=[name].[ext]'},
			{test: /\.(woff)$/, loader: 'file-loader?name=[name].[ext]'}
		]
	},

	resolve: {
		root: __dirname + '/src',
		extensions: ['', 'js', 'json'],
		alias: {
			react: '../lib/react.js'
		}
	}
};
