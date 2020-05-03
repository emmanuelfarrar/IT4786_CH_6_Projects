var player;
var rngVolume;
var intv;

window.onload = function() { 
    this.document.addEventListener('deviceready', init, false);
    init();
}

function init() {
    player = document.getElementById('player');
    rngVolume = document.getElementById('rngVolume');
    var btnPlay = document.getElementById('btnPlay');
    var btnPause = document.getElementById('btnPause');
    var btnStop = document.getElementById('btnStop');

    btnPlay.addEventListener('click', playAudio, false);
    btnPause.addEventListener('click', pauseAudio, false);
    btnStop.addEventListener('click', stopAudio, false);
    
}

function playAudio() {
    player.play();
    startTimer();
}

function pauseAudio() {player.pause();}

function stopAudio() {
    pauseAudio();
    player.currentTime = 0;
    stopTimer();
}

/** changeVolume()
 * sets the volume of the player to the value of the rngVolume <input> element
 * This works because <audio> element has a volume attribute that is a value between zero
 * and1
 */
function changeVolume() {
    player.volume = rngVolume.value;
}

/** changeSong()
 * calls stopAudio(), changes the source and calls playAusio()
 */
function changeSong(song){
    stopAudio();
    player.src = "assets/" + song + ".mp3";
    playAudio();
}

/** startTimer()
 * creates an interval using setInterval(). 
 * An interval will call a function or evaluate an expression ever set number of milliseconds. 
 * Here => we call upateTime() every 1000 millieseconds or every second.
 * setInterval() returns an ID value for the interval that has been set
 */
function startTimer() {
    intv = setInterval(updateTime, 1000);
}

/** stopTimer()
 * Passes the this ID to the clearInterval() method which stops the interval
 */
function stopTimer() {
    clearInterval(intv);
    updateTime();
}

/** updateTime()
 * is called every second while the interval is active and it sets the innerHTML of the timeOut <output>
 * element to the value of "Elapsed Time: " plus the current time value of the <audio> element in seconds.
 * - The actual value retuned from <audio> element nees to be converted to be a better format
 * this is where secsToMin() is used
 */
function updateTime() {
    document.getElementById('timeOut').innerHTML = "Elapsed Time: " + secsToMins(player.currentTime);
}

/**secsToMins()
 * takes the value and uses JS math() and converts it to a readable format
 * if/else ensures consistency by placeing a "0" in front of the elapsed number
 * of seconds if that number is lowever than "9"
 * 
 * @param {*} seconds 
 */
function secsToMins(seconds) {
    var minutes = Math.floor(seconds/60);
    var theSeconds = seconds - minutes * 60;
    if(theSeconds > 9) {
        return minutes + ":" + Math.round(theSeconds);
    } else {
        return minutes + ":0" + Math.round(theSeconds);
    }
}