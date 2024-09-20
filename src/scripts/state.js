// Estado global
let isRunning = false;
let isWorkTime = true;
let remainingTime = 0;
let totalTime = 0;
let timerInterval = null;
let cycleCount = 0; // Para gerenciar múltiplos ciclos

export { isRunning, isWorkTime, remainingTime, totalTime, timerInterval, cycleCount };
