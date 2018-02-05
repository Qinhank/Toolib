 /**
  * 判断是否是ie
  * @return {Boolean} [如果是ie返回版本号，不是则返回false]
  */
 function isIE() {
     var myNav = navigator.userAgent.toLowerCase();
     return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
 };

 module.exports = isIE;