import { isRunning, remainingTime, totalTime, cycleCount, isWorkTime, timerInterval } from './state.js'; // Importando variáveis globais
import { changeBackground } from './background.js';

const resetTimer = () => {
  clearInterval(timerInterval);
  isRunning = false;
  remainingTime = totalTime;
  cycleCount = 0;
  isWorkTime = true;
  
  // Resetar o fundo
  changeBackground(false);
};

export { resetTimer };
