import { createElement } from 'react';

/**
 * 返回一个 ReactElement，如果传入的是 ReactClass 则创建，否则直接返回
 */
function toReactElement(classOrElement) {
  return _.isFunction(classOrElement) ? createElement(classOrElement) : classOrElement;
}

export default toReactElement;
