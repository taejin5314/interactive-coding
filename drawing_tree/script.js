function initializeCanvas(canvasName) {
    const canvas = document.getElementById(canvasName);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    return canvas;
}

const grassCanvas = initializeCanvas('canvas1');
const grassCtx = grassCanvas.getContext('2d');
const treeCanvas = initializeCanvas('canvas2');
const treeCtx = treeCanvas.getContext('2d');

let mouse = {
    x: undefined,
    y: undefined,
}

let currentX = 0;
let currentY = 0;
const speed = 5;

window.addEventListener('mousedown', function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
    // drawTree(mouse.x, treeCanvas.height, 120, 0, 2, 'blue', 5)
    const tree = new Tree(mouse.x, treeCanvas.height, 80, 0, 10, 'white');
    tree.drawTree()
})


function drawGrass(color) {
    grassCtx.beginPath();
    grassCtx.moveTo(0, grassCanvas.height);
    for (let i = 0; i < grassCanvas.width; i += Math.random() * 5) {
        let w = Math.random() * 5;
        let h = Math.random() * 10 + 10;
        grassCtx.quadraticCurveTo(i, grassCanvas.height - (h - 10), i + w, grassCanvas.height - h)
        grassCtx.quadraticCurveTo(i + w, grassCanvas.height - (h - 10), i + w / 2, grassCanvas.height)
    }
    grassCtx.stroke();
    grassCtx.fillStyle = color;
    grassCtx.fill();
}

class Tree {
    constructor(x, y, len, angle, branchWidth, color) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.height = len * Math.random() + 80;
        this.branchWidth = branchWidth * Math.random() + 10;
        this.color = color;
        this.speed = 2;
    }

    drawTree() {
        this.drawBranch(this.x, this.y, this.height, this.angle, this.branchWidth);
    }

    drawBranch(startX, startY, len, angle, branchWidth) {
        this.currentY = startY;
        this.height = len;
        // treeCtx.translate(startX, startY);
        // treeCtx.rotate(angle * Math.PI / 180);
        this.branchAnimate();

        if (len < 10) {
            treeCtx.restore();
            return;
        }

        // this.drawBranch(0, -len, len * Math.random() * 0.7, angle + 5, branchWidth * 0.7);
    }

    branchAnimate() {
        requestAnimationFrame(this.branchAnimate.bind(this));
        treeCtx.beginPath();
        treeCtx.lineWidth = this.branchWidth;
        treeCtx.strokeStyle = this.color;
        treeCtx.moveTo(this.x, this.currentY);
        treeCtx.lineTo(this.x, this.currentY - this.speed);
        treeCtx.stroke();

        this.currentY = (this.currentY >= this.y - this.height) ? this.currentY - this.speed : this.currentY;

        treeCtx.restore();
    }
}

function drawTree(startX, startY, len, angle, branchWidth, color, speed) {
    treeCtx.beginPath();
    treeCtx.save();
    treeCtx.strokeStyle = color;
    treeCtx.lineWidth = branchWidth;
    treeCtx.translate(startX, startY);
    treeCtx.rotate(angle * Math.PI / 180);
    treeCtx.moveTo(0, 0);
    treeCtx.lineTo(0, -len);
    treeCtx.stroke();

    if (len < 10) {
        treeCtx.restore();
        return;
    }

    drawTree(0, -len, len * 0.75, angle + 5, branchWidth);
    drawTree(0, -len, len * 0.75, angle - 5, branchWidth);

    treeCtx.restore();
}

function init() {
    drawGrass('grey');
}

init();

window.addEventListener('resize', function () {
    grassCanvas.width = innerWidth;
    grassCanvas.height = innerHeight;
    treeCanvas.width = innerWidth;
    treeCanvas.height = innerHeight;
    init();
})