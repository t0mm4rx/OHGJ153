var player;
var enemies = new Array(new Forme(),new Forme());


function setup() {
  var canvasW = 800;
  var canvasH = 600;

  createCanvas(canvasW, canvasH);
  player = new Forme(canvasW/2,canvasH/2);

}
function keyTyped(){
    if(key === ' '){
        player.forme += 1;
        player.forme %= 3;
    }
}


function draw() {
    background(51, 110, 123);
    player.draw();
    for (enemy in enemies){
        enemy.draw();
    }

}
