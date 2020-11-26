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
})

