(function(window) {
  var svgSprite = '<svg xmlns="http://www.w3.org/2000/svg">' +
    '<symbol id="icon-shouye" viewBox="0 0 1024 1024">' +
      '<path d="M512 128L128 448v448h256V640h256v256h256V448L512 128z"></path>' +
    '</symbol>' +
    '<symbol id="icon-home" viewBox="0 0 1024 1024">' +
      '<path d="M512 128L128 448v448h256V640h256v256h256V448L512 128z"></path>' +
    '</symbol>' +
    '<symbol id="icon-fenlei" viewBox="0 0 1024 1024">' +
      '<path d="M192 192h256v256H192zm384 0h256v256H576zm-384 384h256v256H192zm384 0h256v256H576z"></path>' +
    '</symbol>' +
    '<symbol id="icon-category" viewBox="0 0 1024 1024">' +
      '<path d="M192 192h256v256H192zm384 0h256v256H576zm-384 384h256v256H192zm384 0h256v256H576z"></path>' +
    '</symbol>' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
      '<path d="M128 128h128l64 384h448l64-256H320m-64 512a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm448 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0z"></path>' +
    '</symbol>' +
    '<symbol id="icon-cart" viewBox="0 0 1024 1024">' +
      '<path d="M128 128h128l64 384h448l64-256H320m-64 512a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm448 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0z"></path>' +
    '</symbol>' +
    '<symbol id="icon-wode" viewBox="0 0 1024 1024">' +
      '<path d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64c-192 0-384 96-384 256v64h768v-64c0-160-192-256-384-256z"></path>' +
    '</symbol>' +
    '<symbol id="icon-user" viewBox="0 0 1024 1024">' +
      '<path d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64c-192 0-384 96-384 256v64h768v-64c0-160-192-256-384-256z"></path>' +
    '</symbol>' +
  '</svg>';

  function insertSvg() {
    var div = document.createElement('div');
    div.innerHTML = svgSprite;
    var svg = div.getElementsByTagName('svg')[0];
    if (svg) {
      svg.setAttribute('aria-hidden', 'true');
      svg.style.position = 'absolute';
      svg.style.width = '0';
      svg.style.height = '0';
      svg.style.overflow = 'hidden';
      document.body.insertBefore(svg, document.body.firstChild);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertSvg);
  } else {
    insertSvg();
  }
})(window);