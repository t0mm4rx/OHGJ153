function Forme(x,y,f,dir) {

  this.size = 50;

  this.pos = createVector(x,y);
  //this.pos = {x: width / 2, y: height / 2};

  this.forme = f; // 0 = carré, 1 = triangle, 2 = rond
  this.dir = dir; // -1 = player; 0 = haut, 1 = bas, 2 = gauche, 3 = droite
  this.speed = 3;

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

    if (this.dir == 0) {
        this.pos.y += this.speed;
    }
    if (this.dir == 1) {
this.pos.y -= this.speed;
    }
    if (this.dir == 2) {
this.pos.x += this.speed;
    }
    if (this.dir == 3) {
this.pos.x -= this.speed;
    }

  }

}
