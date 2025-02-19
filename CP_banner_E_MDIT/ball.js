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

  isOffScreen() {
    if (this.body.position.y > height || this.body.position.y < 0) return true;
    else return false;
  }

  remove() {
    Composite.remove(engine.world, this.body);
  }

  show() {
    let pos = this.body.position;
    let r = this.body.circleRadius;
    noStroke();
    fill(0, 0, 150);
    ellipse(pos.x, pos.y, r * 2);
  }
}