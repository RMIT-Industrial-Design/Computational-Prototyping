// Title Image for Computational Prototyping
// Desplaying on Canvas with <frame>

// module aliases
let Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

let engine;
let world;
let title = "";

// create boxes and a ground
let boxes = [];
let charBoxes = [];
let ground;

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  ground = new Boundary(width/4, 200, width, 20);

  // create a title
  let title = 'Course Overview';
  let x = 30;
  for (let ch of title) {
    if (ch !== ' '){
      charBoxes.push(new CharBox(x, 150, 40, 40, ch));
    }
    x += 50;
  }

}

function mouseDragged(){
  boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));
}

function draw() {
  background(20);
  Engine.update(engine);
  
  // Write title on screen
  fill(255);
  noStroke();
  textSize(24);
  textFont('Courier New');
  text(title, 30, 50);
  
  // randomly add new boxes
  if (random(1) < 0.01){
    let num = floor(random(5));
    for (let i = 0; i < num; i++){
        boxes.push(new Box(width/2, 50, random(10, 40), random(10, 40)));
    }
    
  }

  for(let box of boxes){
    box.show();
  }
  for(let box of charBoxes){
    box.show();
  }

  ground.show();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
