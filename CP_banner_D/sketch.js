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
let ground1, ground2, ground3;

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Boundary(0, 60, 650, 5);
  ground2 = new Boundary(0, 120, 1650, 5);
  ground3 = new Boundary(0, 180, 680, 5);

  // create line 1 of the a title
  let title = 'Welcome to';
  let x = 30;
  for (let ch of title) {
    if (ch !== ' '){
      charBoxes.push(new CharBox(x, 0, 30, 45, ch));
      x += 10;
    }
    x += 21;
  }
  // create line 2 of the a title
  title = 'Computational Prototyping';
  x = 30;
  for (let ch of title) {
    if (ch !== ' '){
      charBoxes.push(new CharBox(x, 110, 30, 45, ch));
      x += 10;
    }
    x += 22;
  }
  // create line 3 of the a title
  title = 'for Design';
  x = 30;
  for (let ch of title) {
    if (ch !== ' '){
      charBoxes.push(new CharBox(x, 150, 30, 45, ch));
      x += 10;
    }
    x += 22;
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

  ground1.show();
  ground2.show();
  ground3.show();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
