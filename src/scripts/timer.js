import { startTimer } from './startTimer.js';
import { pauseTimer } from './pauseTimer.js';
import { resetTimer } from './resetTimer.js';
import { isRunning } from './state.js';

document.addEventListener('DOMContentLoaded', () => {
  const timerDiv = document.getElementById('timer');
  const stopDiv = document.getElementById('stop');

  timerDiv.addEventListener('click', () => {
    isRunning ? pauseTimer() : startTimer();
  });

  stopDiv.addEventListener('click', resetTimer);
});


