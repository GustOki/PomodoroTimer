import { remainingTime, totalTime, isWorkTime, timerInterval, isRunning } from './state.js'; // Importando variáveis globais
import { formatTime } from './formatTime.js';
import { changeBackground } from './background.js';
import { startTimer } from './startTimer.js';
import { playAlarmSound } from './alarm.js';

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

    // Tocar o alarme ao final de um ciclo
    playAlarmSound();

    // Reiniciar o timer para o próximo ciclo
    if (isWorkTime) {
      startTimer();
    } else {
      changeBackground(isWorkTime);
    }
  }
};

export { updateTimer };
