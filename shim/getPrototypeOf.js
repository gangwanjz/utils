/* 兼容 IE 8-10 下 babel 的 inherits 函数 */

var has = require('core-js/modules/_has');

if (!has({}, '__proto__')) {
  var orig = Object.getPrototypeOf;
  Object.getPrototypeOf = function (O) {
    if (has(O, '__proto__')) return O.__proto__;
    return orig(O);
  };
}
