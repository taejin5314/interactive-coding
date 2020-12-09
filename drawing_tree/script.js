const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
    x: undefined,
    y: undefined,
}

let currentX = 0;
let currentY = 0;
const speed = 5;

window.addEventListener('mousedown', function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
    drawTree(mouse.x, canvas.height, 120, 0, 2, 'blue', 5)
})


function drawGrass(color) {
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    for (let i = 0; i < canvas.width; i += Math.random() * 5) {
        let w = Math.random() * 5;
        let h = Math.random() * 10 + 10;
        ctx.quadraticCurveTo(i, canvas.height - (h - 10), i + w, canvas.height - h)
        ctx.quadraticCurveTo(i + w, canvas.height - (h - 10), i + w / 2, canvas.height)
    }
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
}


function drawTree(startX, startY, len, angle, branchWidth, color, speed) {
    ctx.beginPath();
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = branchWidth;
    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI / 180);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -len);
    ctx.stroke();

    if (len < 10) {
        ctx.restore();
        return;
    }

    drawTree(0, -len, len * 0.75, angle + 5, branchWidth);
    drawTree(0, -len, len * 0.75, angle - 5, branchWidth);

    ctx.restore();
}

function drawLine() {

    currentY += speed;

    if (currentY < 500) {
        requestAnimationFrame(drawLine);
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = '15';
        ctx.moveTo(0, 0)
        ctx.lineTo(0, currentY);
        ctx.stroke();
    }

}

function init() {
    drawGrass('grey');
}

init();

window.addEventListener('resize', function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
})