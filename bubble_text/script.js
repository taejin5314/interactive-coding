const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];
let adjustX = 6;
let adjustY = 6;

const mouse = {
    x: null,
    y: null,
    radius: 50,
}

window.addEventListener('mousemove', function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
})

ctx.fillStyle = 'white';
ctx.font = '25px Verdana';
ctx.fillText('A', 0, 30);
const textCoordinates = ctx.getImageData(0, 0, 100, 100);
