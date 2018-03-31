var f;

function setup() {
  createCanvas(800, 600);
  player = new Forme();

}
function keyTyped(){
    if(key === ' '){
        player.forme += 1;
        player.forme %= 3;
        print(player.forme);
    }

}


function draw() {
    background(51, 110, 123);
    player.draw();

}
