window.onload = function () {
    var canvas = document.getElementsByClassName("canvas-header");
    var ctx = canvas.getContext("2D");
    var radius = canvas.height / 2;
    ctx.translate(radius, radius);
    drawMagnifier(ctx, radius);
};

function drawMagnifier(ctx, radius){
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "transparent";
    ctx.fill();
}