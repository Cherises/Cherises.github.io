// // scroll-disable-blur.js
// (function () {
//   var scrollTimer;
//   var body = document.body;

//   window.addEventListener('scroll', function () {
//     // 快速开始：添加滚动类
//     if (!body.classList.contains('scrolling')) {
//       body.classList.add('scrolling');
//     }
//     // 延后移除：用户停止滚动 180ms 后移除类
//     window.clearTimeout(scrollTimer);
//     scrollTimer = window.setTimeout(function () {
//       body.classList.remove('scrolling');
//     }, 50);
//   }, { passive: true });
// })();
