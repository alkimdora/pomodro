const timeDisplay = document.getElementById('time');
const pomodoroButton = document.getElementById('pomodoro');
const shortBreakButton = document.getElementById('shortBreak');
const longBreakButton = document.getElementById('longBreak');
const startStopButton = document.getElementById('startStop');

let time = 25 * 60; // Varsayılan süre 25 dakika
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
    startStopButton.textContent = 'Start';
    startStopButton.classList.remove('active');
  } else {
    clearInterval(timer);
    time = duration * 60;
    updateDisplay();
    isActive = true;
    startStopButton.textContent = 'Stop';
    startStopButton.classList.add('active');
    timer = setInterval(() => {
      time--;
      if (time < 0) {
        clearInterval(timer);
        time = 0;
        isActive = false;
        startStopButton.textContent = 'Start';
        startStopButton.classList.remove('active');
      }
      updateDisplay();
    }, 1000);
  }
}

pomodoroButton.addEventListener('click', () => {
  time = 25 * 60;
  updateDisplay();
});

shortBreakButton.addEventListener('click', () => {
  time = 5 * 60;
  updateDisplay();
});

longBreakButton.addEventListener('click', () => {
  time = 10 * 60;
  updateDisplay();
});

startStopButton.addEventListener('click', () => {
  if (time > 0) {
    startTimer(time / 60);
  }
});

updateDisplay();
