const 
cardsContainer = document.getElementById('cards-container'),
prevBtn = document.getElementById('prev'),
nextBtn = document.getElementById('next'),
firstBtn = document.getElementById('first'),
lastBtn = document.getElementById('last'),
currentEl = document.getElementById('current'),
showBtn = document.getElementById('show'),
hideBtn = document.getElementById('hide'),
questionEl = document.getElementById('question'),
answerEl = document.getElementById('answer'),
addCardBtn = document.getElementById('add-card'),
clearBtn = document.getElementById('clear'),
addContainer = document.getElementById('add-container');

// Keep track of current card
let currentActiveCard = 0;

// Store DOM cards
const cardsEl = [];

// Store card data
const cardsData = [
  {
    question: 'What must a variable begin with?',
    answer: 'A letter, $ or _'
  },
  {
    question: 'What is a variable?',
    answer: 'A container for a piece of data'
  },
  {
    question: 'Example of Case Sensitive Variable',
    answer: 'thisIsAVariable'
  }
];

// Create all cards
function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}

// Create a single card in the DOM
function createCard(data, index) {
  const card = document.createElement('div');
  card.classList.add('card');

  if (index === 0) {
    card.classList.add('active');
  }

  card.innerHTML = `
  <div class="inner-card">
        <div class="inner-card-front">
          <p>
            ${data.question}
          </p>
        </div>
        <div class="inner-card-back">
          <p>
            ${data.answer}
          </p>
        </div>
      </div>
  `;

  card.addEventListener('click', () => card.classList.toggle('show-answer'));

  // Add to DOM cards
  cardsEl.push(card);

  cardsContainer.appendChild(card);

  updateCurrentText();
}

// Show number of cards
function updateCurrentText() {
  currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}`
}

createCards();


// Event listeners

nextBtn.addEventListener('click', () => {
  cardsEl[currentActiveCard].className = 'card left';

  currentActiveCard = currentActiveCard + 1;

  if (currentActiveCard > cardsEl.length - 1) {
    currentActiveCard = cardsEl.length - 1;
  }


  cardsEl[currentActiveCard].className = 'card active';

  updateCurrentText();
});

prevBtn.addEventListener('click', () => {
  cardsEl[currentActiveCard].className = 'card right';

  currentActiveCard = currentActiveCard - 1;

  if (currentActiveCard < 0) {
    currentActiveCard = 0;
  }


  cardsEl[currentActiveCard].className = 'card active';

  updateCurrentText();
});

firstBtn.addEventListener('click', () => {
  cardsEl[currentActiveCard].className = 'card left';

  currentActiveCard = 0;


  cardsEl[currentActiveCard].className = 'card active';

  updateCurrentText();
});

lastBtn.addEventListener('click', () => {
  cardsEl[currentActiveCard].className = 'card right';

  currentActiveCard = cardsEl.length - 1;

  cardsEl[currentActiveCard].className = 'card active';

  updateCurrentText();
})