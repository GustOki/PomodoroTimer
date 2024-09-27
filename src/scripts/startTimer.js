import { isRunning, isWorkTime, remainingTime, totalTime, timerInterval } from './state.js'; // Importando variáveis globais
import { validateInput } from './validation.js';
import { formatTime, timeInputToSeconds } from './formatTime.js';
import { changeBackground } from './background.js';
import { prepareAlarmSound } from './alarm.js';
import { updateTimer } from './updateTimer.js';

const timerDisplay = document.getElementById('timer-display');
const workTimeInput = document.getElementById('work-time');
const relaxTimeInput = document.getElementById('relax-time');

const startTimer = () => {
  if (!isRunning) {
    const time = isWorkTime ? timeInputToSeconds(workTime) : timeInputToSeconds(relaxTime);
    
    if (time <= 0) {
      alert('Por favor, defina um tempo válido para trabalho e relaxamento.');
      return;
    }

    setTotalTime(time);
    setRemainingTime(time);
    changeBackground(isWorkTime);
    setIsRunning(true);
  }
};

export { startTimer };
