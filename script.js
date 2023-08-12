const timeDisplay = document.getElementById('time');
const pomodoroButton = document.getElementById('pomodoro');
const shortBreakButton = document.getElementById('shortBreak');
const longBreakButton = document.getElementById('longBreak');

let time = 25 * 60; // Default time is 25 minutes
let timer;
let isActive = false;

function updateDisplay() {
  const minutes = Math.floor(time / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  timeDisplay.textContent = `${minutes}:${seconds}`;
}

function startTimer(duration) {
  if (isActive) {
    clearInterval(timer);
    isActive = false;
    updateDisplay();
    pomodoroButton.classList.remove('active');
    shortBreakButton.classList.remove('active');
    longBreakButton.classList.remove('active');
  } else {
    clearInterval(timer);
    time = duration * 60;
    updateDisplay();
    isActive = true;
    pomodoroButton.classList.add('active');
    shortBreakButton.classList.add('active');
    longBreakButton.classList.add('active');
    timer = setInterval(() => {
      time--;
      if (time < 0) {
        clearInterval(timer);
        time = 0;
        isActive = false;
        updateDisplay();
        pomodoroButton.classList.remove('active');
        shortBreakButton.classList.remove('active');
        longBreakButton.classList.remove('active');
      } else {
        updateDisplay();
      }
    }, 1000);
  }
}

pomodoroButton.addEventListener('click', () => startTimer(25));
shortBreakButton.addEventListener('click', () => startTimer(5));
longBreakButton.addEventListener('click', () => startTimer(10));
updateDisplay();
