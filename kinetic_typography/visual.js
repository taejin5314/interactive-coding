import { Text } from './text.js';
import { Particle } from './particle.js';

export class Visual {
    constructor() {
        this.text = new Text();

        this.texture = PIXI.Texture.from('particle.png');

        this.particles = [];

        this.mouse = {
            x: 0,
            y: 0,
            radius: 100
        };

        document.addEventListener('pointermove', this.onMove.bind(this), false);
    }

    onMove(e) {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
    }
}