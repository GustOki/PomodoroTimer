const body = document.body;
const footer = document.querySelector('footer');

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

const changeBackground = (isWorkTime) => {
  const { background, footer: footerColor } = isWorkTime ? backgrounds.work : backgrounds.relax;

  // Verifica se body e footer existem antes de aplicar o estilo
  if (body) {
    body.style.backgroundColor = background;
  }

  if (footer) {
    footer.style.backgroundColor = footerColor;
  
  } else {
    console.error("Elemento 'footer' não encontrado no DOM");
  }
};

const resetBackground = () => {
  const { background, footer: footerColor } = backgrounds.initial;

  // Verifica se body e footer existem antes de aplicar o estilo
  if (body) {
    body.style.backgroundColor = background;
  }

  if (footer) {
    footer.style.backgroundColor = footerColor;
  
  } else {
    console.error("Elemento 'footer' não encontrado no DOM");
  }
};

export { changeBackground, resetBackground };
