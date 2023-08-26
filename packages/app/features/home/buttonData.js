// buttonData.js

// const MENU_COLOR = '#480CA8' // For top row buttons. You can adjust to fit the theme.
// const WHAT_WORDS = '#4CC9F0'
// const HOW_WORDS = '#3F37C9'
// const WHEN_WORDS = '#7209B7'
// const HOWMUCH_WORDS = '#560BAD'
// const WHERE_WORDS = '#ADD8E6'
// const WHICH_WORDS = '#4895EF'
// const SOCIAL_WORDS = '#B5179E'
// const WWWHY = '#F72585'



//// BABY BLUE PALETTE 
const MENU_COLOR = '#99C1DE' //WHEN_WORDS
const WWWHY = '#FAD2E1' //deep red
const WHO_WORDS = '#C5DEDD' //FDE2E4 RED
const HOW_WORDS = '#DBE7E4' //teal
const WHAT_WORDS = '#F0EFEB' // FDE2E4 F0EFEB
const WHEN_WORDS = '#e6eeec' //EDDCD2
const HOWMUCH_WORDS = '#e2ece9' //tan
const WHERE_WORDS = '#e9f1ef' //orange
const WHICH_WORDS = '#dfe9e7' //C5DEDD
const SOCIAL_WORDS = '#99C1DE' //BCD4E6



// const MENU_COLOR = '#444444' // Default
// const WHAT_WORDS = '#ffff4d'
// const HOW_WORDS = '#008000'
// const WHEN_WORDS = '#4db8ff'
// const HOWMUCH_WORDS = '#ffc34d'
// const WHERE_WORDS = '#4ddbff'
// const WHICH_WORDS = '#884dff'
// const SOCIAL_WORDS = '#D3D3D3'
// const WWWHY = '#ffaa00'

// const MENU_BORDER = BABY_WHEN_WORDS
// const WWWHY = MENU_COLOR
// const WHO_WORDS = MENU_COLOR
// const HOW_WORDS = MENU_COLOR
// const WHAT_WORDS = MENU_COLOR
// const WHERE_WORDS_WORDS = MENU_COLOR
// const WHY_WORDS = MENU_COLOR
// const WHAT_WORDS = MENU_COLOR

const menuColumn = [
  { word: '#', color: MENU_COLOR },
  { word: 'core', color: MENU_COLOR },
  { word: 'phrases', color: MENU_COLOR },
  { word: 'topics', color: MENU_COLOR },
  { word: 'keyboard', color: MENU_COLOR },
  { word: 'back', color: MENU_COLOR },
  { word: 'settings', color: MENU_COLOR },
  { word: '', color: MENU_COLOR },
]

const whoColumn = [
  { word: 'who', color: WWWHY },
  { word: 'i', color: WHO_WORDS },
  { word: 'you', color: WHO_WORDS },
  { word: 'she', color: WHO_WORDS },
  { word: 'he', color: WHO_WORDS },
  { word: 'we', color: WHO_WORDS },
  { word: 'they', color: WHO_WORDS },
  { word: 'it', color: WHO_WORDS },
]

const howColumn = [
  { word: 'how', color: WWWHY },
  { word: 'eat', color: HOW_WORDS },
  { word: 'sleep', color: HOW_WORDS },
  { word: 'play', color: HOW_WORDS },
  { word: 'want', color: HOW_WORDS },
  { word: 'need', color: HOW_WORDS },
  { word: 'help', color: HOW_WORDS },
  { word: 'like', color: HOW_WORDS },
]
const feelColumn = [
  { word: 'feel', color: HOW_WORDS },
  { word: 'see', color: HOW_WORDS },
  { word: 'hear', color: HOW_WORDS },
  { word: 'touch', color: HOW_WORDS },
  { word: 'taste', color: HOW_WORDS },
  { word: 'smell', color: HOW_WORDS },
  { word: 'tell', color: HOW_WORDS },
  { word: 'can', color: HOW_WORDS },
]
const goColumn = [
  { word: 'go', color: HOW_WORDS },
  { word: 'read', color: HOW_WORDS },
  { word: 'draw', color: HOW_WORDS },
  { word: 'give', color: HOW_WORDS },
  { word: 'take', color: HOW_WORDS },
  { word: 'make', color: HOW_WORDS },
  { word: 'break', color: HOW_WORDS },
  { word: 'try', color: HOW_WORDS },
]

const whenColumn = [
  { word: 'when', color: WWWHY },
  { word: 'now', color: WHEN_WORDS },
  { word: 'later', color: WHEN_WORDS },
  { word: 'before', color: WHEN_WORDS },
  { word: 'after', color: WHEN_WORDS },
  { word: 'almost', color: WHEN_WORDS },
  { word: 'never', color: WHEN_WORDS },
  { word: 'yet', color: WHEN_WORDS },
]

const howMuchColumn = [
  { word: 'how much', color: WWWHY },
  { word: 'more', color: HOWMUCH_WORDS },
  { word: 'good', color: HOWMUCH_WORDS },
  { word: 'none', color: HOWMUCH_WORDS },
  { word: 'some', color: HOWMUCH_WORDS },
  { word: 'all', color: HOWMUCH_WORDS },
  { word: 'big', color: HOWMUCH_WORDS },
  { word: 'small', color: HOWMUCH_WORDS },
]

const whereColumn = [
  { word: 'where', color: WWWHY },
  { word: 'in', color: WHERE_WORDS },
  { word: 'out', color: WHERE_WORDS },
  { word: 'up', color: WHERE_WORDS },
  { word: 'down', color: WHERE_WORDS },
  { word: 'here', color: WHERE_WORDS },
  { word: 'there', color: WHERE_WORDS },
  { word: 'on', color: WHERE_WORDS },
]

const whatColumn = [
  { word: 'what', color: WWWHY },
  { word: 'is', color: WHAT_WORDS },
  { word: 'not', color: WHAT_WORDS },
  { word: 'to', color: WHAT_WORDS },
  { word: 'the', color: WHAT_WORDS },
  { word: 'do', color: WHAT_WORDS },
  { word: 'for', color: WHAT_WORDS },
  { word: 'a', color: WHAT_WORDS },
]

const whichColumn = [
  { word: 'which', color: WWWHY },
  { word: 'this', color: WHICH_WORDS },
  { word: 'that', color: WHICH_WORDS },
  { word: 'fast', color: WHICH_WORDS },
  { word: 'slow', color: WHICH_WORDS },
  { word: 'first', color: WHICH_WORDS },
  { word: 'middle', color: WHICH_WORDS },
  { word: 'last', color: WHICH_WORDS },
]

const yesColumn = [
  { word: 'yes', color: SOCIAL_WORDS },
  { word: 'hi', color: SOCIAL_WORDS },
  { word: 'please', color: SOCIAL_WORDS },
  { word: 'maybe', color: SOCIAL_WORDS },
  { word: 'welcome', color: SOCIAL_WORDS },
  { word: 'excuse me', color: SOCIAL_WORDS },
  { word: 'and', color: SOCIAL_WORDS },
  { word: 'question', color: SOCIAL_WORDS },
]

const noColumn = [
  { word: 'no', color: SOCIAL_WORDS },
  { word: 'bye', color: SOCIAL_WORDS },
  { word: 'thank you', color: SOCIAL_WORDS },
  { word: 'dont know', color: SOCIAL_WORDS },
  { word: 'sorry', color: SOCIAL_WORDS },
  { word: 'sorry', color: SOCIAL_WORDS },
  { word: 'but', color: SOCIAL_WORDS },
  { word: 'stop', color: SOCIAL_WORDS },
]
// Define the rest of the columns in the same pattern...
// ...

const GRID_DATA = [
  menuColumn,
  whoColumn,

  howColumn,
  feelColumn,
  goColumn,
  whatColumn,
  whenColumn,
  howMuchColumn,
  whereColumn,

  whichColumn,
  yesColumn,
  noColumn,
].reduce((rows, currentCol) => {
  currentCol.forEach((btn, index) => {
    if (!rows[index]) rows[index] = []
    rows[index].push(btn)
  })
  return rows
}, [])

export { GRID_DATA }
