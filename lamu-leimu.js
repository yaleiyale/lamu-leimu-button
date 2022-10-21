!(function () {

  var style = '@media (max-width:860px){.sidebar_wo{display:none}}.sidebar_wo{position:fixed;bottom:0;z-index:1000;line-height:0;cursor:url(https://lestua.ml/lamu-leimu-button/image/bottom/lm.cur),pointer}#lamu:hover{-webkit-transform:translate(0,0);transform:translate(0,0);-ms-transform:translate(0,0)}#lamu{right:0;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:translate(7px,7px);transform:translate(7px,7px);-ms-transform:translate(7px,7px)}#leimu:hover{-webkit-transform:translate(0,0);transform:translate(0,0);-ms-transform:translate(0,0)}#leimu{left:0;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:translate(-7px,7px);transform:translate(-7px,7px);-ms-transform:translate(-7px,7px)}';

  var css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML = style;
  var head = document.head || document.getElementsByTagName('head')[0];
  head.appendChild(css);

  var lamuleimuDiv = '<div class="sidebar_wo" id="leimu"><img src="https://lestua.ml/lamu-leimu-button/image/bottom/leimu1.png" alt="雷姆" onmouseover="this.src=\'https://lestua.ml/lamu-leimu-button/image/bottom/leimu2.png\'" onmouseout="this.src=\'https://lestua.ml/lamu-leimu-button/image/bottom/lamu1.png\'"></div>';

    var div = document.createElement('div');
  div.innerHTML = lamuleimuDiv;
  div.id = 'lamu-leimu';
  document.body.appendChild(div);
  document.getElementById('lamu').onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    return false;
  };
  document.getElementById('leimu').onclick = function () {
    window.scrollTo({
      top: (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight,
      behavior: "smooth"
    });
    return false;
  };

})()