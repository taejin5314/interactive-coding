const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const numberOfParticles = 200;
let particlesArray = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 100 + 50;
        this.speed = Math.random() * 3 + 1;
        this.angle = Math.random() * 360;
        this.spin = Math.random() < 0.5 ? -1 : 1;

    }
    draw() {
        ctx.fillRect(this.x, this.y, this.size, this.size)
    }
    update() {
        this.y += this.speed;
    }
}

const particle1 = new Particle();

function animate() {
    particle1.update();
    particle1.draw();
    requestAnimationFrame(animate);
}

animate();