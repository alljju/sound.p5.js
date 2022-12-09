// SONGS
var mama
var record
var alien

// MUSIC STUFF
let vol
let amp
let shape_size
let i
let j

// IMAGES
let explode
let vinyl
let heart
let calm

// ROTATIONS
let angle = 0;


function preload(){
// SOUND
mama = loadSound('BackDown.mp3')
record = loadSound('DUDoom.mp3')
alien = loadSound('JikJin.mp3')
// IMAGES
explode = loadImage('explosion.png')
vinyl = loadImage('vinyl.png')
calm = loadImage('calm.png')
heart = loadImage('heart.png')
}

function setup() {
createCanvas(640, 480);
amp = new p5.Amplitude()
// button1=createButton(VolumeUp);
// button1.mousePressed(VOLUME);
}

// function VOLUME(){
//     a = a+0.1
//     alien.setVolume(a);
// }

function draw() {

// SONG 1: ME AND YOUR MAMA
if(key == '1'){
  vol = amp.getLevel()
  shape_size = map(vol, 0, 0.2, 30, 200)

// MID VOLUME
  if(vol >= 0.1){
    background(0)
    noFill()
    ellipse(320,240,200,shape_size)
    ellipse(320,240,350,shape_size)
    ellipse(320,240,400,shape_size)

    fill(255,0,0)
    ellipse(320,240,200,shape_size)
  }

// LOUD VOLUME
  if(vol >= 0.2){
    background(random(255),0,random(255))
    imageMode(CENTER)
    image(explode, 320,240, shape_size, shape_size)
  }

// LOW VOLUME
  if(vol <= 0.1){
    background(0)
    strokeWeight(1)
    stroke(255)
    noFill()
    ellipse(320,240,200,shape_size)
  }
  
} 

// SONG 2: PUT YOUR RECORDS ON
if(key == '2'){
  angleMode(DEGREES)

  vol = amp.getLevel()
  shape_size = map(vol, 0.1, 0.6, 50, 250)

// if(mouseIsPressed == true){
//   image(heart,320,240,shape_size, shape_size)
// } else{
//   image(calm,320,240,shape_size, shape_size)
// }

fill(252,186,3)
rectMode(CENTER)
rect(320,240,280)

fill(0,0,255)
circle(320,240,shape_size)

translate(320,240)
rotate(angle)
imageMode(CENTER)
image(vinyl,0,0,250,250)

angle = angle + 1

}

// SONG 3: ALIEN SUPERSTAR
if(key == '3'){
    background(255);
    vol = amp.getLevel()
    fill(255, 0, 0);
    image(heart,alien.currentTime()*20, 480-amp.getLevel()*1000, 20, 20);

}

} // END OF DRAW

function keyPressed(){
if(key == '1'){
  mama.play()
} else{
  mama.stop()
}

if(key == '2'){
  record.play()
} else{
  record.stop()
}

if(key == '3'){
  alien.play()
} else{
  alien.stop()
}

if(key == 'q'){
  mama.stop()
  record.stop()
  alien.stop()
}
  
}