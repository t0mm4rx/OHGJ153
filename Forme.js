function Forme(x,y) {

  this.size = 50;

  this.pos = createVector(x,y);
  //this.pos = {x: width / 2, y: height / 2};

  this.forme = 2; // 0 = carré, 1 = triangle, 2 = rond

  this.draw = function() {
    fill(0);
    rectMode(CENTER);
    if (this.forme == 0) {
      rect(this.pos.x, this.pos.y, this.size, this.size);
    } else if (this.forme == 1) {
      triangle(this.pos.x - this.size / 2, this.pos.y + this.size / 2, this.pos.x, this.pos.y - this.size / 2, this.pos.x + this.size / 2, this.pos.y + this.size / 2);
    } else if (this.forme == 2) {
      ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
  }

}
