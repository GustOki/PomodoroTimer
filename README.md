# PomodoroTimer

PomodoroTimer é uma aplicação web desenvolvida em React, baseada na técnica Pomodoro para gerenciamento de tempo. O projeto foi criado para ajudar na produtividade ao alternar períodos de trabalho e descanso de forma automatizada.

Caso queira acessar o site ativo, acesse o link: https://pomodoro-timer-five-livid.vercel.app 

## Funcionalidades

- **Modo WORK (Amarelo):** Temporizador para períodos de atividade.
- **Modo RELAX (Verde):** Temporizador para intervalos.
- Inicie o temporizador clicando no grande círculo.
- Pause o temporizador clicando novamente no círculo.
- Reinicie o temporizador clicando no botão STOP, sem precisar redefinir os valores inseridos.
  
O timer terá como predefinição 25 minutos de WORK e 5 minutos de RELAX, mas o usuário pode personalizar o tempo que quiser, desde que tenha no mínimo 1 minuto em ambos;

## Como rodar o projeto na sua máquina

Siga as instruções abaixo para rodar o projeto localmente:

### Pré-requisitos

- Node.js instalado. Caso não tenha, [instale aqui](https://nodejs.org/).

### Passos

1. Clone o repositório:
   ```
   bash git clone https://github.com/usuario/PomodoroTimer.git

2. Entre no diretório do projeto:
    ``` 
    cd PomodoroTimer

3. Instale as dependências:
    ```
    npm intall

4. Inicie a aplicação:
    ```
    npm start

5. Inicialize seu navegador e acesse:
    http://localhost:3000

6. Certifique-se de que o json-server esteja instalado globalmente. Se não estiver, instale-o com o seguinte comando:
    ```
    npm install -g json-server

7. No diretório do projeto, inicie o json-server com o db.json que já está incluído no repositório:
    ```
    json-server --watch db.json --port 3001


### ATENÇÃO!

Certifique-se de que você tenha o Node.js e o npm instalados em sua máquina para executar o projeto corretamente.