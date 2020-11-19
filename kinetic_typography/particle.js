const FRICTION = 0.98;
const COLOR_SPEED = 0.12;
const MOVE_SPEED = 0.88;

export class Particle {
    constructor(pos, texture) {
        this.sprite = new PIXI.Sprite(texture);
        this.sprite.scale.set(0.06);

        this.savedX = pos.x;
        this.savedY = pos.y;
        this.x = pos.x;
        this.y = pos.y;
        this.sprite.x = this.x;
        this.sprite.y = this.y;
        this.vx = 0;
        this.vy = 0;
        this.radius = 10;

        this.savedRgb = 0xf33163;
        this.rgb = 0xf3316e;
    }

    collide() {
        this.rgb = 0x451966;
    }
}