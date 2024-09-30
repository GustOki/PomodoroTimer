import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/header';
import Timer from './components/Timer/timerScreen';
import Stop from './components/Stop/stop';
import Footer from './components/Footer/footer';
import { playAlarmSound, prepareAlarmSound } from './scripts/alarm';
import { changeBackground, resetBackground } from './scripts/background';
import { formatTime, timeInputToSeconds } from './scripts/formatTime';
import Info from './components/Info/info';
import ToDoLista from './components/ToDoLista/lista';

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkTime, setIsWorkTime] = useState(true);
  const [remainingTime, setRemainingTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);
  const [workTime, setWorkTime] = useState('00:25');
  const [relaxTime, setRelaxTime] = useState('00:05');

  useEffect(() => {
    prepareAlarmSound();
  }, []);

  useEffect(() => {
    if (remainingTime > 0 && isRunning) {
      const interval = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
      setTimerInterval(interval);
      return () => clearInterval(interval);
    } else if (remainingTime === 0 && isRunning) {
      clearInterval(timerInterval);
      playAlarmSound(); // Toca o alarme ao final do tempo

      // Muda o estado e reinicia o ciclo
      setIsRunning(false);
      setIsWorkTime((prev) => !prev);
      resetBackground();

      if (!isWorkTime) {
        setCycleCount((prev) => prev + 1);
      }

      // Configura o próximo tempo após o ciclo de trabalho ou relaxamento
      const nextTime = isWorkTime ? timeInputToSeconds(relaxTime) : timeInputToSeconds(workTime);
      setRemainingTime(nextTime);
      setTotalTime(nextTime);
      changeBackground(!isWorkTime);

      // Inicia o timer automaticamente após a transição
      setIsRunning(true);
    }
  }, [remainingTime, isRunning]);

  const startTimer = () => {
    if (!isRunning) {
      const time = remainingTime || timeInputToSeconds(workTime); // Use remainingTime se já existir
      setRemainingTime(time);
      setTotalTime(time);
      changeBackground(isWorkTime);
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    clearInterval(timerInterval);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(timerInterval);
    setIsRunning(false);
    setRemainingTime(0);
    setIsWorkTime(true);
    setCycleCount(0);
    resetBackground();
  };

  return (
    <>
      <Header />
      <section className="screen">
        <Timer time={formatTime(remainingTime)} onClick={isRunning ? pauseTimer : startTimer} />
        <Info 
          workTime={workTime} 
          setWorkTime={setWorkTime} 
          relaxTime={relaxTime} 
          setRelaxTime={setRelaxTime} 
        />
        <Stop onClick={resetTimer} />

        <div className="todolist">
          <h1>To-Do List</h1>
          {/* Componente TodoList que gerencia toda a lógica */}
          <ToDoLista />
        </div>
      </section>

      <Footer backgroundColor = {isRunning 
          ? (isWorkTime ? 'var(--background-footer-work)' : 'var(--background-footer-relax)') 
          : 'var(--background-footer-inicial' 
        } 
      />
    </>
  );
}

export default App;
