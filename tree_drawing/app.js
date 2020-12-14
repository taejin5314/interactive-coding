import { Grass } from './grass.js';
import { Tree } from './tree.js';

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.grass = new Grass('gray');

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();


        requestAnimationFrame(this.animate.bind(this))
    }
    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);

        this.grass.resize(this.stageWidth, this.stageHeight)
        this.draw();

    }

    draw() {
        this.grass.draw(this.ctx);
        window.addEventListener('mousedown', function (e) {
            console.log(e.x);
        })
    }

    animate(t) {
        requestAnimationFrame(this.animate.bind(this));

    }
}

window.onload = () => {
    new App();
}