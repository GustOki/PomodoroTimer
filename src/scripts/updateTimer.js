import { remainingTime, totalTime, isWorkTime, timerInterval, isRunning } from './state.js'; // Importando variáveis globais
import { formatTime } from './formatTime.js';
import { changeBackground } from './background.js';
import { startTimer } from './startTimer.js';
import { prepareAlarmSound } from './alarm.js';

const timerDisplay = document.getElementById('timer-display');

const updateTimer = () => {
  if (remainingTime > 0) {
    remainingTime -= 1;
    timerDisplay.textContent = formatTime(remainingTime);
  } else {
    clearInterval(timerInterval);
    isRunning = false;

    // Alterar entre Work e Relax
    isWorkTime = !isWorkTime;
    prepareAlarmSound();

    if (isWorkTime) {
      startTimer();
    } else {
      changeBackground(isWorkTime);
    }
  }
};

export { updateTimer };
