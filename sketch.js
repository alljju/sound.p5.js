var song;
var button;
function setup()
{
    creatCanvas(200, 200);
    song = loadSound('DUDoom.mp3',loaded);
    button = createButton('play');
    button.mousePressed(togglePlaying);
    background(20);
// musicFile.play();
}

function togglePlaying()
{
    if(!song.isPlaying()){
        song.play();
        song.setvolume(0.3);
        button.html('pause');
    }
    else{
        song.stop();
        button.html('play');
    }
}
function loaded(){
    console.log('loaded');
}
