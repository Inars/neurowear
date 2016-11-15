window.onload = function () {
    drawMagnifier();
};

function drawMagnifier(){
    var canvas = document.getElementsByClassName("canvas-header")[0];
    var ctx = canvas.getContext("2d");
    var radius = canvas.height / 2;
    ctx.translate(radius, radius);
    radius *= 0.65;
    ctx.beginPath();
    ctx.arc(-2, -2, radius, 0, 2*Math.PI);
    ctx.fillStyle = 'transparent';
    ctx.fill();
    ctx.strokeStyle = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05).addColorStop(0, 'white');
    ctx.lineWidth = radius*0.4;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(2, 2);
    ctx.lineTo(8, 8);
    ctx.lineWidth = radius * 0.4;
    ctx.stroke();
}