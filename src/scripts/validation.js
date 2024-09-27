const validateInput = (workTimeInput, relaxTimeInput) => {
    const workTime = workTimeInput.value;
    const relaxTime = relaxTimeInput.value;
    return workTime && relaxTime ? true : (alert('Por favor, insira os tempos de trabalho e relaxamento!'), false);
  };
  
  export { validateInput };  