const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particlesArray = [];
const numberOfParticles = 250;

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 10 + 5;
        this.weight = Math.random() * 1 + 1;
        this.directionX = -2;
    }

    update() {
        if (this.y > canvas.height) {
            this.y = 0 - this.size;
            this.weight = Math.random() * 1 + 1;
            this.x = Math.random() * canvas.width * 1.2;
        }
        this.weight += 0.02;
        this.y += this.weight;
        this.x += this.directionX;
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y))
    }
}

init();

function animate() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }

    requestAnimationFrame(animate);
}

animate();