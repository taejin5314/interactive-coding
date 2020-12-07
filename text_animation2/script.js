const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.textBaseline = 'middle';
let lettersArray = ['T', 'A', 'E', 'J', 'I', 'N'];
let hue = 0;
let particles = [];
let numberOfParticles = (canvas.width * canvas.height) / 5000;
// let numberOfParticles = 20;

const mouse = {
    x: 0,
    y: 0,
    radius: 50,
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

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 0.8, 0, Math.PI * 1.5, true);
        ctx.fillStyle = 'white';
        ctx.fill();

        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.font = this.radius + 'px Verdana';
        ctx.fillText(this.text, this.x - this.radius / 2.9, this.y);
        ctx.closePath();
    }
    update() {
        if (mouse.x === undefined && mouse.y === undefined) {
            let newX = mouse.radius * canvas.width / 150 * Math.sin(mouse.autopilotAngle * (Math.PI / 180));
            let newY = mouse.radius * canvas.height / 150 * Math.cos(mouse.autopilotAngle * (Math.PI / 360));
            mouse.x = newX + canvas.width / 2;
            mouse.y = newY + canvas.height / 2;
        }
        mouse.autopilotAngle += 0.05;
    }
}

function handleOverlap() {
    let overlapping = false;
    let protection = 500;
    let counter = 0;

    while (particles.length < numberOfParticles && counter < protection) {
        let randomAngle = Math.random() * Math.PI * 2;
        let randomRadius = mouse.radius * Math.sqrt(Math.random());
        let particle = {
            x: mouse.x + randomRadius * Math.cos(randomAngle),
            y: mouse.y + randomRadius * Math.sin(randomAngle),
            radius: Math.floor(Math.random() * 30) + 10,
        }
        overlapping = false;
        for (let i = 0; i < particles.length; i++) {
            let previouseParticle = particles[i];
            let dx = particle.x - previouseParticle.x;
            let dy = particle.y - previouseParticle.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < particle.radius + previouseParticle.radius) {
                overlapping = true;
                break;
            }
        }
        if (!overlapping) {
            particles.unshift(new Particle(particle.x, particle.y, particle.radius))
        }
        counter++;
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update();
    }
    if (particles.length >= numberOfParticles) {
        for (let i = 0; i < 5; i++) {
            particles.pop();
        }
    }
    handleOverlap();
    hue += 2;
    requestAnimationFrame(animate);
}

animate();

let autopilot = setInterval(function () {
    mouse.x = undefined;
    mouse.y = undefined;
}, 40)