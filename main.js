var f;
var soundChange, soundDeath, soundSuccess, music;

function preload() {
  soundChange = loadSound('res/change.wav');
  soundDeath = loadSound('res/death.wav');
  soundSuccess = loadSound('res/success.wav');
  music = loadSound('res/music.wav');
}

function setup() {
  createCanvas(800, 600);
  player = new Forme();
  music.amp(0.2);
  //music.loop();

}
function keyTyped(){
    if(key === ' '){
        player.forme += 1;
        player.forme %= 3;
        print(player.forme);
        soundChange.amp(random(0.5, 0.8));
        soundChange.rate(random(0.9, 1.1));
        soundChange.play();
    }

}


function draw() {
    background(51, 110, 123);
    player.draw();

}
