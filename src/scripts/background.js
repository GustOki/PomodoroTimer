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
  body.style.backgroundColor = background;
  footer.style.backgroundColor = footerColor;
};

const resetBackground = () => {
  const { background, footer: footerColor } = backgrounds.initial;
  body.style.backgroundColor = background;
  footer.style.backgroundColor = footerColor;
};

export { changeBackground, resetBackground };