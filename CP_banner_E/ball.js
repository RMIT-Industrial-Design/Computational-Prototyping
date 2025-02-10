class Ball {
  constructor(x, y, r) {
    let options = {
      friction: 0.5,
      restitution: 0.5,
    };
    this.body = Bodies.circle(x, y, r, options);
    // add the body to the world
    Composite.add(engine.world, [this.body]);
  }

  show() {
    let pos = this.body.position;
    let r = this.body.circleRadius;
    noStroke();
    fill(0, 0, 150);
    ellipse(pos.x, pos.y, r * 2);
  }
}

class cursorBall extends Ball {
  constructor(x, y, r) {
    super(x, y, r);
  }

  show() {
    let r = this.body.circleRadius;
    noStroke();
    noFill();
    ellipse(mouseX, mouseY, r * 2);
  }
}
