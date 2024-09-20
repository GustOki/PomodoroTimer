const alarmSound = new Audio('./sound/alarme.mp3');
alarmSound.volume = 1.0; 

const prepareAlarmSound = () => {
  alarmSound.play();
  alarmSound.pause();
};

const playAlarmSound = () => {
  alarmSound.play();
};

export { playAlarmSound, prepareAlarmSound };