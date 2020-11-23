const TOTAL = 12;

export class Particle {
    constructor(pos, color, ctx) {
        this.color = color;

        const ranMax = 20;
        this.points = [{
            x: pos.x,
            y: pos.y,
        }];

        for (let i = 0; i < TOTAL; i++) {
            const prev = this.points[i - 1];
            this.points.push(this.setTandom(prev, ranMax));
        }

        this.draw(ctx);
    }

    setTandom(pos, gap) {
        return {
            x: pos.x + Math.random() * (gap + gap) - gap,
            y: pos.y + Math.random() * (gap + gap) - gap,
        }
    }
}