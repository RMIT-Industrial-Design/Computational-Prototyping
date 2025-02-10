class CharBox extends Box {
  constructor(x, y, w, h, ch) {
    super(x, y, w, h);
    this.w = w;
    this.h = h;
    this.ch = ch;
  }

  show() {
    let pos = this.body.position;
    let ang = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(ang);
    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    text(this.ch, 0, 0);
    stroke(200);
    strokeWeight(0.5);
    noFill();
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
