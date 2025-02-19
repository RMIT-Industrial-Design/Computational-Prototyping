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
      Body.setMass(this.body, 0.1);
      Body.setStatic(this.body, false);
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
