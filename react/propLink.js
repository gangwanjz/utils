import _ from 'lodash-compat';

/**
 * 链接子组件的某个 props 到当前组件的某个 state
 * 用法：在子组件 JSX 标签中添加类似 {...propLink(this, 'name1', 'name1')} 的代码
 * @param that 当前组件的实例（通常为 this）
 * @param childPropName 子组件 props 的名字
 * @param localStateName 当前组件 state 的名字
 * @param additionalChangeHandler 可选参数，当此属性变化时调用的函数
 */
function propLink(that, childPropName, localStateName, additionalChangeHandler) {
  if (!that.state) {
    that.state = {};
  }
  additionalChangeHandler = additionalChangeHandler || _.noop;
  var props = {};
  props[childPropName] = that.state[localStateName];
  props[childPropName + 'Changed'] = function (value) {
    var state = {};
    state[localStateName] = value;
    that.setState(state);
    additionalChangeHandler.apply(null, arguments);
  };
  return props;
}

/**
 * 链接子组件的某个 props 到当前组件的某个由 propLink 创建的 props，即把 propLink 向下中继一层
 * 用法：在子组件 JSX 标签中添加类似 {...propLink(this, 'name1', 'name1')} 的代码
 * @param that 当前组件的实例（通常为 this）
 * @param childPropName 子组件 props 的名字
 * @param localPropName 当前组件 props 的名字
 * @param additionalChangeHandler 可选参数，当此属性变化时调用的函数
 */
function propLinkRelay(that, childPropName, localPropName, additionalChangeHandler) {
  additionalChangeHandler = additionalChangeHandler || _.noop;
  var props = {};
  props[childPropName] = that.props[localPropName];
  props[childPropName + 'Changed'] = function () {
    that.props[localPropName + 'Changed'].apply(null, arguments);
    additionalChangeHandler.apply(null, arguments);
  };
  return props;
}

export default propLink;
export { propLink, propLinkRelay };
