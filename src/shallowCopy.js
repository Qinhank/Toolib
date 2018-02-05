/**
 * 对象浅拷贝
 * @param  {[obj]} needObj [description]
 * @param  {[obj]} copyObj [description]
 * @return {[type]}         [description]
 */
function shadowCopy(needObj, copyObj) {
    for (let i in copyObj) {
        if (copyObj.hasOwnProperty(i)) {
            needObj[i] = copyObj[i];
        }
    }
}

module.exports = shadowCopy;