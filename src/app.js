var width = parseInt(screen.availWidth * 0.8);
var height = parseInt(screen.availHeight * 0.8);
window.onload = function(){
    var webview = document.getElementById("evernote");
    console.log(chrome.i18n.getMessage("website"));
    webview.src = chrome.i18n.getMessage("website");
    //var indicator = document.querySelector(".indicator");
    document.title = chrome.i18n.getMessage("extName");
    var loadstart = function() {
      document.title = chrome.i18n.getMessage("loading");
     // indicator.innerText = "正在加载...";
    }
    var loadstop = function() {
      document.title = chrome.i18n.getMessage("extName");
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