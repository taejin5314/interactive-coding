const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
    x: undefined,
    y: undefined,
}
let currentX;
let currentY;

window.addEventListener('mousedown', function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
    drawTree(mouse.x, canvas.height, 120, 0, 2, 'blue')
})

function steps(startX, startY, endX, endY, color) {
    const speed = 0.5;
    // let stepX = (endX - startX) / speed;
    let stepY = (endY - startY) / speed;
    // currentX = currentX < endX ? currentX += stepX : currentX;
    currentY = currentY < endY ? currentY += stepY : currentY;
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, startY);
    ctx.lineTo(0, currentY);

    ctx.strokeStyle = color;
    ctx.stroke();
    window.requestAnimationFrame(steps);
}

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

function drawTree(startX, startY, len, angle, branchWidth, color) {
    ctx.beginPath();
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = branchWidth;
    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI / 180);
    // ctx.moveTo(0, 0);
    steps(0, 0, 0, -len, color)
    // ctx.lineTo(0, -len);
    // ctx.stroke();

    if (len < 10) {
        ctx.restore();
        return;
    }

    drawTree(0, -len, len * 0.75, angle + 5, branchWidth);
    drawTree(0, -len, len * 0.75, angle - 5, branchWidth);

    ctx.restore();
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