export class Tree {
    constructor(ctx, x, stageWidth, stageHeight, branchWidth, branchLength, branchAngle, complexity) {
        this.ctx = ctx;
        this.x = x;
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
        this.randSeed = (seed) => this.seededRandom.reseed(seed | 0);
        this.randSI = (min = 2, max = min + (min = 0)) => (this.seededRandom.random() % (max - min)) + min;
        this.randS = (min = 1, max = min + (min = 0)) => (this.seededRandom.random() / this.seededRandom.max) * (max - min) + min;

        this.branchCount = 0;
        this.maxTrunk = 0;
        this.treeGrow = 0.01;

        this.angMin = 0.01;  // branching angle min and max
        this.angMax = 0.6;
        this.lengMin = 0.8;  // length reduction per branch min and max
        this.lengMax = 0.9;
        this.widthMin = 0.6; // width reduction per branch min max
        this.widthMax = 0.8;
        this.trunkMin = 6;  // trunk base width ,min and max
        this.trunkMax = 10;
        this.maxBranches = 200;

        this.treeSeed = Math.random() * 10000 | 0;
    }

    draw(seed) {
        this.branchCount = 0;
        this.treeGrow += 0.02;
        this.randSeed(seed);
        this.maxTrunk = this.randSI(this.trunkMin, this.trunkMax);
        // console.log(x, this.stageHeight, -Math.PI / 2, this.stageHeight / 5, this.maxTrunk)
        this.drawBranch(this.x, this.stageHeight, -Math.PI / 2, this.stageHeight / 5, this.maxTrunk)

    }

    drawBranch(x, y, dir, leng, width) {
        this.branchCount++;
        const treeGrowVal = (this.treeGrow > 1 ? 1 : this.treeGrow < 0.1 ? 0.1 : this.treeGrow) ** 2;

        this.ctx.lineWidth = width;
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath();
        this.ctx.lineTo(x, y);
        x += Math.cos(dir) * leng * treeGrowVal;
        y += Math.sin(dir) * leng * treeGrowVal;
        this.ctx.lineTo(x, y);
        this.ctx.stroke();

        if (this.branchCount < this.maxBranches && leng > 5 && width > 1) {
            const rDir = this.randSI() ? -1 : 1;

            this.treeGrow -= 0.2;
            this.drawBranch(
                x, y,
                dir + this.randS(this.angMin, this.angMax) * rDir,
                leng * this.randS(this.lengMin, this.lengMax),
                width * this.randS(this.widthMin, this.widthMax)
            );
            this.drawBranch(
                x, y,
                dir + this.randS(this.angMin, this.angMax) * -rDir,
                leng * this.randS(this.lengMin, this.lengMax),
                width * this.randS(this.widthMin, this.widthMax)
            );
            this.treeGrow += 0.2;
        }
    }


    animate() {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)
        this.draw(this.treeSeed)
        requestAnimationFrame(this.animate.bind(this));
    }
}