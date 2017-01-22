import corejs from 'core-js/shim';

if (corejs.version.split('.')[0] < 2)  {
  console.warn('core-js 版本过低，请在最末端项目的 package.json 中声明 "core-js": ">=2" 并重新安装');
}
