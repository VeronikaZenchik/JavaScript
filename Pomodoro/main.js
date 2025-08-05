const buttonStart = document.querySelector(".start")
const buttonPause = document.querySelector(".pause")
const buttonReset = document.querySelector(".reset")
const timer = document.querySelector(".timer__set")


let workTime = 25 * 60; 
let breakTime = 5 * 60;
let currentTime = workTime;
let timerInterval = null;
let isRunning = false;

function updateDisplay() {
  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;
  timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

buttonStart.addEventListener("click", () => {
if (!isRunning) {
    timerInterval = setInterval(() => {
      currentTime--;
      updateDisplay();
      if (currentTime <= 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
    isRunning = true;
  }
})

buttonPause.addEventListener("click", () => {
  clearInterval(timerInterval);
  isRunning = false;
})

buttonReset.addEventListener("click", () => {
  clearInterval(timerInterval);
  currentTime  ===  workTime;
  updateDisplay();
  isRunning = false;
})
