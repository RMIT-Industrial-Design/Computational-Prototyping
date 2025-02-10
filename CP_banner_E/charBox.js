class CharBox extends Box {
  constructor(x, y, w, h, ch, s) {
    super(x, y, w, h);
    this.w = w;
    this.h = h;
    this.ch = ch;
    this.s = s;
  }

  free() {
    if (this.body.isStatic) {
      let x = this.body.position.x;
      let y = this.body.position.y;

      // delete the existing body from the world
      Composite.remove(engine.world, this.body);
      // make a new body
      let options = {
        friction: 0.5,
        restitution: 0.5,
        isStatic: false,
      };
      this.body = Bodies.rectangle(x, y, this.w, this.h, options);
      // add the new body to the world
      Composite.add(engine.world, [this.body]);
    }
  }

  show() {
    let pos = this.body.position;
    let ang = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(ang);
    // draw box
    noStroke();
    fill(230, 230, 0);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    // draw text
    textFont("Courier New", this.s);
    fill(0);
    stroke(0);
    strokeWeight(this.s / 12);
    textAlign(CENTER, CENTER);
    text(this.ch, 0, 0);
    pop();
  }
}
