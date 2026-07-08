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

const getEndingVisualConfig = (ending) => {
  const visualByEndingId = {
    1: {
      theme: 'throne',
      label: 'The throne room glows as the crown is claimed again.',
      house: 'Royal Court',
      crest: 'crown',
      celebration: 'The royal sigil rises in triumph above the Iron Throne.',
    },
    2: {
      theme: 'north',
      label: 'Snow and torchlight rise over an unconquered North.',
      house: 'House Stark',
      crest: 'wolf',
      celebration: 'The direwolf howls and celebrates the freedom of the North.',
    },
    3: {
      theme: 'dawn',
      label: 'A calmer realm emerges with the first light of a new era.',
      house: 'New Realm',
      crest: 'sun',
      celebration: 'A radiant banner greets the realm as a new era begins.',
    },
    4: {
      theme: 'dragonfall',
      label: 'Ash, embers and ruin mark the fall of dragonfire.',
      house: 'House Targaryen',
      crest: 'dragon',
      celebration: 'The dragon sigil flares one last time in a fierce blaze.',
    },
    5: {
      theme: 'council',
      label: 'The great houses gather beneath banners and candlelight.',
      house: 'The Great Council',
      crest: 'council',
      celebration: 'The council shield shines as the lords acclaim their victory.',
    },
    6: {
      theme: 'beyond',
      label: 'The frozen wilderness moves beyond the Wall.',
      house: 'Night Watch',
      crest: 'raven',
      celebration: 'A black raven cuts through the frost in silent celebration.',
    },
    7: {
      theme: 'wolfqueen',
      label: 'Northern banners wave around a sovereign winter court.',
      house: 'House Stark',
      crest: 'queenwolf',
      celebration: 'The crowned direwolf salutes the Queen in the North.',
    },
    8: {
      theme: 'lion',
      label: 'A golden legacy endures in the last Lannister light.',
      house: 'House Lannister',
      crest: 'lion',
      celebration: 'The lion roars in gold as the Lannister banner stands tall.',
    },
    9: {
      theme: 'faceless',
      label: 'Shadows drift through Braavos along the faceless path.',
      house: 'Faceless Men',
      crest: 'mask',
      celebration: 'A faceless sigil emerges from the shadows to mark the victory.',
    },
    10: {
      theme: 'maester',
      label: 'Ink, candles and memory preserve the realm in writing.',
      house: 'The Citadel',
      crest: 'maester',
      celebration: 'The maester shield gleams while the tale is written forever.',
    },
  };

  return visualByEndingId[ending.id] ?? {
    theme: 'dawn',
    label: 'A new story forms as the realm looks toward the horizon.',
    house: 'The Realm',
    crest: 'sun',
    celebration: 'A victory banner rises over the Seven Kingdoms.',
  };
};

const getEndingCrestMarkup = (crest) => {
  const crestByKey = {
    crown: `
      <svg viewBox="0 0 160 180" class="ending-crest__svg" role="img" aria-label="Royal crown shield">
        <path class="ending-crest__shield" d="M80 10 L136 34 L126 108 Q120 144 80 168 Q40 144 34 108 L24 34 Z" />
        <path class="ending-crest__trim" d="M80 24 L122 42 L114 106 Q110 132 80 153 Q50 132 46 106 L38 42 Z" />
        <path class="ending-crest__icon" d="M44 110 L53 70 L78 96 L103 62 L118 96 L132 74 L118 124 L44 124 Z" />
        <circle class="ending-crest__gem" cx="80" cy="52" r="12" />
      </svg>
    `,
    wolf: `
      <svg viewBox="0 0 160 180" class="ending-crest__svg" role="img" aria-label="Direwolf shield">
        <path class="ending-crest__shield" d="M80 10 L136 34 L126 108 Q120 144 80 168 Q40 144 34 108 L24 34 Z" />
        <path class="ending-crest__trim" d="M80 24 L122 42 L114 106 Q110 132 80 153 Q50 132 46 106 L38 42 Z" />
        <path class="ending-crest__icon" d="M80 44 L112 66 L100 78 L113 94 L94 92 L90 116 L80 106 L70 116 L66 92 L47 94 L60 78 L48 66 Z" />
      </svg>
    `,
    sun: `
      <svg viewBox="0 0 160 180" class="ending-crest__svg" role="img" aria-label="Sun shield">
        <path class="ending-crest__shield" d="M80 10 L136 34 L126 108 Q120 144 80 168 Q40 144 34 108 L24 34 Z" />
        <path class="ending-crest__trim" d="M80 24 L122 42 L114 106 Q110 132 80 153 Q50 132 46 106 L38 42 Z" />
        <circle class="ending-crest__icon" cx="80" cy="88" r="24" />
        <path class="ending-crest__rays" d="M80 42 L86 58 L102 52 L96 68 L114 72 L98 82 L112 94 L94 96 L98 114 L84 102 L80 120 L76 102 L62 114 L66 96 L48 94 L62 82 L46 72 L64 68 L58 52 L74 58 Z" />
      </svg>
    `,
    dragon: `
      <svg viewBox="0 0 160 180" class="ending-crest__svg" role="img" aria-label="Dragon shield">
        <path class="ending-crest__shield" d="M80 10 L136 34 L126 108 Q120 144 80 168 Q40 144 34 108 L24 34 Z" />
        <path class="ending-crest__trim" d="M80 24 L122 42 L114 106 Q110 132 80 153 Q50 132 46 106 L38 42 Z" />
        <path class="ending-crest__icon" d="M80 54 C96 48 112 58 116 78 C120 96 108 110 92 114 L101 130 L82 122 L66 136 L68 114 C54 108 44 95 45 79 C46 61 60 48 80 54 Z" />
        <path class="ending-crest__flame" d="M112 70 C128 72 131 90 119 98 C124 88 118 84 112 82 Z" />
      </svg>
    `,
    council: `
      <svg viewBox="0 0 160 180" class="ending-crest__svg" role="img" aria-label="Council shield">
        <path class="ending-crest__shield" d="M80 10 L136 34 L126 108 Q120 144 80 168 Q40 144 34 108 L24 34 Z" />
        <path class="ending-crest__trim" d="M80 24 L122 42 L114 106 Q110 132 80 153 Q50 132 46 106 L38 42 Z" />
        <circle class="ending-crest__icon" cx="80" cy="90" r="28" />
        <path class="ending-crest__cut" d="M80 62 L86 84 L110 84 L90 96 L98 120 L80 104 L62 120 L70 96 L50 84 L74 84 Z" />
      </svg>
    `,
    raven: `
      <svg viewBox="0 0 160 180" class="ending-crest__svg" role="img" aria-label="Raven shield">
        <path class="ending-crest__shield" d="M80 10 L136 34 L126 108 Q120 144 80 168 Q40 144 34 108 L24 34 Z" />
        <path class="ending-crest__trim" d="M80 24 L122 42 L114 106 Q110 132 80 153 Q50 132 46 106 L38 42 Z" />
        <path class="ending-crest__icon" d="M52 106 C58 78 74 60 102 62 C112 63 122 68 126 74 C114 72 104 76 100 83 C109 84 116 88 118 98 C106 92 95 93 88 100 L84 120 L74 105 L52 106 Z" />
      </svg>
    `,
    queenwolf: `
      <svg viewBox="0 0 160 180" class="ending-crest__svg" role="img" aria-label="Crowned direwolf shield">
        <path class="ending-crest__shield" d="M80 10 L136 34 L126 108 Q120 144 80 168 Q40 144 34 108 L24 34 Z" />
        <path class="ending-crest__trim" d="M80 24 L122 42 L114 106 Q110 132 80 153 Q50 132 46 106 L38 42 Z" />
        <path class="ending-crest__crown" d="M52 56 L64 40 L80 56 L96 36 L110 56 L124 42 L116 72 L52 72 Z" />
        <path class="ending-crest__icon" d="M80 78 L108 96 L97 108 L108 122 L90 120 L85 138 L80 132 L75 138 L70 120 L52 122 L63 108 L52 96 Z" />
      </svg>
    `,
    lion: `
      <svg viewBox="0 0 160 180" class="ending-crest__svg" role="img" aria-label="Lion shield">
        <path class="ending-crest__shield" d="M80 10 L136 34 L126 108 Q120 144 80 168 Q40 144 34 108 L24 34 Z" />
        <path class="ending-crest__trim" d="M80 24 L122 42 L114 106 Q110 132 80 153 Q50 132 46 106 L38 42 Z" />
        <circle class="ending-crest__mane" cx="80" cy="88" r="34" />
        <path class="ending-crest__icon" d="M64 100 C64 84 74 74 88 74 C98 74 106 82 106 92 C106 108 94 120 78 120 C68 120 60 112 60 102 C60 95 64 90 70 90 C72 90 74 91 76 92" />
      </svg>
    `,
    mask: `
      <svg viewBox="0 0 160 180" class="ending-crest__svg" role="img" aria-label="Faceless mask shield">
        <path class="ending-crest__shield" d="M80 10 L136 34 L126 108 Q120 144 80 168 Q40 144 34 108 L24 34 Z" />
        <path class="ending-crest__trim" d="M80 24 L122 42 L114 106 Q110 132 80 153 Q50 132 46 106 L38 42 Z" />
        <path class="ending-crest__icon" d="M80 56 C102 56 114 72 110 96 C106 120 96 132 80 140 C64 132 54 120 50 96 C46 72 58 56 80 56 Z" />
        <ellipse class="ending-crest__cut" cx="68" cy="92" rx="8" ry="5" />
        <ellipse class="ending-crest__cut" cx="92" cy="92" rx="8" ry="5" />
      </svg>
    `,
    maester: `
      <svg viewBox="0 0 160 180" class="ending-crest__svg" role="img" aria-label="Maester shield">
        <path class="ending-crest__shield" d="M80 10 L136 34 L126 108 Q120 144 80 168 Q40 144 34 108 L24 34 Z" />
        <path class="ending-crest__trim" d="M80 24 L122 42 L114 106 Q110 132 80 153 Q50 132 46 106 L38 42 Z" />
        <path class="ending-crest__book" d="M52 70 H108 V120 H52 Z" />
        <path class="ending-crest__cut" d="M80 70 V120" />
        <circle class="ending-crest__gem" cx="80" cy="54" r="10" />
      </svg>
    `,
  };

  return crestByKey[crest] ?? crestByKey.sun;
};

const renderResult = (ending) => {
  if (!(finalContainer instanceof HTMLElement)) return;

  const endingVisual = getEndingVisualConfig(ending);

  finalContainer.classList.add('is-revealed');
  finalContainer.setAttribute('aria-hidden', 'false');
  finalContainer.classList.remove('is-opening');
  finalContainer.innerHTML = `
    <article class="ending-card ending-card--parchment" aria-live="polite">
      <div class="ending-visual ending-visual--${endingVisual.theme}" aria-hidden="true">
        <span class="ending-visual__sky"></span>
        <span class="ending-visual__orb"></span>
        <span class="ending-visual__fortress"></span>
        <span class="ending-visual__mist"></span>
        <span class="ending-visual__embers"></span>
        <span class="ending-visual__confetti ending-visual__confetti--left"></span>
        <span class="ending-visual__confetti ending-visual__confetti--right"></span>
        <div class="ending-visual__crest-wrap">
          <div class="ending-visual__crest">${getEndingCrestMarkup(endingVisual.crest)}</div>
        </div>
        <span class="ending-visual__sigil">${endingVisual.house}</span>
      </div>
      <p class="ending-card__victory">${endingVisual.celebration}</p>
      <p class="ending-card__scene">${endingVisual.label}</p>
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