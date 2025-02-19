// Title Image for Computational Prototyping
// Desplaying on Canvas with <frame>

// module aliases
let Engine = Matter.Engine,
    Body = Matter.Body,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

let engine;
let world;
let title = "";

// create boxes and a ground
let balls = [];
let charBoxes = [];
let boundary1, boundary2, boundary3;

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  boundary1 = new Boundary(-10, height/2, 20, height);
  boundary2 = new Boundary(width/2, height+10, width * 2, 20);
  boundary3 = new Boundary(width+10, height/2, 20, height);

  // create line 1 of the a title
  let title = ' Computational Prototyping ';
  let x = 30;
  for (let ch of title) {
    charBoxes.push(new CharBox(x, 40, 20, 45, ch, 24));
    x += 20;
  }
  // create line 2 of the a title
  title = ' for Design ';
  x = 30;
  for (let ch of title) {
    charBoxes.push(new CharBox(x, 90, 20, 45, ch, 24));
    x += 20;
  }
  // create line 3 of the a title
  title = ' ARCH3345 ';
  x = 30;
  for (let ch of title) {
    charBoxes.push(new CharBox(x, 150, 16, 35, ch, 18));
    x += 16;
  }

  // make some balls
  for (let i = 0; i < 200; i++) {
    balls.push(new Ball(random(0, width), random(height/2, height), 10));
  }

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

  if (balls.length > 0){
    for(let i = 0; i < balls.length; i++) {
      // create force from direction of mouse
      let bForce = createVector(balls[i].body.position.x, balls[i].body.position.y);
      // let bForce = createVector(mouseX, mouseY)
      bForce.sub(mouseX, mouseY);
      // make force very weak
      bForce.setMag(0.0005);
      // apply force to body
      Body.applyForce(balls[i].body, balls[i].body.position, bForce);
      // draw the balls to screen
      balls[i].show();

      // delete balls that have escaped  off screen
      if (balls[i].isOffScreen()){
        balls[i].remove();
        balls.splice(i, 1);
      }
    }
  } else {
    let cB = random(charBoxes);
    cB.free();
  }

  for(let box of charBoxes){
    box.show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  boundary1.position(-10, height/2);
  boundary2.position(width/2, height+10);
  boundary3.position(width+10, height/2);
}
