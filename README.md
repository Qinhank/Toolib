# Toolib
这是一个工具库，里面包含了自己在项目过程中会用到的一些常用的方法，包括数据的处理、日期的处理、数组、字符串、对象以及url的处理，当然还有一些常用正则
## 使用Toolib
```javascript
const url = http://github.com?type=cat&name=jay
const urlParam = toolib.queryUrlParam(url)
//{type:'cat',name:'jay'}
```
1.直接使用：
将**dist**文件里的脚本放入script标签，使用时直接调用toolib.xxx()即可  
2.AMD、CDM等
直接```require('toolib.min')```即可  
3.单个方法使用
有时候可能只需要某个方法，那也直接```require('xxx')```即可
## 关于webpack
这也是我首次自己完整的搭一个webpack来优化压缩代码，所以除了工具上的说明，还会将直接在webpack上所用到的插件列出并加以说明，也算是给自己一个熟悉的过程吧。
## 关于webpack插件的一些注释
```javascript
    //自动CSS3前缀补全
    "autoprefixer": "^7.2.5",
    //es6转ES5
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-preset-es2015": "^6.24.1",
    "babel-runtime": "^6.26.0",
    //自动生成html文件
    "html-webpack-plugin": "^2.30.1",
    //对象合并
    "webpack-merge":""
    //自动生成html文件
    "html-webpack-plugin": "^2.30.1",
    //文件删除
    "rimraf": "^2.6.2",
    //丑化脚本
    "uglifyjs-webpack-plugin": "^1.1.6"
```
## API  
### 非Toolib方法  
（项目开发中常需要对一些原始数据进行加工，所以需要添加一些方法，不断更新中...）    

|   方法             |           说明         |             使用           |  
| :----------------: | :--------------------: | :------------------------: |  
| onlyYmd            | 只取时间的年月日，格式：2018-01-26 | ```new Date().onlyYmd()``` |  
| onlyMis            |  只取时间的时分秒，格式：09:40:20  | ```new Date().onlyMis()``` |  

### Toolib方法
**changeBtnStatus**  
更改按钮状态，多用于表单提交按钮等  
该方法支持jq或zepto，即```$(el).changeBtnStatus()```

|     参数     |       说明        |       默认值        |
| :--------: | :-------------: | :--------------: |
|  element   |     要绑定的元素      |        ''        |
|   status   | 设置按钮状态，true为不可选 |       true       |
| background |     设置按钮背景      |    buttonface    |
|    text    |   设置按钮点击后的文字    |      生效中...      |
|  callback  |      回调函数       | 返回status,bg,text |

---

**queryUrlParam**  
查询当前url或指定url的参数并以obj格式返回  

|   参数    |      说明      | 默认值  |
| :-----: | :----------: | :--: |
| url(可选) | 一个带有参数的url地址 |  无   |

---

**quickAjax**
该方法基于jQ，实现一个快速异步的操作（暂只适用自己的项目） 
 
|    参数    |  说明   |        默认值        |
| :------: | :---: | :---------------: |
|   url    |  地址   |         无         |
|   type   | 传输类型  |        get        |
| callback | 回调函数  |       返回的数据       |
|  error   | 错误的处理 | 支持string和function |

**持续更新**