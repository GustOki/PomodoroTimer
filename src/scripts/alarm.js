let alarmAudio;

export const prepareAlarmSound = () => {
  // Substitua 'caminho/para/o/arquivo.mp3' pelo caminho correto do seu arquivo
  alarmAudio = new Audio('/sound/alarme.mp3');
  alarmAudio.preload = 'auto'; // Pré-carrega o áudio
  alarmAudio.volume = 0.5; // Ajusta o volume (0.0 a 1.0)
};

export const playAlarmSound = () => {
  if (alarmAudio) {
    alarmAudio.currentTime = 0; // Reinicia o áudio
    alarmAudio.play().catch((error) => {
      console.error('Erro ao tocar o áudio:', error);
    });
  } else {
    console.warn('Áudio não preparado. Certifique-se de chamar prepareAlarmSound antes.');
  }
};

// Adiciona um evento para garantir que o áudio seja liberado após a reprodução
alarmAudio?.addEventListener('ended', () => {
  alarmAudio.currentTime = 0; // Reinicia o tempo para que possa tocar novamente
});
