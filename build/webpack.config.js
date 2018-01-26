const path = require("path")

const WebpackConf = {

	entry: './src/toolib.js',
	output: {
	    path: path.resolve(__dirname,'../dist'),
	    filename: '[name].js'
	},
	module:{
		loaders:[{
			test:"/\.js$/",
			exclude:/node_modules/,
			loader:'babel-loader'
		}]
	}
};

module.exports = WebpackConf