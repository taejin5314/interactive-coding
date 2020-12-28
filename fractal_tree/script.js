const CANVAS_WIDTH = 480;
const CANVAS_HEIGHT = 620;

let snowBgCanvas;
let branchCanvas;

function initializeCanvas(canvasID) {
    const canvas = document.getElementById(canvasID);
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    return canvas;
}

function main() {
    console.log('test');
    snowBgCanvas = initializeCanvas('canvasSnowBackground');
    branchCanvas = initializeCanvas('canvasTreeBranches')
}