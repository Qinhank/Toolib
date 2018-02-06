const path = require("path");
const webpackMerge = require("webpack-merge")
const baseWebpackConf = require("./webpack.config")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackProdConf = webpackMerge(baseWebpackConf,{
	output:{
		path:path.resolve(__dirname,'../dist'),
		filename:'toolib.min.js',
		publicPath:'',
		// chunkFilename: '[name][hash].js'
	},
	plugins:[
		new UglifyJsPlugin({
	      uglifyOptions: {
	        compress: {
	          warnings: false
	        }
	      },
	      parallel: true
	    }),
		new HtmlWebpackPlugin({
			filename:path.resolve(__dirname, '../dist/index.html'),
			template: 'index.html',
		    inject: true,
		    // hash:true,
		    minify: {
		      removeComments: true,
		      collapseWhitespace: false,
		      removeAttributeQuotes: true
		      // more options:
		      // https://github.com/kangax/html-minifier#options-quick-reference
		    },
		    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
		    chunksSortMode: 'dependency'
		})
	]
})

module.exports = webpackProdConf