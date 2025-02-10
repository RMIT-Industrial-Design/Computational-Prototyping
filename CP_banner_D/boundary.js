class Boundary {
  constructor(x, y, w, h) {
    let options = {
      friction: 0.5,
      restitution: 0.5,
      isStatic: true,
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    // add the body to the world
    Composite.add(engine.world, [this.body]);
  }

  show() {
    noStroke();
    fill(200,0,0);
    beginShape();
    for (let a of this.body.vertices) {
      vertex(a.x, a.y);
    }
    endShape(CLOSE);
  }
}
