const path = require("path")
const webpack = require("webpack")
const WebpackConf = require("./webpack.prod.conf")
const rm = require("rimraf")

rm(path.join(path.resolve(__dirname, '../dist')),err =>{
	if(err){console.log(err)}
	webpack(WebpackConf,(error,callback) => {
	    if (error){ throw error}
	    console.log('build成功啦~');
	})
})