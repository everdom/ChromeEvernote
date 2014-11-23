var width = parseInt(screen.availWidth * 0.8);
var height = parseInt(screen.availHeight * 0.8);
chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('window.html', {
        'bounds': {
            'width': width,
            'height': height
        }
  });
});