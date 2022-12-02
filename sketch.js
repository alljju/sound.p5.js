// var song;
// var button;
// function setup()
// {
//     createCanvas(640, 480);
//     song = loadSound('DUDoom.mp3',loaded);
//     button = createButton('play');
//     button.mousePressed(togglePlaying);
//     jumpButton = createButton('jump');
//     jumpButton.mousePressed(jumpSong);
//     background(51);

//     song.addCue(2, changeBackground, color(0,0,255));
//     song.addCue(4, changeBackground, color(0,255,255));
//     song.addCue(6, changeBackground, color(255,255,255));

// // musicFile.play(
// }

// function changeBackground(col){
//     background(col);
// }

// function jumpSong(){
//     var len = song.duration();
//     var t=0;
//     console.log(t);
//     song.jump(t);
// }

// function togglePlaying()
// {
//     if(!song.isPlaying()){
//         song.play();
//         song.setVolume(0.3);
//         button.html('pause');
//     }
//     else{
//         song.stop();
//         button.html('play');
//     }
// }
// function loaded(){
//     console.log('loaded');
// }

// // function mousePressed(){
// //     t = t+10;
// //     musicFile.jump(t);
// // }
let musicFile;
let musicFile2;
let button;
let button2;
let button3;
let button4
var jumpButton;
var t=0;
let amp;
var rB;
let music;
function setup() {
    createCanvas(640, 480);
    soundFormats('mp3', 'ogg');
    musicFile = loadSound('DuDoom.mp3', loadMusic);
    musicFile2 = loadSound('BackDown.mp3', loadMusic);
    button = createButton("play");
    button.mousePressed(togglePlaying1);
    button2 = createButton("Music1");
    button2.mousePressed(togglePlaying2);
    music = 1;
    amp = new p5.Amplitude();
}
function togglePlaying1() {
    if (music === 1) {
        if (!musicFile.isPlaying()) {            // rB=musicFile.reverseBuffer();            musicFile.setVolume(0.5);            musicFile.rate(1);            musicFile.play();            button.html('pause');        }else{            musicFile.stop();            button.html('play');        }    }    if(music === 2){        if(!musicFile2.isPlaying()){            // rB=musicFile.reverseBuffer();            musicFile2.jump(200);            musicFile2.setVolume(0.5);            musicFile.rate(1);            musicFile2.play();            button.html('pause');        }else{            musicFile2.stop();            button.html('play');        }    } }
            function togglePlaying2() {
            if (music === 1) {
                music = 2;
                button2.html('Music2');
            } else {
                music = 1;
                button.html('Music1');
            }
        console.log(music);
        }
        function loadMusic() {
            console.log("It's Working");
        }   
        function draw() {
            console.log(amp.getLevel(), musicFile.duration());
            fill(255, 0, 0);
            ellipse(musicFile.currentTime()*20, 480-amp.getLevel()*1000, 20, 20);
            }
            }
        }
    }
