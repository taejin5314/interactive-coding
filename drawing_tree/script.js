const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
    x: undefined,
    y: undefined,
}

let amount = 0;

window.addEventListener('mousedown', function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
    drawTree(mouse.x, canvas.height, 120, 0, 2, 'blue')
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

function drawLine(len) {
    amount = amount === 1 ? 0 : amount + 0.05;
    ctx.lineTo(0, -len * amount);
    ctx.stroke();
}

function drawTree(startX, startY, len, angle, branchWidth, color) {
    ctx.beginPath();
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = branchWidth;
    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI / 180);
    ctx.moveTo(0, 0);
    drawLine(len);

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