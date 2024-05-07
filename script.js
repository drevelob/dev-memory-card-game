const CARD_SOURCE = [
  {
    name: 'pink',
    img: './images/00_char_pink.jpg'
  },
  {
    name: 'yellow',
    img: './images/01_char_yellow.jpg'
  },
  {
    name: 'orange',
    img: './images/02_char_orange.jpg'
  },
  {
    name: 'green',
    img: './images/03_char_green.jpg'
  },
  {
    name: 'red',
    img: './images/04_char_red.jpg'
  },
  {
    name: 'blue',
    img: './images/05_char_blue.jpg'
  },
  {
    name: 'purple',
    img: './images/06_char_purple.jpg'
  },
  {
    name: 'black',
    img: './images/07_char_black.jpg'
  },
];
const cardContainer = document.querySelector('#grid');
const cardBoard = getRadomCardBoard();

function getRadomCardBoard() {

  let board = [];

  for (let i = 0; i < CARD_SOURCE.length; i++) {
    board.push(CARD_SOURCE[i], CARD_SOURCE[i]);
  }

  board.sort(() => 0.5 - Math.random());

  return board;
}

(function displayCardBoard() {
  for (let i = 0; i < cardBoard.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', './images/cover_card.jpg');
    card.setAttribute('width', '200');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    cardContainer.appendChild(card);
  }
})();

function flipCard() {
  const cardSelected = this;
  const cardId = cardSelected.getAttribute('data-id');
  cardSelected.setAttribute('src', cardBoard[cardId].img);
}