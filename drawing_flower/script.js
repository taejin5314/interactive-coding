const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let number = 0;
let scale = 10;

function drawFlower() {
    // clearing the canvas each time the function is called
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
    let angle = number * 1;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle);
    let positionY = radius * Math.cos(angle);

    ctx.fillStyle = 'blue';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(positionX, positionY, 20, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    number++;
}

function animate() {
    drawFlower();

    requestAnimationFrame(animate);
}
animate();