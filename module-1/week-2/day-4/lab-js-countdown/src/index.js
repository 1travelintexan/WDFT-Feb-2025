const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
const startBtnElement = document.querySelector("#start-btn");
const timerElement = document.querySelector("#time");
const toastDivElement = document.getElementById("toast");
const closeToastElement = document.getElementById("close-toast");
const toastMessageElement = document.getElementById("toast-message");
// ITERATION 1: Add event listener to the start button
startBtnElement.addEventListener("click", () => {
  startCountdown();
});
closeToastElement.addEventListener("click", () => {
  toastDivElement.classList.remove("show");
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  startBtnElement.disabled = true;
  showToast("⏰ Final countdown! ⏰");
  timer = setInterval(() => {
    remainingTime--;
    timerElement.innerText = remainingTime;
    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    } else if (remainingTime <= 0) {
      clearInterval(timer);
      showToast("Lift off! 🚀");
      setTimeout(() => {
        remainingTime = 10;
        timerElement.innerText = remainingTime;
        startBtnElement.disabled = false;
      }, 3000);
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  toastMessageElement.innerText = message;
  toastDivElement.classList.add("show");
  setTimeout(() => {
    toastDivElement.classList.remove("show");
  }, 3000);
}
