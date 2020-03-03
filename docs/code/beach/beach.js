let w = 500;
let h = 500;
let size = 20;
let p;

function setup() {
  createCanvas(w, h);
  angleMode(DEGREES);
  colorMode(RGB, 255);
  
  p = new Particle();
  
}

function draw() {
  background(60);
  
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
  
  draw(_lerpValue) {
    
    let lerpedColor = lerpColor(this.srcColor, this.dstColor, _lerpValue);
    
    let lerpPosition = p5.Vector.lerp(this.srcPos, this.dstPos, _lerpValue);
    
    fill(lerpedColor);
    ellipse(lerpPosition.x, lerpPosition.y, size);
  }
  
  
}