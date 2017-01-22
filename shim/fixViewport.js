let initialWidth = window.innerWidth;
let viewport = document.querySelector('meta[name="viewport"]');
viewport.setAttribute('content', viewport.getAttribute('content').replace(/=1/g, '=0.5'));
if (window.innerWidth === initialWidth) {
  // 三星 SM-N7508V (Android 4.3) 的安卓大象需要有 target-densitydpi 才能识别 1 以外的 initial-scale
  // vivo Y20T (Android 4.2.2) 能识别 target-densitydpi 但作用异常 (并且 screen 一直不对)
  // 所以只在缩放到 0.5 没有效果的时候才添加 target-densitydpi
  viewport.setAttribute('content', viewport.getAttribute('content') + ', target-densitydpi=device-dpi');
}
