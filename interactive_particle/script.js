const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];

let mouse = {
    x: undefined,
    y: undefined,
    radius = 100,
}

window.addEventListener('mousemove', function (e) {
    mouse.x = e.x + canvas.clientLeft / 2;
    mouse.y = e.y + canvas.clientTop / 2;
})

