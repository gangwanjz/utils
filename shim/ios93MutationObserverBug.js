// iOS 9.3+ 中 UIwebview 的 MutationObserver 在页面大幅拖动后会失效
// https://github.com/vuejs/vue/pull/3027
let match = /iPhone OS (\d+)_(\d+)_/.exec(navigator.userAgent);
if (match && match[1] >= 9 && match[2] >= 3 && !window.indexedDB) {
  window.MutationObserver = window.WebKitMutationObserver = undefined;
}
