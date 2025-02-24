function changeFrameHeight() {
    var ifm = document.getElementById("theFrame");
    ifm.height = document.documentElement.clientHeight;
    ifm.width = document.documentElement.clientWidth;

}

window.onresize = function () {
    changeFrameHeight();

}

chrome.storage.sync.get(['googleCtx']).then((result) => {
    script = document.createElement('iframe');
    script.id = "theFrame"
    script.style = "border:none"
    if (typeof result.googleCseCtx != "undefined")  {
        script.src = "index.html?google_cse_cx="+result.googleCseCtx
    } else {
        script.src = "index.html"
    }
    document.body.appendChild(script)
    changeFrameHeight();
})