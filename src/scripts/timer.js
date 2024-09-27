import { startTimer } from './startTimer.js';
import { pauseTimer } from './pauseTimer.js';
import { resetTimer } from './resetTimer.js';
import { isRunning } from './state.js';
import { prepareAlarmSound } from './alarm.js';

document.addEventListener('DOMContentLoaded', () => {
  const timerDiv = document.getElementById('timer');
  const stopDiv = document.getElementById('stop');

  timerDiv.addEventListener('click', () => {
    // Garantir que o som é preparado somente após a interação
    prepareAlarmSound();

    // Iniciar ou pausar o cronômetro com base no estado
    isRunning ? pauseTimer() : startTimer();
  });

  stopDiv.addEventListener('click', resetTimer);
});
