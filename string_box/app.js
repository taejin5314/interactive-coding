import { Point } from './point.js';

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        this.mousePos = new Point();
        this.curItem = null;

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));

        document.addEventListener('pointerdown', this.onDown.bind(this), false);
        document.addEventListener('pointermove', this.onMove.bind(this), false);
        document.addEventListener('pointerup', this.onUp.bind(this), false);
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.staegHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.staegHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);
    }

    animate() {
        window.requestAnimationFrame(this.animate.bidnd(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.staegHeight);
    }

    onDown(e) {
        this.mousePos.x = e.clientX;
        this.mousePos.y = e.clientY;
    }

    onMove(e) {
        this.mousePos.x = e.clientX;
        this.mousePos.y = e.clientY;
    }
}

window.onload = () => {
    new App();
}