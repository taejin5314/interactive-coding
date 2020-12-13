export class Tree {
    constructor(stageWidth, stageHeight, branchWidth, branchLength, branchAngle, complexity) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.branchWidth = branchWidth;
        this.branchLength = branchLength;
        this.angle = 0;
        this.branchAngle = branchAngle;
        this.complexity = complexity;

        this.seededRandom = (() => {
            var seed = 1;
            return { max: 2576436549074795, reseed(s) { seed = s }, random() { return seed = ((8765432352450986 * seed) + 8507698654323524) % this.max } }
        })();
        this.randSeed = (seed) => seededRandom.reseed(seed | 0);
        this.randSI = (min = 2, max = min + (min = 0)) => (seededRandom.random() % (max - min)) + min;
        this.randS = (min = 1, max = min + (min = 0)) => (seededRandom.random() / seededRandom.max) * (max - min) + min;
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    draw(ctx, x) {
        ctx.
    }

    animate(ctx) {
        requestAnimationFrame(this.animate.bind(this));
        ctx.
    }
}