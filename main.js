var player;
var enemies = new Array();
var sSuccess, sChange, sMusic, sDeath;

function preload() {
  sSuccess = loadSound("res/success.wav");
  sChange = loadSound("res/change.wav");
  sDeath = loadSound("res/death.wav");
  sMusic = loadSound("res/music.wav");
}

function setup() {
  createCanvas(800, 800);
  enemies.push(new Forme(0, 0));
  enemies.push(new Forme(0, 0));
  player = new Forme(width/2,height/2);

  sMusic.amp(0.5);
  //sMusic.loop();

}
function keyTyped(){
    if(key === ' '){
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

}
