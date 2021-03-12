// Daniel Shiffman
// http://codingtra.in

// Simple Particle System
// https://youtu.be/UcdigVaIYAk

const particles = [];
let colors = ["#18F265", "#0b7d33", "#809c89", "#04e051", "#0b8a37"];
let colors2 = ["#50514f", "#cbd4c2", "#FFFCFF", "#247BA0", "#C3B299"];
let innerW = innerWidth;
let innerH = innerHeight;
function pushRandomColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  colors.push(randomColor);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(innerW, innerH);
}

function draw() {
  clear();
  background(0);
  for (let i = 0; i < 5; i++) {
    let p = new Particle();
    particles.push(p);
    
  }
  print(particles.length)
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
}

class Particle {

  constructor() {
    // this.x = mouseX;
    // this.y = mouseY;
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    // if (random(1) < 0.5)
    //   this.color = colors[Math.floor(random(1) * 10) % colors.length]
    // else
    //   this.color = colors2[Math.floor(random(1) * 10) % colors.length]
    if (random(1) < 0.5)
      this.vy = random(5, 1);

    else
      this.vy = random(-5, -1);
    // if(random(1) < 0.5)
    this.vx = random(-4, 5);
    this.alpha = 255;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }

  show() {
    noStroke();
    //stroke(255);
    // fill(0, this.alpha);
    fill(255, this.alpha);
    // stroke(255, this.alpha);
    // stroke(colors[Math.floor(random(1) * 10) % colors.length]);
    // fill(this.color);
    // alpha(this.alpha); 

    ellipse(this.x, this.y, 20);
  }

}