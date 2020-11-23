import { Visual } from './visual.js';
import { Text } from './text.js';
import { setColor } from './color.js';

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        this.thumbs = [];

        WebFont.load({
            google: {
                families: ['Hind:700']
            },
            fontactive: () => {
                const ul = document.getElementsByTagName('ul')[0];
                const lis = ul.getElementsByTagName('li');
                for (let i = 0; i < lis.length; i++) {
                    const item = lis[i];
                    const img = item.getElementsByTagName('img')[0];
                    item.addEventListener('click', e => {
                        this.show(i);
                    }, false);

                    this.thumbs[i] = {
                        item,
                        img: img.src,
                    };
                }

                this.text = new Text();
            }
        });
    }
}

window.onload = () => {
    new App();
}