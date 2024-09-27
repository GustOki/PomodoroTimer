import './timerScreen.css';

const Timer = ({ time, onClick }) => {
  return (
    <div className="timer" id="timer" onClick={onClick}>
      <p id="timer-display">{time}</p>
    </div>
  );
};

export default Timer;
