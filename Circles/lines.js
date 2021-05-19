let epochs = 0;
let x = 10;
let y = 10;
let width = window.innerWidth;
function setup() {
    createCanvas(width, window.innerHeight);
    background(0);
    // background(255);
    // createCanvas(window.innerHeight / 2,window.innerHeight / 2);
    // circle(500, 500, 30);

}

function pushRandomColor() {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    colors.push(randomColor);
}

function draw() {
    
    // let colors =["#5bc0eb","#fde74c","#9bc53d","#e55934","#fa7921"];
    // let colors =["#454851","#73956f","#7bae7f","#95d7ae","#fceff9"];
    // let colors =["#D00000","#FFBA08","#3F88C5","#032B43","#136F63",];
    let colors = ["#50514f", "#cbd4c2", "#FFFCFF", "#247BA0", "#C3B299", "#18F265", "#0b7d33", "#809c89", "#04e051", "#0b8a37"];
    // let x = random(window.innerWidth)
    // let y = random(window.innerHeight)


    let randColor = colors[Math.floor(random(1) * 10) % colors.length];
    // let randColor = colors[Math.floor(x % colors.length)];
    // print(x%colors.length)
    // randColor = "#FFFFFF";

    // if(x < 200)
    // randColor = 0;
    // else if(x < 400)
    // randColor = 1;
    // else if(x < 600)
    // randColor = 2;
    // else if(x < 800)
    // randColor = 3;
    // else if(x < 1000)
    // randColor = 4;
    

    let randomResizeFactor = random(1);

    // x = 1/x;
    // y = y;
    noStroke();
    fill(randColor)
    // stroke(colors[Math.floor(random(1) * 10) % colors.length])
    // // circle right corner
    // if (x > y)
    // if (y > x)
    //     ellipse(x, y, 20 * randomResizeFactor);
    // else
    //     ellipse(y, x, 20 * randomResizeFactor);

    strokeWeight(5 * 1);
    stroke(randColor);
    line(x, y, y, x);
    epochs++;
    if (epochs % 2 == 0)
        background(0, 0, 0, 10)
        // background(0, 0, 0, 3)
    if(x>window.innerWidth){
        x = 10;
    }
    x += 3;

}
