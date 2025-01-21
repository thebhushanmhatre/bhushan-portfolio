function generateDeck() {
  const suites = ['heart', 'diamond', 'club', 'spade'];
  const values = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];
  const cards = [];

  for (let suit of suites) {
    values.forEach((value, index) => {
      cards.push({
        suit,
        value,
        numValue: index,
      });
    });
  }

  return cards;
}

function shuffleCards(cards) {
  let n = cards.length - 1;

  cards.forEach((card, index) => {
    let randomIndex = Math.floor(Math.random() * n);
    let randomCard = cards[randomIndex];

    cards[randomIndex] = card;
    cards[index] = randomCard;
  });
}

// returns [player1Deck, player2Deck]
function divideCards(cards) {
  const midpoint = cards.length * 0.5;
  return [cards.slice(0, midpoint), cards.slice(midpoint)];
}

// draw card and delete them from player cards
function drawOneAtRandom(playerCards) {
  const n = playerCards.length - 1;

  const randomIndex = Math.floor(Math.random() * n);
  const drawnCard = playerCards[randomIndex];

  // delete drawn card from player's cards
  playerCards = playerCards
    .slice(0, randomIndex)
    .concat(playerCards.slice(randomIndex + 1));

  return [drawnCard, playerCards];
}

// adds winner property to the cards
function decideWinner(card1, card2) {
  if (card1.numValue == card2.numValue) {
    card1['draw'] = true;
    card2['draw'] = true;
  } else if (card1.numValue > card2.numValue) {
    card1['winner'] = true;
  } else {
    card2['winner'] = true;
  }
}

// shuffles the deck and distribute cards
function refreshCards() {
  shuffleCards(allCards);
  [player1Deck, player2Deck] = divideCards(allCards);
}

// draw two cards from distributed player cards
function drawCards() {
  if (player1Deck.length == 0) {
    // all cards are used, shuffle cards and redistribute again
    refreshCards();
  }

  let player1Card;
  let player2Card;

  [player1Card, player1Deck] = drawOneAtRandom(player1Deck);
  [player2Card, player2Deck] = drawOneAtRandom(player2Deck);

  decideWinner(player1Card, player2Card);

  return [player1Card, player2Card];
}

let allCards = generateDeck(); // one time stuff
let player1Deck, player2Deck;

refreshCards();

export default drawCards;
