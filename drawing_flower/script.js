const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = 'destination-over';

let number = 0;
let scale = 10;

function drawFlower() {
    // clearing the canvas each time the function is called
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
    let angle = number * 9;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvas.width / 2;
    let positionY = radius * Math.cos(angle) + canvas.height / 2;

    ctx.fillStyle = 'rose';
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(positionX, positionY, number, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    number++;
}

function animate() {
    drawFlower();
    if (number > 200) return;
    requestAnimationFrame(animate);
}
animate();