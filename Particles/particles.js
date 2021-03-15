const particles = [];
let colors = ["#18F265", "#0b7d33", "#809c89", "#04e051", "#0b8a37"];
let colors2 = ["#50514f", "#cbd4c2", "#FFFCFF", "#247BA0", "#C3B299"];
let innerW = innerWidth;
let innerH = innerHeight;

function euclidianDistance(x1, y1, x2, y2) {
  let a = x1 - x2;
  let b = y1 - y2;
  return Math.sqrt(a * a + b * b);
}

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
  for (let i = 0; i < 2; i++) {
    let p = new Particle();
    particles.push(p);

  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    // if(random(1) < 0.5)
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    } else if (euclidianDistance(mouseX, mouseY, particles[i].x, particles[i].y) < 100) {
      // particles.splice(i, 1);
      // particles[i].vx *= 1.5;
      // particles[i].vy *= random(1);
      // particles[i].alpha = 255;
      
      // particles[i].alpha -= 50;
      // let xN = 2 * particles[i].x - mouseX;
      // let yN = 2 * particles[i].y - mousey;
      // print(xN, yN)

      // particles[i].x = xN;
      // particles[i].y = yN;
      // print("cloooose");
      // xParticle xMouse xN
      //   particles[i].vy = yN;
      //   particles[i].vx = xN;

      // if (random(1) < 0.5)
      //   particles[i].vy = random(5, 1);
      // else
      //   particles[i].vy = random(-5, -1);
      //   particles[i].vx = random(-4, 5);

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
    // if()
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 1;
  }

  show() {
    noStroke();
    //stroke(255);
    // fill(0, this.alpha);
    stroke(255, this.alpha);
    // stroke(255, this.alpha);
    // stroke(colors[Math.floor(random(1) * 10) % colors.length]);
    // fill(this.color);
    // alpha(this.alpha); 

    ellipse(this.x, this.y, 20);
  }


}