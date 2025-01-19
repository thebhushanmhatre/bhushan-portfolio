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

function divideCards(cards) {
  const midpoint = cards.length * 0.5;
  return [cards.slice(0, midpoint), cards.slice(midpoint)];
}

function drawOneAtRandom(player1) {
  const n = player1.length - 1;
  const randomIndex = Math.floor(Math.random() * n);
  const drawnCard = player1[randomIndex];

  // delete drawn card from player's cards
  player1 = player1
    .slice(0, randomIndex)
    .concat(player1.slice(randomIndex + 1));

  return drawnCard;
}

function decideWinner(card1, card2) {
  if (card1.numValue == card2.numValue) {
    card1['draw'] = true;
    card2['draw'] = true;
  } else if (card1.numValue > card2.numValue) {
    card1['winner'] = true;
  } else card2['winner'] = true;
}

export default function drawCards() {
  const allCards = generateDeck();
  shuffleCards(allCards);

  const [player1, player2] = divideCards(allCards);

  const card1 = drawOneAtRandom(player1);
  const card2 = drawOneAtRandom(player2);

  decideWinner(card1, card2);

  return [card1, card2];
}
