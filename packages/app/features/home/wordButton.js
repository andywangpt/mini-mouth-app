const wordButton = {
  NumberMenu: {
    id: '#',
    word: '#',
    category: 'Menu',
    index: [0, 0],
    pathways: [],
  },

  core: {
    id: 'core',
    word: 'core',
    category: 'Menu',
    index: [0, 1],
    pathways: [],
  },

  phrases: {
    id: 'phrases',
    word: 'phrases',
    category: 'Menu',
    index: [0, 2],
    pathways: [],
  },

  topics: {
    id: 'topics',
    word: 'topics',
    category: 'Menu',
    index: [0, 3],
    pathways: [],
  },

  KeyBoardMenu: {
    id: 'back',
    word: 'back',
    category: 'Menu',
    index: [0, 4],
    pathways: [],
  },

  back: {
    id: 'back',
    word: 'back',
    category: 'Menu',
    index: [0, 5],
    pathways: [],
  },

  settings: {
    id: 'settings',
    word: 'settings',
    category: 'Menu',
    index: [0, 6],
    pathways: [],
  },

  ' ': {
    id: ' ',
    word: ' ',
    category: 'Menu',
    index: [0, 7],
    pathways: [],
  },

  who: {
    id: 'who',
    word: 'who',
    category: 'WHO',
    index: [1, 0],
    pathways: [],
  },

  i: {
    id: 'i',
    word: 'i',
    category: 'WHO',
    index: [2, 0],
    pathways: [],
  },

  you: {
    id: 'you',
    word: 'you',
    category: 'WHO',
    index: [3, 0],
    pathways: [],
  },

  he: {
    id: 'he',
    word: 'he',
    category: 'WHO',
    index: [4, 0],
    pathways: [],
  },

  we: {
    id: 'we',
    word: 'we',
    category: 'WHO',
    index: [5, 0],
    pathways: [],
  },

  they: {
    id: 'they',
    word: 'they',
    category: 'WHO',
    index: [6, 0],
    pathways: [],
  },

  it: {
    id: 'it',
    word: 'it',
    category: 'WHO',
    index: [7, 0],
    pathways: [],
  },

  feel: {
    id: 'feel',
    word: 'Feel',
    color: 'blue',
    category: 'Emotions',
    index: [1, 1],
    pathways: [
      { id: 'happy', coordinates: [1, 0] },
      { id: 'sad', coordinates: [1, 1] },
      { id: 'angry', coordinates: [1, 2] },
    ],
  },
  happy: {
    id: 'happy',
    word: 'Happy',
    color: 'green',
    category: 'Positive Emotions',
    index: [0, 1],
    pathways: [
      { id: 'ecstatic', coordinates: [1, 0] },
      { id: 'joyful', coordinates: [1, 1] },
      { id: 'pleased', coordinates: [1, 2] },
    ],
  },
  // ... other buttons
};

export default wordButton;
