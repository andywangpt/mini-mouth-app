// buttonData.js

// const MENU_COLOR = '#480CA8' // For top row buttons. You can adjust to fit the theme.
// const YELLOW = '#4CC9F0'
// const GREEN = '#3F37C9'
// const BLUE = '#7209B7'
// const LIGHT_ORANGE = '#560BAD'
// const LIGHT_BLUE = '#ADD8E6'
// const LIGHT_RED = '#4895EF'
// const LIGHT_GRAY = '#B5179E'
// const BRIGHT_ORANGE = '#F72585'



//// For top row buttons. You can adjust to fit the theme.
const MENU_COLOR = '#99C1DE' //blueblack
const YELLOW1 = '#FDE2E4'
const YELLOW = '#F0EFEB' // FDE2E4 F0EFEB
const GREEN = '#D6E2E9' //teal
const BLUE = '#DBE7E4' //light green C5DEDD
const LIGHT_ORANGE = '#EDDCD2' //tan
const LIGHT_BLUE = '#FFF1E6' //orange
const LIGHT_RED = '#C5DEDD' //fall orange
const LIGHT_GRAY = '#BCD4E6' //red
const BRIGHT_ORANGE = '#FAD2E1' //deep red


// const MENU_COLOR = '#444444' // Default
// const YELLOW = '#ffff4d'
// const GREEN = '#008000'
// const BLUE = '#4db8ff'
// const LIGHT_ORANGE = '#ffc34d'
// const LIGHT_BLUE = '#4ddbff'
// const LIGHT_RED = '#884dff'
// const LIGHT_GRAY = '#D3D3D3'
// const BRIGHT_ORANGE = '#ffaa00'

const MENU_BORDER = MENU_COLOR
const WWWHY = MENU_COLOR
const WHO = MENU_COLOR
const HOW_WORDS = MENU_COLOR
const WHAT_WORDS = MENU_COLOR
const WHERE_WORDS = MENU_COLOR
const WHY_WORDS = MENU_COLOR
const TRANSITION_WORDS = MENU_COLOR

const firstColumn = [
  { word: '#', color: MENU_COLOR },
  { word: 'core', color: MENU_COLOR },
  { word: 'phrases', color: MENU_COLOR },
  { word: 'topics', color: MENU_COLOR },
  { word: 'keyboard', color: MENU_COLOR },
  { word: 'back', color: MENU_COLOR },
  { word: 'settings', color: MENU_COLOR },
  { word: '', color: MENU_COLOR },
]

const secondColumn = [
  { word: 'who', color: BRIGHT_ORANGE },
  { word: 'i', color: YELLOW1 },
  { word: 'you', color: YELLOW1 },
  { word: 'she', color: YELLOW1 },
  { word: 'he', color: YELLOW1 },
  { word: 'we', color: YELLOW1 },
  { word: 'they', color: YELLOW1 },
  { word: 'it', color: YELLOW1 },
]

const thirdColumn = [
  { word: 'how', color: BRIGHT_ORANGE },
  { word: 'eat', color: GREEN },
  { word: 'sleep', color: GREEN },
  { word: 'play', color: GREEN },
  { word: 'want', color: GREEN },
  { word: 'need', color: GREEN },
  { word: 'help', color: GREEN },
  { word: 'like', color: GREEN },
]
const fourthColumn = [
  { word: 'feel', color: GREEN },
  { word: 'see', color: GREEN },
  { word: 'hear', color: GREEN },
  { word: 'touch', color: GREEN },
  { word: 'taste', color: GREEN },
  { word: 'smell', color: GREEN },
  { word: 'tell', color: GREEN },
  { word: 'can', color: GREEN },
]
const fifthColumn = [
  { word: 'go', color: GREEN },
  { word: 'read', color: GREEN },
  { word: 'draw', color: GREEN },
  { word: 'give', color: GREEN },
  { word: 'take', color: GREEN },
  { word: 'make', color: GREEN },
  { word: 'break', color: GREEN },
  { word: 'try', color: GREEN },
]

const sixthColumn = [
  { word: 'when', color: BRIGHT_ORANGE },
  { word: 'now', color: BLUE },
  { word: 'later', color: BLUE },
  { word: 'before', color: BLUE },
  { word: 'after', color: BLUE },
  { word: 'almost', color: BLUE },
  { word: 'never', color: BLUE },
  { word: 'yet', color: BLUE },
]

const seventhColumn = [
  { word: 'how much', color: BRIGHT_ORANGE },
  { word: 'more', color: LIGHT_ORANGE },
  { word: 'good', color: LIGHT_ORANGE },
  { word: 'none', color: LIGHT_ORANGE },
  { word: 'some', color: LIGHT_ORANGE },
  { word: 'all', color: LIGHT_ORANGE },
  { word: 'big', color: LIGHT_ORANGE },
  { word: 'small', color: LIGHT_ORANGE },
]

const eigthColumn = [
  { word: 'where', color: BRIGHT_ORANGE },
  { word: 'in', color: LIGHT_BLUE },
  { word: 'out', color: LIGHT_BLUE },
  { word: 'up', color: LIGHT_BLUE },
  { word: 'down', color: LIGHT_BLUE },
  { word: 'here', color: LIGHT_BLUE },
  { word: 'there', color: LIGHT_BLUE },
  { word: 'on', color: LIGHT_BLUE },
]

const ninthColumn = [
  { word: 'what', color: BRIGHT_ORANGE },
  { word: 'is', color: YELLOW },
  { word: 'not', color: YELLOW },
  { word: 'to', color: YELLOW },
  { word: 'the', color: YELLOW },
  { word: 'do', color: YELLOW },
  { word: 'for', color: YELLOW },
  { word: 'a', color: YELLOW },
]

const tenthColumn = [
  { word: 'which', color: BRIGHT_ORANGE },
  { word: 'this', color: LIGHT_RED },
  { word: 'that', color: LIGHT_RED },
  { word: 'fast', color: LIGHT_RED },
  { word: 'slow', color: LIGHT_RED },
  { word: 'first', color: LIGHT_RED },
  { word: 'middle', color: LIGHT_RED },
  { word: 'last', color: LIGHT_RED },
]

const eleventhColumn = [
  { word: 'yes', color: LIGHT_GRAY },
  { word: 'hi', color: LIGHT_GRAY },
  { word: 'please', color: LIGHT_GRAY },
  { word: 'maybe', color: LIGHT_GRAY },
  { word: 'welcome', color: LIGHT_GRAY },
  { word: 'excuse me', color: LIGHT_GRAY },
  { word: 'and', color: LIGHT_GRAY },
  { word: 'question', color: LIGHT_GRAY },
]

const twelvethColumn = [
  { word: 'no', color: LIGHT_GRAY },
  { word: 'bye', color: LIGHT_GRAY },
  { word: 'thank you', color: LIGHT_GRAY },
  { word: 'dont know', color: LIGHT_GRAY },
  { word: 'sorry', color: LIGHT_GRAY },
  { word: 'sorry', color: LIGHT_GRAY },
  { word: 'but', color: LIGHT_GRAY },
  { word: 'stop', color: LIGHT_GRAY },
]
// Define the rest of the columns in the same pattern...
// ...

const GRID_DATA = [
  firstColumn,
  secondColumn,
  thirdColumn,
  fourthColumn,
  fifthColumn,
  sixthColumn,
  seventhColumn,
  eigthColumn,
  ninthColumn,
  tenthColumn,
  eleventhColumn,
  twelvethColumn,
].reduce((rows, currentCol) => {
  currentCol.forEach((btn, index) => {
    if (!rows[index]) rows[index] = []
    rows[index].push(btn)
  })
  return rows
}, [])

export { GRID_DATA }
