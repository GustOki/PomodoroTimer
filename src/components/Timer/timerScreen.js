import './timerScreen.css'

const Timer = () => {
    useEffect(() => {
        

        document.addEventListener('DOMContentLoaded', () => {
        const timerDiv = document.getElementById('timer');
        const stopDiv = document.getElementById('stop');

        timerDiv.addEventListener('click', () => {
            isRunning ? pauseTimer() : startTimer();
        });

        stopDiv.addEventListener('click', resetTimer);
});
    })

    return (
        <div className="timer" id="timer">
            <p id="timer-display">00:00</p>
        </div>
    )
}

export default Timer;