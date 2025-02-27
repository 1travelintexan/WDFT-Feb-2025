//js variables
let time = 0;
let ourInterval;
//html elements
const timerElement = document.getElementById("timer");
const startBtnElement = document.getElementById("start-btn");
const stopBtnElement = document.getElementById("stop-btn");
const resetBtnElement = document.getElementById("reset-btn");
//setTimeout syntax
// setTimeout(() => {
//   console.log("this runs only ONCE inside the setTimeout");
// }, 3000);

startBtnElement.addEventListener("click", () => {
  console.log("start button clicked");
  startBtnElement.style.display = "none";
  //setInterval syntax
  ourInterval = setInterval(() => {
    console.log("Time: ", time);
    time++;
    //after we increse by one, we update the DOM
    timerElement.innerText = time;
    //this will check the time variable every second and if its 5 then it will stop it
    if (time === 50) {
      //to stop an setInterval or setTimeout you would use the clearInterval
      clearInterval(ourInterval);
    }
  }, 1000);
});

//stop button event listener
stopBtnElement.addEventListener("click", () => {
  stopTimer();
});

//reset button event listener
resetBtnElement.addEventListener("click", () => {
  //updates the js variable
  time = 0;
  //updates the html element to reflect the variable
  timerElement.innerText = time;
});

function stopTimer() {
  clearInterval(ourInterval);
  startBtnElement.style.display = "inline";
}
