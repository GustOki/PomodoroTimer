let isRunning = false;
let isWorkTime = true;
let timerInterval;
let totalTime; 
let remainingTime;
let cycleCount = 0;
let maxCycles = Infinity;

const timerDisplay = document.getElementById('timer-display');
const workTimeInput = document.getElementById('work-time');
const relaxTimeInput = document.getElementById('relax-time');
const timerDiv = document.getElementById('timer');
const stopDiv = document.getElementById('stop');
const body = document.body;
const footer = document.querySelector('footer');

// objeto
const backgrounds = {
  work: {
    background: 'var(--background-work)',
    footer: 'var(--background-footer-work)',
  },
  relax: {
    background: 'var(--background-relax)',
    footer: 'var(--background-footer-relax)',
  },
  initial: {
    background: 'var(--background-inicial)',
    footer: 'var(--background-footer-inicial)',
  },
};

// arrow function para formatar o tempo
const formatTime = (seconds) => {
  const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
};

const timeInputToSeconds = (input) => {
  const [hours, minutes] = input.split(':').map(Number);
  return (hours * 3600) + (minutes * 60);
};

// desestruturação do fundo e rodapé para serem dinâmicos
const changeBackground = () => {
  const { background, footer: footerColor } = isWorkTime ? backgrounds.work : backgrounds.relax;
  body.style.backgroundColor = background;
  footer.style.backgroundColor = footerColor;
};

// reset background
const resetBackground = () => {
  const { background, footer: footerColor } = backgrounds.initial;
  body.style.backgroundColor = background;
  footer.style.backgroundColor = footerColor;
};

// validação do input via operador ternário e template literals
const validateInput = () => {
  const workTime = workTimeInput.value;
  const relaxTime = relaxTimeInput.value;
  return workTime && relaxTime ? true : (alert('Por favor, insira os tempos de trabalho e relaxamento!'), false);
};

// arrow function para iniciar o cronômetro
const startTimer = () => {
  if (!isRunning) {
    if (!validateInput()) return;

    totalTime = isWorkTime ? timeInputToSeconds(workTimeInput.value) : timeInputToSeconds(relaxTimeInput.value);
    remainingTime = remainingTime || totalTime; // Continuar do ponto onde parou
    timerDisplay.textContent = formatTime(remainingTime);
    changeBackground();

    isRunning = true;
    timerInterval = setInterval(updateTimer, 1000);
  }
};

// update timer
const updateTimer = () => {
  if (remainingTime > 0) {
    remainingTime--;
    timerDisplay.textContent = formatTime(remainingTime);
  } else {
    clearInterval(timerInterval);
    isRunning = false;

    if (isWorkTime) {
      isWorkTime = false;
      timerDisplay.textContent = 'Relax!';
      remainingTime = null;
      setTimeout(startTimer, 2000);
    } else {
      cycleCount++;
      if (cycleCount < maxCycles) {
        isWorkTime = true;
        setTimeout(startTimer, 2000);
      } else {
        resetBackground();
        timerDisplay.textContent = 'TIMER';
        remainingTime = null;
      }
    }
  }
};

const pauseTimer = () => {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
};

// reset timer
const resetTimer = () => {
  clearInterval(timerInterval);
  isRunning = false;
  remainingTime = null;
  cycleCount = 0;
  timerDisplay.textContent = 'TIMER';
  resetBackground();
  isWorkTime = true;
};

// listeners controle do timer
timerDiv.addEventListener('click', () => {
  isRunning ? pauseTimer() : startTimer();
});

stopDiv.addEventListener('click', resetTimer);
