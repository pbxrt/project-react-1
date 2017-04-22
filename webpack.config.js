var path = require('path');
// var webpack = require('webpack')
// var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname,'dist')
	}
};