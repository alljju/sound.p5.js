let musicFile;
function setup()
{
soundFormats('mp3','ogg');
musicFile = loadSound('DUDoom',loadMusic);
// musicFile.play();
}

function loadMusic()
{
musicFile.play(); //노래
}
