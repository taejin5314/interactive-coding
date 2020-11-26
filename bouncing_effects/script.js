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
        if (this.size < 0) {
            this.x = (mouse.x + ((Math.random() * 20) - 10));
            this.y = (mouse.y + ((Math.random() * 20) - 10));
            this.size = (Math.random() * 10) + 2;
            this.weight = (Math.random() * 2) - 0.5;
        }
        this.y += this.weight;
        this.weight += 0.2;

        if (this.y > canvas.height - this.size) {
            this.weight *= -1;
        };


    }
}