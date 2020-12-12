export class Tree {
    constructor(stageWidth, stageHeight, branchWidth, branchLength, branchAngle, complexity) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.branchWidth = branchWidth;
        this.branchLength = branchLength;
        this.angle = 0;
        this.branchAngle = branchAngle;
        this.complexity = complexity;
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    draw(ctx, x, y) {

    }

    animate(ctx) {
        requestAnimationFrame(this.animate.bind(this));
        ctx.
    }
}