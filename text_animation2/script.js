const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.textBaseline = 'middle';
let lettersArray = ['T', 'A', 'E', 'J', 'I', 'N'];
let hue = 0;
let particles = [];
// let numberOfParticles = (canvas.width * canvas.height) / 5000;
let numberOfParticles = 20;

const mouse = {
    x: 0,
    y: 0,
    radius: 0,
    autopilotAngle: 0,
}

window.addEventListener('mousemove', function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
})

class Particle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius
        this.color = 'hsl(' + hue + ', 100%, 50%)';
        this.text = lettersArray[Math.floor(Math.random() * lettersArray.length)];
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

function handleOverlap() {
    let overlapping = false;
    for (let i = 0; i < numberOfParticles; i++) {
        particles.unshift(new Particle(mouse.x, mouse.y, 20))
    }

}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
    }
    if (particles.length >= numberOfParticles) {
        for (let i = 0; i < 15; i++) {
            particles.pop();
        }
    }
    handleOverlap();
    hue += 2;
    requestAnimationFrame(animate);
}

animate();