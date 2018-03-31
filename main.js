var player;
var enemies = new Array();
var sSuccess, sChange, sMusic, sDeath;
var ended = false;

function preload() {
  sSuccess = loadSound("res/success.wav");
  sChange = loadSound("res/change.wav");
  sDeath = loadSound("res/death.wav");
  sMusic = loadSound("res/music.wav");
}

function setup() {
  createCanvas(800, 800);
  /*enemies.push(new Forme(0, 0));
  enemies.push(new Forme(0, 0));*/
  player = new Forme(width/2,height/2, 0, -1);

  sMusic.amp(0.5);
  //sMusic.loop();

}
function keyTyped(){
    if(key === ' ' && !ended){
        player.forme += 1;
        player.forme %= 3;

        sChange.amp(random(0.5, 0.8));
        sChange.rate(random(0.9, 1.1));
        sChange.play();

    }
}


function draw() {
    background(51, 110, 123);
    player.draw();
    for (enemy of enemies){
        enemy.draw();
    }

    if (frameCount % 60 == 0 && !ended) {

      let pos = random(0, 4);
      if (pos <= 1) {
          // Haut
          enemies.push(new Forme(width / 2, 50, floor(random(0, 3)), 0));
      } else if (pos <= 2) {
        // Bas
        enemies.push(new Forme(width / 2, height - 50, floor(random(0, 3)), 1));
      } else if (pos <= 3) {
        // Gauche
        enemies.push(new Forme(50, height / 2, floor(random(0, 3)), 2));
      } else {
        // Droite
        enemies.push(new Forme(width - 50, height / 2, floor(random(0, 3)), 3));
      }

    }

}
