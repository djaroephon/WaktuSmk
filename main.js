var start = document.getElementById("start");
var reset = document.getElementById("reset");

var jam = document.getElementById("hour");
var menit = document.getElementById("minute");
var detik = document.getElementById("sec");
var stopBtn = document.getElementById("stop")

//input

var startTime = null;

function timer(){
    if(jam.value == 0 && menit.value == 0 && detik.value == 0){
        jam.value = 0;
        menit.value = 0;
        detik.value = 0;
    }
    else if(detik.value != 0 ){
        detik.value--;
    }
    else if(menit.value != 0 && detik.value == 0 ){
        detik.value = 59;
        menit.value --;
    }
    else if(jam.value != 0 && menit.value == 0 ){
        menit.value = 60;
        jam.value --;
    }
    if (detik.value < 10  && menit.value == 0) {
        detik.style.color = 'red';
    } else {
        detik.style.color = ''; // Reset to default color
    }
    
    return timer;
}

function stopTimer(){
    clearInterval(startTime);
}



start.addEventListener("click" , function(){
    function startInterval(){
        startTime = setInterval(function() {
            timer();
        }, 1000);
    }
startInterval()
})


reset.addEventListener("click", function(){
    jam.value = null;
    menit.value = null;
    detik.value = null;
    stopTimer();
})