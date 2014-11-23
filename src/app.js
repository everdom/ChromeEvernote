var width = parseInt(screen.availWidth * 0.8);
var height = parseInt(screen.availHeight * 0.8);
window.onload = function(){
    var webview = document.getElementById("yinxiang");
    //var indicator = document.querySelector(".indicator");
      
    var loadstart = function() {
      document.title = "正在加载...";
     // indicator.innerText = "正在加载...";
    }
    var loadstop = function() {
      document.title = "印象笔记";
      //indicator.innerText = "";
    }
    webview.style.width = width+"px";
    webview.style.height = height+"px";

    webview.addEventListener("loadstart", loadstart);
    webview.addEventListener("loadstop", loadstop);

    var newwindow = function(e){
        window.open(e.targetUrl);
    }
    webview.addEventListener('newwindow', newwindow);
}