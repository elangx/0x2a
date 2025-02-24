 
 
function changeFrameHeight() {
    var ifm = document.getElementById("theFrame");
    ifm.height = document.documentElement.clientHeight;
    ifm.width = document.documentElement.clientWidth;

}
changeFrameHeight();

window.onresize = function () {
    changeFrameHeight();

}
