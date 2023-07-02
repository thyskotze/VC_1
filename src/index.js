const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [800, 800] //"A3"
  //pixelPerInch:300 //Good for prepping to print
  //animate: // to animate
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "White";
    context.fillRect(0, 0, width, height);
  };
};

canvasSketch(sketch, settings);
