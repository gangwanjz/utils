/**
 * 获取一个 DOM 元素包括 margin 在内的高度
 * @param domElement
 * @returns {number}
 */
function getOuterHeight(domElement) {
  if (!domElement) return 0;
  var computedStyle = window.getComputedStyle(domElement);
  var marginTop = parseInt(computedStyle.marginTop, 10);
  var marginBottom = parseInt(computedStyle.marginBottom, 10);
  return domElement.offsetHeight + marginTop + marginBottom;
}

export default getOuterHeight;
