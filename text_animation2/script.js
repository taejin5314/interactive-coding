const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.textBaseline = 'middle';
let lettersArray = ['T', 'A', 'E', 'J', 'I', 'N'];
let hue = 0;
let particles = [];
let numberOfParticles = (canvas.width * canvas.height) / 5000;

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