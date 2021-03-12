let xRight = window.innerWidth;
let xLeft = 0;
let y = 0;
// let spacing = window.innerWidth / 100;
let spacing = 60;
let epochs = 0;
let deviaton = 0;
let colors = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // createCanvas(window.innerHeight / 2,window.innerHeight / 2);
}

function pushRandomColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  colors.push(randomColor);
}

function draw() {
  // background(0,225,225);
  // for (let i = 0; i < 100; i++) {
  //     // if(i%5 == 0)

  //     // setTimeout(() => {  console.log("World!");background(0,255,255,5); }, 2000);
  //     // setTimeout(() => {  console.log("Hello!");background(0,255,255,5); }, 1000);
  // }
  let colors = ["#50514f", "#cbd4c2", "#FFFCFF", "#247BA0", "#C3B299", "#18F265", "#0b7d33", "#809c89", "#04e051", "#0b8a37"];
  // let colors = ["#18F265", "#0b7d33", "#809c89", "#04e051", "#0b8a37"];
  // randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  // colors.push(randomColor);
  // randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  // colors.push(randomColor);


  // if(probability<)
  // pushRandomColor()
  if (random(1) > 0.1)
    strokeWeight(9);
  else
    strokeWeight(8);
  stroke(colors[Math.floor(random(1) * 10) % colors.length]);
  // print(colors[Math.floor(random(1) * 10) % 5])
  let probability = 0.6;
  let rand = random(1)
  // let spacing = random(10, 100)
  if (rand < probability) {
    line(xLeft, y, xLeft + spacing, y + spacing);
  } else {
    line(xLeft, y + spacing, xLeft + spacing, y);
  }
  xLeft = xLeft + spacing;
  if (xLeft > width / 2 - spacing) {
    xLeft = 0;
    y += spacing;
  }

  if (rand < probability) {
    line(xRight, y, xRight - spacing, y + spacing);
  } else {
    line(xRight, y + spacing, xRight - spacing, y);
  }
  xRight = xRight - spacing;
  if (xRight < width / 2 + spacing) {
    xRight = width;
    // y += spacing;
  }
  if (y > height) {
    let xRight = window.innerWidth;
    let xLeft = 0;
    y = 0;

    // background(0,0,0,100);
    epochs++;
    background(0, 0, 0, 200);
    if (epochs == 2) {
      epochs = 0;
      background(0, 0, 0, 100);

      // deviaton++;
      // xRight = xRight*deviaton/13;
    }

  }

}