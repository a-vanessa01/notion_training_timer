// variables

let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');

let workTime = document.getElementById('trainingInput').value;
let breakTime = document.getElementById('break').value;

document.getElementById("reset").disabled = true;
document.getElementById('pause').style.display = "none";
document.getElementById('reset').style.display = "none";
document.getElementById('start').style.display = "block";

let seconds = "00";
var pause_flag = 0;
let init = 0;
let counter = 0;
let breakcount = 0;

// display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
}

function timerFunction(workMinutes, breakMinutes) {
          //change the display
          console.log("segundos ", seconds);
          document.getElementById('minutes').innerHTML = workMinutes;
          document.getElementById('seconds').innerHTML = seconds;


          // start
          seconds = seconds - 1;

          if(seconds === 0) {
              workMinutes = workMinutes - 1;
              if(workMinutes === -1 ){
                  if(breakCount % 2 === 0) {
                      // start break
                      workMinutes = breakMinutes;
                      breakCount++

                      // change the painel
                      workTittle.classList.remove('active');
                      breakTittle.classList.add('active');
                  }
                  else {
                      // continue work
                      workMinutes = workTime;
                      breakCount++

                      // change the painel
                      breakTittle.classList.remove('active');
                      workTittle.classList.add('active');
                  }
              }
              seconds = 59;
          }
}

// start timer
function start() {
      // get values
  console.log("pause_flag ", pause_flag);
  if (pause_flag == 0){
      document.getElementById("reset").disabled = false;
      document.getElementById("incrTraining").disabled = true;
      document.getElementById("decrTraining").disabled = true;
      document.getElementById("incrBreak").disabled = true;
      document.getElementById("decrBreak").disabled = true;
      workTime = document.getElementById('trainingInput').value;
      breakTime = document.getElementById('breakInput').value;
    
      seconds = 59;
    
      var workMinutes = workTime - 1;
      var breakMinutes = breakTime - 1;
    
      breakCount = 0;
    
  } else {
      workTime = document.getElementById('minutes').innerHTML;
      breakTime = document.getElementById('minutes').innerHTML;
      let seconds = document.getElementById('seconds').innerHTML;
      console.log("workTime ", workTime);
      var workMinutes = workTime;
      var breakMinutes = breakTime;
      
  }
      

      // change button
      document.getElementById('start').style.display = "none";
      document.getElementById('pause').style.display = "block";
      document.getElementById('reset').style.display = "block";
  
     timerState = setInterval(timerFunction, 1000, workMinutes, breakMinutes); // 1000 = 1s
}

function pause() {
    document.getElementById('start').style.display = "block";
    document.getElementById('pause').style.display = "none";
    pause_flag = 1; 
    clearInterval(timerState);
}

function refresh() {
   //location.reload();
    history.go(0);
}


function incrTraining() {
    var value = parseInt(document.getElementById('trainingInput').value);
    value ++;
    if (value <= 60){
      document.getElementById('trainingInput').value = value;
      document.getElementById('minutes').innerHTML = value;
    } 
}

function decrTraining() {
    var value = parseInt(document.getElementById('trainingInput').value);
    value --;
    if (value >= 1){
      document.getElementById('trainingInput').value = value;
      document.getElementById('minutes').innerHTML = value;
    }

}

function incrBreak() {
    var value = parseInt(document.getElementById('breakInput').value);
    value ++;
    if (value <= 10){
      document.getElementById('breakInput').value = value;
    } 
}

function decrBreak() {
    var value = parseInt(document.getElementById('breakInput').value);
    value --;
    if (value >= 1){
      document.getElementById('breakInput').value = value;
    } 
}

function changeTraining(minutes_changed) {
  var value = minutes_changed.value;
  if (value <= 60 && value >= 1) {
    document.getElementById('minutes').innerHTML = value;
    document.getElementById('trainingInput').value = value;
  }  
}

function changeBreak(minutes_changed) {
  var value = minutes_changed.value;
  if (value <= 10 && value >= 1) {
    document.getElementById('breakInput').value = value;
  }  
}

  

