class App {
    constructor() {
        WebFont.load({
            google: {
                families: ['Hind:700']
            }
        });
    }
}

window.onload = () => {
    new App();
}