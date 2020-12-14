import { Grass } from './grass.js';
import { Tree } from './tree.js';

class App {
    constructor() {
        this.grassCanvas = document.createElement('canvas');
        this.grassCanvas.style.position = 'absolute';
        this.grassCanvas.style.left = '0'
        this.grassCanvas.style.top = '0'
        this.grassCtx = this.grassCanvas.getContext('2d');
        document.body.appendChild(this.grassCanvas);

        this.treeCanvas = document.createElement('canvas');
        this.treeCanvas.style.position = 'absolute';
        this.treeCanvas.style.left = '0'
        this.treeCanvas.style.top = '0'
        this.treeCtx = this.treeCanvas.getContext('2d');
        document.body.appendChild(this.treeCanvas);

        this.grass = new Grass('gray');

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
    }
    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.grassCanvas.width = this.stageWidth * 2;
        this.grassCanvas.height = this.stageHeight * 2;
        this.grassCtx.scale(2, 2);

        this.treeCanvas.width = this.stageWidth * 2;
        this.treeCanvas.height = this.stageHeight * 2;
        this.treeCtx.scale(2, 2);

        this.grass.resize(this.stageWidth, this.stageHeight)
        this.draw();

    }

    draw() {
        this.grass.draw(this.grassCtx);
        const treeCtx = this.treeCtx;
        const treeCtxWidth = this.stageWidth;
        const treeCtxHeight = this.stageHeight;
        window.addEventListener('mousedown', function (e) {
            this.tree = new Tree(treeCtx, e.x, treeCtxWidth, treeCtxHeight, 10, 80, 0, 10);
            this.tree.animate();
        })
    }

}

window.onload = () => {
    new App();
}