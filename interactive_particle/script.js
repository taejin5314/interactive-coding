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

function drawImage() {
    let imageWidth = png.width;
    let imageHeight = png.height;
    const data = ctx.getImageData(0, 0, imageWidth, imageHeight);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    class Particle {
        constructor(x, y, color, size) {
            this.x = x + canvas.width / 2 - png.width * 2;
            this.y = y + canvas.height / 2 - png.height * 2;
            this.color = color;
            this.size = size * 2;
            this.baseX = x + canvas.width / 2 - png.width * 2;
            this.baseY = y + canvas.height / 2 - png.height * 2;
            this.density = Math.random() * 10 + 2;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill()
        }
        update() {
            ctx.fillStyle = this.color;

            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;

            const maxDistance = 100;
            let force = (maxDistance - distance) / maxDistance;
            if (force < 0) force = 0;

            let directionX = (forceDirectionX * force * this.density * 0.6);
            let directionY = (forceDirectionY * force * this.density * 0.6);

            if (distance < mouse.radius * this.size) {
                this.x -= directionX;
                this.y -= directionY;
            } else {
                if (this.x !== this.baseX) {
                    let dx = this.x - this.baseX;
                    this.x -= dx / 20;
                } if (this.y !== this.baseY) {
                    let dy = this.y - this.baseY;
                    this.y -= dy / 20;
                }
            }
            this.draw();
        }
    }
}

