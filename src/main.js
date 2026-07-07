import './style.css';
import endings, { characterQuiz, getFinalEnding } from './data/endings.js';

const startButton = document.querySelector('#start-btn');
const questionnaireSection = document.querySelector('#questionnaire');
const heroSection = document.querySelector('#hero');
const quizContainer = document.querySelector('#quiz');
const finalContainer = document.querySelector('#final');

const typeText = (element, text, speed = 28) => {
  let index = 0;
  element.textContent = '';

  const writeCharacter = () => {
    if (index >= text.length) {
      return;
    }

    element.textContent += text[index];
    index += 1;
    window.setTimeout(writeCharacter, speed);
  };

  writeCharacter();
};

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

const buildQuestionMarkup = (questionData) => {
  const optionsMarkup = questionData.options
    .map(
      (option, index) => `
        <label class="quiz-option" for="q-${questionData.id}-${index}">
          <input
            id="q-${questionData.id}-${index}"
            type="radio"
            name="question-${questionData.id}"
            value="${option}"
          >
          <span>${option}</span>
        </label>
      `,
    )
    .join('');

  return `
    <article class="quiz-question">
      <p class="quiz-question__title">${questionData.question}</p>
      <div class="quiz-options" role="radiogroup" aria-label="${questionData.question}">
        ${optionsMarkup}
      </div>
    </article>
  `;
};

const collectAnswers = (formElement) => {
  return characterQuiz
    .map((questionData) => {
      const selectedOption = formElement.querySelector(
        `input[name="question-${questionData.id}"]:checked`,
      );

      return selectedOption ? selectedOption.value : null;
    })
    .filter(Boolean);
};

const renderResult = (ending) => {
  if (!(finalContainer instanceof HTMLElement)) return;

  finalContainer.classList.add('is-revealed');
  finalContainer.setAttribute('aria-hidden', 'false');
  finalContainer.classList.remove('is-opening');
  finalContainer.innerHTML = `
    <article class="ending-card ending-card--parchment" aria-live="polite">
      <h3>${ending.title}</h3>
      <p class="ending-card__content" id="ending-content"></p>
    </article>
  `;

  finalContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });

  window.setTimeout(() => {
    finalContainer.classList.add('is-opening');

    const contentNode = finalContainer.querySelector('#ending-content');
    if (contentNode instanceof HTMLElement) {
      typeText(contentNode, ending.content, 26);
    }
  }, 520);
};

const renderCharacterQuiz = () => {
  if (!(quizContainer instanceof HTMLElement)) return;

  const questionsMarkup = characterQuiz.map((questionData) => buildQuestionMarkup(questionData)).join('');

  quizContainer.setAttribute('aria-hidden', 'false');
  quizContainer.innerHTML = `
    <form id="character-quiz-form" class="character-quiz" novalidate>
      <div class="character-quiz__scroll">
        ${questionsMarkup}
      </div>
      <div class="character-quiz__actions">
        <button type="submit" class="hero__cta character-quiz__submit hero_cta character-quiz_submit">Choose My Ending</button>
      </div>
    </form>
  `;

  const quizForm = quizContainer.querySelector('#character-quiz-form');
  if (!(quizForm instanceof HTMLFormElement)) return;

  quizForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const answers = collectAnswers(quizForm);
    if (answers.length !== characterQuiz.length) {
      window.alert('Please answer every question before generating your ending.');
      return;
    }

    const selectedEnding = getFinalEnding(answers, endings);
    renderResult(selectedEnding);
  });
};

renderCharacterQuiz();