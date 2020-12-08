const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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

function drawTree(startX, len, angle, branchWidth, color) {
    ctx.beginPath();
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