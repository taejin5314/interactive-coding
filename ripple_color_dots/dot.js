const PI2 = Math.PI * 2;

export class Dot {
    constructor(x, y, radius, pixelSize, red, green, blue) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.pixelSize = pixelSize;
        this.pixelSizeHalf = pixelSize / 2;
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    animate(ctx) {

    }
}