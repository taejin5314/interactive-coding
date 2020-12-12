export class Grass {
    constructor(color) {
        this.color = color;
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.moveTo(0, this.stageHeight);
        for (let i = 0; i < this.stageWidth; i += Math.random() * 5) {
            let w = Math.random() * 5;
            let h = Math.random() * 10 + 10;
            ctx.quadraticCurveTo(i, this.stageHeight - (h - 10), i + w, this.stageHeight - h)
            ctx.quadraticCurveTo(i + w, this.stageHeight - (h - 10), i + w / 2, this.stageHeight)
        }
        ctx.stroke();
        ctx.fill();
    }
}