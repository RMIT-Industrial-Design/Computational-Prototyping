class CharBox extends Box {
  constructor(x, y, w, h, ch, s) {
    super(x, y, w, h);
    this.w = w;
    this.h = h;
    this.ch = ch;
    this.s = s;
  }

  show() {
    let pos = this.body.position;
    let ang = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(ang);
    // draw box
    noStroke();
    fill(200, 200, 0);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    // draw text
    textFont('Courier New', this.s);
    fill(0);
    stroke(0);
    strokeWeight(this.s/10);
    textAlign(CENTER, CENTER);
    text(this.ch, 0, 0);
    pop();
  }
}
