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

// audio alarme
const alarmSound = new Audio('./sound/alarme.mp3');
alarmSound.volume = 1.0; 

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

// função para formatar o tempo
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

// função para mudar o fundo
const changeBackground = () => {
  const { background, footer: footerColor } = isWorkTime ? backgrounds.work : backgrounds.relax;
  body.style.backgroundColor = background;
  footer.style.backgroundColor = footerColor;
};

// resetar o fundo
const resetBackground = () => {
  const { background, footer: footerColor } = backgrounds.initial;
  body.style.backgroundColor = background;
  footer.style.backgroundColor = footerColor;
};

// validação do input
const validateInput = () => {
  const workTime = workTimeInput.value;
  const relaxTime = relaxTimeInput.value;
  return workTime && relaxTime ? true : (alert('Por favor, insira os tempos de trabalho e relaxamento!'), false);
};

// função para tocar o som manualmente após interação
const startTimer = () => {
  if (!isRunning) {
    if (!validateInput()) return;

    alarmSound.play();
    alarmSound.pause();

    totalTime = isWorkTime ? timeInputToSeconds(workTimeInput.value) : timeInputToSeconds(relaxTimeInput.value);
    remainingTime = remainingTime || totalTime; 
    timerDisplay.textContent = formatTime(remainingTime);
    changeBackground();

    isRunning = true;
    timerInterval = setInterval(updateTimer, 1000);
  }
};

// função para atualizar o cronômetro
const updateTimer = () => {
  if (remainingTime > 0) {
    remainingTime--;
    timerDisplay.textContent = formatTime(remainingTime);
  } else {
    console.log("Tocando alarme...");
    alarmSound.play(); 

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

// função para pausar o cronômetro
const pauseTimer = () => {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
};

// função para resetar o cronômetro
const resetTimer = () => {
  clearInterval(timerInterval);
  isRunning = false;
  remainingTime = null;
  cycleCount = 0;
  timerDisplay.textContent = 'TIMER';
  resetBackground();
  isWorkTime = true;
};

// listeners para controle do timer
timerDiv.addEventListener('click', () => {
  isRunning ? pauseTimer() : startTimer();
});

stopDiv.addEventListener('click', resetTimer);
