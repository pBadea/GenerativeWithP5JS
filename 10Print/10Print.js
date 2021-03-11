let xRight = window.innerWidth;
let xLeft = 0;
let y = 0;
let spacing = 60;
let epochs = 0;
let deviaton = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // createCanvas(window.innerHeight / 2,window.innerHeight / 2);
}

function draw() {
  // background(0,225,225);
  // for (let i = 0; i < 100; i++) {
  //     // if(i%5 == 0)

  //     // setTimeout(() => {  console.log("World!");background(0,255,255,5); }, 2000);
  //     // setTimeout(() => {  console.log("Hello!");background(0,255,255,5); }, 1000);
  // }
  var colors = ["#18F265", "#0b7d33", "#809c89", "#04e051", "#0b8a37"];
  // var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  // colors.push(randomColor);
  // randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  // colors.push(randomColor);
  // randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  // colors.push(randomColor);
  // if(probability<)

  stroke(colors[Math.floor(random(1) * 10) % colors.length]);
  // print(colors[Math.floor(random(1) * 10) % 5])
  let probability = 0.8;
  let rand = random(1)
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
    background(0,0,0,200);

    epochs++;
    if (epochs == 3) {
      epochs = 0;

      // deviaton++;
      // xRight = xRight*deviaton/13;
    }

  }

}