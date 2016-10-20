var x = 0;


function setup() {
createCanvas(800, 500);
}

function draw() {
 while (x < windowWidth) {
   stroke(0);
   strokeWeight(10);
   line(x, random(200, 400), x, windowHeight);
   x += 50;
 }
  
}