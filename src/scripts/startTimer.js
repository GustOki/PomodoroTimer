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
    // Validar a entrada do usuário
    if (!validateInput(workTimeInput, relaxTimeInput)) return;

    // Prepara o áudio do alarme
    prepareAlarmSound();

    // Configurar o tempo total
    totalTime = isWorkTime ? timeInputToSeconds(workTimeInput.value) : timeInputToSeconds(relaxTimeInput.value);
    remainingTime = remainingTime || totalTime;

    // Atualizar o display e fundo
    timerDisplay.textContent = formatTime(remainingTime);
    changeBackground(isWorkTime);

    // Iniciar o cronômetro
    isRunning = true;
    timerInterval = setInterval(() => updateTimer(), 1000);
  }
};

export { startTimer };
