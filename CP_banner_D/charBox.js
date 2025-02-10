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
    // draw box
    noStroke();
    fill(255, 255, 0);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    // draw text
    fill(0);
    stroke(0);
    strokeWeight(1.5);
    // noStroke();
    textAlign(CENTER, CENTER);
    text(this.ch, 0, 0);
    pop();
  }
}
