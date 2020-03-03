let bg;
let y = 0;
let size = 30;
let p;
let rock;

function preload() {
rock = loadImage("rock.png") 
}

function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  bg = loadImage('beach1.png');
  createCanvas(720, 400);
  angleMode(DEGREES);
  colorMode(RGB, 255);
  
  p = new Particle();
}

function draw() {
  background(bg);
  let lerpValue = map(sin(frameCount), -1, 1, 0, 1);
  
  p.draw(lerpValue);
}

class Particle {
  
    constructor() {
      this.srcPos = createVector(random(width), random(height));
      this.dstPos = createVector(random(width), random(height));
      
      this.srcColor = color(255, 0, 0);
      this.dstColor = color(0, 0, 255);
      this.size = 20;
    }
    
    
    draw(_lerpAmount) {
      
      let lerpedColor = lerpColor(this.srcColor, this.dstColor, _lerpAmount);
      
      let lerpPosition = p5.Vector.lerp(this.srcPos, this.dstPos, _lerpAmount);
      fill(lerpedColor);
      
      image(rock, lerpPosition.x, lerpPosition.y, size);
      
    }
    
  }
