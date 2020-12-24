const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const numberOfParticles = 200;
let particlesArray = [];
const pumpkin = new Image();
pumpkin.src = 'pumpkin1.png';

// ctx.translate(180, 150);
// ctx.rotate(Math.PI / 360 * 30);
// ctx.fillRect(0, 0, 100, 150)

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 100 + 50;
        this.speed = Math.random() * 5 + 1;
        this.angle = Math.random() * 360;
        this.spin = Math.random() < 0.5 ? -1 : 1;

    }
    draw() {
        // ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * Math.PI / 360);
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(pumpkin, this.x, this.y, this.size, this.size);
        ctx.restore();
    }
    update() {
        this.angle++;
        if (this.y > canvas.height) {
            this.y = 0 - this.size;
            this.x = Math.random() * canvas.width;
            this.size = Math.random() * 20 + 50;
            this.speed = Math.random() * 5 + 1;
        }
        this.y += this.speed;
    }
}

const particle1 = new Particle();

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particle1.update();
    particle1.draw();
    requestAnimationFrame(animate);
}

animate();