const CANVAS_WIDTH = 480;
const CANVAS_HEIGHT = 620;
const particlesArray = [];

let snowBgCanvas;
let branchCanvas;

function initializeCanvas(canvasID) {
    const canvas = document.getElementById(canvasID);
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    return canvas;
}

function main() {
    snowBgCanvas = initializeCanvas('canvasSnowBackground');
    branchCanvas = initializeCanvas('canvasTreeBranches');
    const treeLocation = [CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.95];
    drawBranches(branchCanvas, treeLocation, 100, 0, 15);
    drawLeaves(branchCanvas);
    setInterval(function () {
        handleSnowflakes(snowBgCanvas);
    }, 1000 / 60);
}

function drawLeaves(branchCanvas) {
    const ctx = branchCanvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    const data = imageData.data;

    let branchPixels = []
    for (let i = 0; i < CANVAS_HEIGHT; i++) {
        for (let j = 0; j < CANVAS_WIDTH; j++) {
            let red = data[4 * (i * CANVAS_WIDTH + j) + 0];
            let green = data[4 * (i * CANVAS_WIDTH + j) + 1];
            let blue = data[4 * (i * CANVAS_WIDTH + j) + 2];
            let alpha = data[4 * (i * CANVAS_WIDTH + j) + 3];

            if (alpha > 0 && i < CANVAS_HEIGHT * 0.95 - 100) {
                branchPixels.push([j, i]);
            }
        }
    }

    for (let i = 0; i < branchPixels.length; i++) {
        if (Math.random() < 0.3) {
            let loc = branchPixels[i];
            loc[0] += (Math.random() - 0.5) * 10;
            loc[1] += (Math.random() - 0.5) * 10;
            ctx.beginPath();
            let green = 255 * (CANVAS_HEIGHT - loc[1]) / CANVAS_HEIGHT;
            ctx.fillStyle = 'rgba(0,' + green + ', 0, 0.4)';
            ctx.save();
            ctx.translate(...loc);
            ctx.rotate(Math.random() * Math.PI * 2);
            ctx.arc(0, 0, 5, 0, Math.PI);
            ctx.fill();
            ctx.restore();
        }
    }
}

function drawBranches(canvas, start, len, angle, branchWidth) {
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.save();
    ctx.lineWidth = branchWidth;
    ctx.translate(...start);
    ctx.rotate(angle * Math.PI / 180);

    ctx.moveTo(0, 0);
    ctx.lineTo(0, -len);
    ctx.stroke();

    if (len > 10) {
        drawBranches(canvas, [0, -len], len * 0.5, 35, branchWidth * 0.7)
        drawBranches(canvas, [0, -len], len * 0.8, 0, branchWidth * 0.7)
        drawBranches(canvas, [0, -len], len * 0.5, -35, branchWidth * 0.7)
    }
    ctx.restore();
}

main();

const snowflakes = new Image();
snowflakes.src = 'snowflakes.png';

class Snowflake {
    constructor() {
        this.x = Math.random() * CANVAS_WIDTH;
        this.y = Math.random() * CANVAS_HEIGHT;
        this.size = Math.random() * 60 + 40;
        this.speed = Math.random() * 0.5 + 0.2;
        this.frameX = Math.floor(Math.random() * 4);
        this.frameY = Math.floor(Math.random() * 4);
        this.frameSize = 250;
        this.angle = 0;
        this.spin = Math.random() > 0.5 ? 0.2 : -0.2;
    }
    update() {
        this.y += this.speed;
        if (this.y - this.size > CANVAS_HEIGHT) this.y = 0 - this.size;
    }
    draw(canvas) {
        const ctx = canvas.getContext('2d');
        ctx.drawImage(snowflakes, this.frameX * this.frameSize, this.frameY * this.frameSize, this.frameSize, this.frameSize, this.x, this.y, this.size, this.size);
    }
}

for (let i = 0; i < 20; i++) {
    particlesArray.push(new Snowflake);
}

function handleSnowflakes(canvas) {
    clear(canvas);


    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].draw(canvas);
        particlesArray[i].update();
    }
}

function clear(canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}