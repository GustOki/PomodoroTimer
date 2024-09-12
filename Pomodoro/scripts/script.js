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

// Carregar o áudio do alarme
const alarmSound = new Audio('./alarme.mp3');
alarmSound.volume = 1.0; // Ajustar o volume

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

// Função para formatar o tempo
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

// Função para mudar o fundo
const changeBackground = () => {
  const { background, footer: footerColor } = isWorkTime ? backgrounds.work : backgrounds.relax;
  body.style.backgroundColor = background;
  footer.style.backgroundColor = footerColor;
};

// Resetar o fundo
const resetBackground = () => {
  const { background, footer: footerColor } = backgrounds.initial;
  body.style.backgroundColor = background;
  footer.style.backgroundColor = footerColor;
};

// Validação do input
const validateInput = () => {
  const workTime = workTimeInput.value;
  const relaxTime = relaxTimeInput.value;
  return workTime && relaxTime ? true : (alert('Por favor, insira os tempos de trabalho e relaxamento!'), false);
};

// Função para tocar o som manualmente após interação
const startTimer = () => {
  if (!isRunning) {
    if (!validateInput()) return;

    alarmSound.play(); // Tocar o áudio ao iniciar para desbloquear o navegador
    alarmSound.pause(); // Pausar imediatamente após tocar para só tocar nos momentos certos

    totalTime = isWorkTime ? timeInputToSeconds(workTimeInput.value) : timeInputToSeconds(relaxTimeInput.value);
    remainingTime = remainingTime || totalTime; 
    timerDisplay.textContent = formatTime(remainingTime);
    changeBackground();

    isRunning = true;
    timerInterval = setInterval(updateTimer, 1000);
  }
};

// Função para atualizar o cronômetro
const updateTimer = () => {
  if (remainingTime > 0) {
    remainingTime--;
    timerDisplay.textContent = formatTime(remainingTime);
  } else {
    console.log("Tocando alarme...");
    alarmSound.play(); // Deve tocar ao fim do timer

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

// Função para pausar o cronômetro
const pauseTimer = () => {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
};

// Função para resetar o cronômetro
const resetTimer = () => {
  clearInterval(timerInterval);
  isRunning = false;
  remainingTime = null;
  cycleCount = 0;
  timerDisplay.textContent = 'TIMER';
  resetBackground();
  isWorkTime = true;
};

// Listeners para controle do timer
timerDiv.addEventListener('click', () => {
  isRunning ? pauseTimer() : startTimer();
});

stopDiv.addEventListener('click', resetTimer);
