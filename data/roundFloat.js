/**
 * 四舍五入浮点数到给定精度
 * @param number 被四舍五入的数字
 * @param precision 精度，默认为 0.01
 * @returns {number} 四舍五入后的数字
 */
function roundFloat(number, precision) {
  var factor = Math.round(1 / (precision || 0.01));
  return Math.round(number * factor) / factor;
}

export default roundFloat;
