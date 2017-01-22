/**
 * 打印页面某个dom元素
 * @param domElement
 */
function print(domElement) {
  if (!domElement) return;
  var oldHtml = document.body.innerHTML,
    printDom = domElement.innerHTML,
    newHtml = "<html>" +
      "<head><title></title></head>" +
      "<style type='text/css'> html,body {height: auto !important} </style>" +
      "<body>" +
      "<div class='" + domElement.className + " print'>" +
      printDom +
      "</div>" +
      "</body>" +
      "</html>";
  document.body.innerHTML = newHtml;
  window.print();
  document.body.innerHTML = oldHtml;
}

export default print;
