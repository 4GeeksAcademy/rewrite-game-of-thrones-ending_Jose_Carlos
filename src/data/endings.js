/**
 * Endings Data Module
 *
 * This file stores alternative Game of Thrones ending templates.
 * Students can expand this array with more endings as they build the experience.
 */

/** Cuestionario para elegir final alternativo en función de la preferencia de personajes. */
export const characterQuiz = [
  {
    id: 1,
    question: '¿Qué personaje admiras más por su sentido del honor?',
    options: ['Brienne of Tarth', 'Jon Snow', 'Davos Seaworth', 'Ghost'],
  },
  {
    id: 2,
    question: '¿Con cuál te identificas más en momentos de duda sobre quién eres realmente?',
    options: ['Jon Snow', 'Arya Stark', 'Gendry Baratheon', 'Daenerys Targaryen'],
  },
  {
    id: 3,
    question: '¿Qué personaje crees que tiene el ingenio más afilado?',
    options: ['Tyrion Lannister', 'Sansa Stark', 'Archmaester Ebrose', 'Yara Greyjoy'],
  },
  {
    id: 4,
    question: '¿A quién elegirías como aliado en una batalla desesperada?',
    options: ['Grey Worm', 'Tormund Giantsbane', 'Brienne of Tarth', 'Podrick Payne'],
  },
  {
    id: 5,
    question: '¿Qué personaje representa mejor la resiliencia tras el sufrimiento?',
    options: ['Sansa Stark', 'Gilly', 'Daenerys Targaryen', 'Davos Seaworth'],
  },
  {
    id: 6,
    question: '¿Con quién te quedarías si tuvieras que elegir libertad sobre poder?',
    options: ['Arya Stark', 'Jon Snow', 'Yara Greyjoy', 'Tormund Giantsbane'],
  },
  {
    id: 7,
    question: '¿Qué personaje crees que actúa siempre guiado por la lealtad, no por la ambición?',
    options: ['Podrick Payne', 'Grey Worm', 'Ghost', 'Samwell Tarly'],
  },
  {
    id: 8,
    question: '¿A quién consideras el más sabio de todos?',
    options: ['Tyrion Lannister', 'Archmaester Ebrose', 'Samwell Tarly', 'Davos Seaworth'],
  },
  {
    id: 9,
    question: '¿Qué personaje te parece más valiente frente al peligro?',
    options: ['Brienne of Tarth', 'Daenerys Targaryen', 'Tormund Giantsbane', 'Arya Stark'],
  },
  {
    id: 10,
    question: '¿Con cuál conectas más por su capacidad de perdonar o dar segundas oportunidades?',
    options: ['Jon Snow', 'Tyrion Lannister', 'Sansa Stark', 'Gilly'],
  },
  {
    id: 11,
    question: '¿Qué personaje elegirías como consejero de confianza?',
    options: ['Tyrion Lannister', 'Davos Seaworth', 'Archmaester Ebrose', 'Sansa Stark'],
  },
  {
    id: 12,
    question: '¿Qué personaje crees que sacrifica más por los demás?',
    options: ['Jon Snow', 'Grey Worm', 'Brienne of Tarth', 'Gendry Baratheon'],
  },
  {
    id: 13,
    question: '¿Con quién te identificas al buscar tu propio camino lejos de tu familia?',
    options: ['Arya Stark', 'Yara Greyjoy', 'Jon Snow', 'Gendry Baratheon'],
  },
  {
    id: 14,
    question: '¿Qué personaje representa mejor la fidelidad silenciosa?',
    options: ['Ghost', 'Nymeria', 'Podrick Payne', 'Grey Worm'],
  },
  {
    id: 15,
    question: '¿A quién ves con más potencial de liderazgo justo?',
    options: ['Sansa Stark', 'Daenerys Targaryen', 'Yara Greyjoy', 'Jon Snow'],
  },
  {
    id: 16,
    question: '¿Qué personaje crees que encuentra fuerza en el conocimiento más que en las armas?',
    options: ['Samwell Tarly', 'Archmaester Ebrose', 'Tyrion Lannister', 'Gilly'],
  },
  {
    id: 17,
    question: '¿Con quién compartirías un viaje incierto hacia lo desconocido?',
    options: ['Arya Stark', 'Nymeria', 'Tormund Giantsbane', 'Gendry Baratheon'],
  },
  {
    id: 18,
    question: '¿Qué personaje crees que mejor equilibra la dureza con la compasión?',
    options: ['Jon Snow', 'Brienne of Tarth', 'Sansa Stark', 'Davos Seaworth'],
  },
  {
    id: 19,
    question: '¿A quién elegirías para reconstruir algo desde cero tras la guerra?',
    options: ['Samwell Tarly', 'Gilly', 'Tyrion Lannister', 'Archmaester Ebrose'],
  },
  {
    id: 20,
    question: '¿Qué personaje te parece más leal a pesar de las circunstancias?',
    options: ['Grey Worm', 'Podrick Payne', 'Ghost', 'Nymeria'],
  },
];

const endings = [
  {
    id: 1,
    title: 'The Iron Throne Is Reclaimed',
    content:
      'The realm finds peace when a new ruler takes the throne with wisdom and restraint. The old cycle of fear begins to break, and the people finally see a future beyond war.',
    characters: ['Jon Snow', 'Daenerys Targaryen', 'Tyrion Lannister'],
    themes: ['power', 'balance', 'peace'],
    image: 'throne',
  },
  {
    id: 2,
    title: 'The North Remains Free',
    content:
      'The North rises again as an independent kingdom, protected by its own leaders and its ancient traditions. The old enemies no longer control its fate.',
    characters: ['Jon Snow', 'Sansa Stark', 'Arya Stark'],
    themes: ['freedom', 'family', 'justice'],
    image: 'north',
  },
  {
    id: 3,
    title: 'A New Dawn for the Realm',
    content:
      'The war ends with a different kind of leadership: one based on cooperation rather than conquest. Hope returns to the people, and the story of Westeros changes forever.',
    characters: ['Tyrion Lannister', 'Brienne of Tarth', 'Samwell Tarly'],
    themes: ['hope', 'unity', 'future'],
    image: 'dawn',
  },
  {
  id: 4,
  title: 'The Dragon Queen\'s Fall',
  content:
    'Daenerys succumbs to the weight of her own fire and fury, and it falls to those who loved her most to stop the destruction she has unleashed. From the ashes, a fragile council rises to rebuild what was lost.',
  characters: ['Daenerys Targaryen', 'Jon Snow', 'Grey Worm'],
  themes: ['tragedy', 'sacrifice', 'redemption'],
  image: 'ashes',
  },
  {
  id: 5,
  title: 'The Council of Lords',
  content:
    'No single ruler takes the throne. Instead, the great houses agree to govern together, each retaining power over their own lands. It is an imperfect peace, but one built on compromise rather than conquest.',
  characters: ['Sansa Stark', 'Tyrion Lannister', 'Yara Greyjoy'],
  themes: ['diplomacy', 'compromise', 'power'],
  image: 'council',
  },
  {
  id: 6,
  title: 'Beyond the Wall',
  content:
    'Jon Snow chooses exile over the crown, riding north with the Free Folk to a land untouched by the wars of the south. There, among people who never cared for iron thrones, he finally finds peace.',
  characters: ['Jon Snow', 'Tormund Giantsbane', 'Ghost'],
  themes: ['exile', 'peace', 'belonging'],
  image: 'wall',
  },
  {
  id: 7,
  title: 'The Queen in the North',
  content:
    'Sansa is crowned not just Queen of the North, but a symbol of resilience for all who suffered under tyranny. Her reign begins not with conquest, but with the quiet, careful work of healing a broken land.',
  characters: ['Sansa Stark', 'Brienne of Tarth', 'Podrick Payne'],
  themes: ['resilience', 'leadership', 'healing'],
  image: 'winterfell',
  },
  {
  id: 8,
  title: 'The Last Lannister',
  content:
    'Tyrion, the only surviving Lannister of note, is left to reckon with his family\'s legacy. He rebuilds not a dynasty, but an idea: that cleverness and mercy can outlast cruelty and gold.',
  characters: ['Tyrion Lannister', 'Podrick Payne', 'Davos Seaworth'],
  themes: ['legacy', 'redemption', 'wisdom'],
  image: 'lannister',
  },
  {
  id: 9,
  title: 'The Faceless Path',
  content:
    'Arya leaves Westeros behind entirely, sailing west of the map into the unknown. Her story becomes a legend told by sailors, of a girl who outran every name given to her, including her own.',
  characters: ['Arya Stark', 'Gendry Baratheon', 'Nymeria'],
  themes: ['freedom', 'identity', 'adventure'],
  image: 'sea',
  },
  {
  id: 10,
  title: 'The Maester\'s Record',
  content:
    'Samwell Tarly completes his history of the wars for the throne, ensuring the true story survives beyond the myths that will replace it. Knowledge, not conquest, becomes the realm\'s lasting inheritance.',
  characters: ['Samwell Tarly', 'Gilly', 'Archmaester Ebrose'],
  themes: ['knowledge', 'memory', 'legacy'],
  image: 'citadel',
  }
  ];


/** Funcion para selecionar el final alternativo en función de las respuestas del cuestionario */

export function getEndingScores(answers, endingsList = endings) {
  const scores = {};
  endingsList.forEach((ending) => {
    scores[ending.id] = 0;
  });

  answers.forEach((character) => {
    endingsList.forEach((ending) => {
      if (ending.characters.includes(character)) {
        scores[ending.id] += 1;
      }
    });
  });

  return scores;
}

export function getFinalEnding(answers, endingsList = endings) {
  const scores = getEndingScores(answers, endingsList);
  const maxScore = Math.max(...Object.values(scores));
  const topEndings = endingsList.filter((ending) => scores[ending.id] === maxScore);

  return topEndings[Math.floor(Math.random() * topEndings.length)];
}

export default endings;
