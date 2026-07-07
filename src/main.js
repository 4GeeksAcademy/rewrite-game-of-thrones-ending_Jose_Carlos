import './style.css';

const startButton = document.querySelector('#start-btn');
const questionnaireSection = document.querySelector('#questionnaire');
const heroSection = document.querySelector('#hero');

if (heroSection instanceof HTMLElement) {
  const heroImage = heroSection.dataset.heroImage;

  if (heroImage) {
    heroSection.style.setProperty('--hero-image', `url("${heroImage}")`);
  }
}

if (startButton && questionnaireSection) {
  startButton.addEventListener('click', () => {
    questionnaireSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}