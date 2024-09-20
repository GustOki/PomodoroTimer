import { isRunning, timerInterval } from './state.js'; // Importando variáveis globais

const pauseTimer = () => {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
};

export { pauseTimer };
