const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawGrass(color) {
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    for (let i = 0; i < canvas.width; i += 10) {
        ctx.quadraticCurveTo(i, canvas.height - 20, i + 15, canvas.height - 25)
        ctx.quadraticCurveTo(i + 10, canvas.height - 20, i + 10, canvas.height)
    }
    ctx.stroke();
    ctx.fillStyle = 'grey';
    ctx.fill();
}

drawGrass('black');