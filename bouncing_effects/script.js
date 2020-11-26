const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particleArray = [];

const mouse = {
    x: null,
    y: null
}

window.addEventListener('mouseover', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
})

setInterval(function () {
    mouse.x = undefined;
    mouse.y = undefined;
}, 200);

class Particle {
    constructor(x, y, size, color, weight) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.weight = weight;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update() {
        this.size -= 0.05;

    }
}