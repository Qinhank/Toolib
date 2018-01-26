
/**
 * 获取当前url或指定url参数
 * @param  {[string]} url [url地址]
 * @return {[obj]}     [返回对象参数]
 */
function queryUrlParam(url){

	url = url == null ? window.location.href : url
    var search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1)
    if (search === '') return {}
    search = search.split('&');

    var query = {};
    for (var i = 0; i < search.length; i++) {
        var pair = search[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }

    return query;
}

module.exports = queryUrlParam;