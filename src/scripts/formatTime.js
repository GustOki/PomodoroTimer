// função para formatar o tempo
const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
};
  
const timeInputToSeconds = (input) => {
    if (typeof input === 'string') {
      const [hours, minutes] = input.split(':').map(Number);
      return (hours * 3600) + (minutes * 60);
    }
};


export { formatTime, timeInputToSeconds }