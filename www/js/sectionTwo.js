var audioFile

window.onload = function() { 
    this.document.addEventListener('deviceready', init, false);
    init();
}

function init() {
    var btnPlay = document.getElementById('btnPlay');
    var btnPause = document.getElementById('btnPause');
    var btnStop = document.getElementById('btnStop');

    btnPlay.addEventListener('click', playAudio, false);
    btnPause.addEventListener('click', pauseAudio, false);
    btnStop.addEventListener('click', stopAudio, false);

    audioFile = document.getElementById('audioFile');
}

function playAudio() {audioFile.play();}

function pauseAudio() {audioFile.pause();}

function stopAudio() {
    pauseAudio();
    audioFile.currentTime = 0;
}