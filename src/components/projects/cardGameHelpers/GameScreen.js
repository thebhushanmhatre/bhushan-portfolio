import { useCallback, useState } from 'react';
import DisplayCard from './DisplayCard';
import GameStats from './GameStats';
import drawCards from './cardGameUtilities';

const btnStyles = {
  backgroundColor: 'aliceblue',
  padding: '8px 16px ',
  border: 'none',
  borderRadius: '4px',
  fontWeight: '500',
  fontSize: '20px',
};

export function PlayBtn({ setCardsDrawn }) {
  return (
    <div
      style={{
        height: '70vh',
        alignContent: 'center',
      }}
      className="text-center align-middle"
    >
      <button style={btnStyles} onClick={() => setCardsDrawn(true)}>
        Start Game
      </button>
    </div>
  );
}

const [card1, card2, gameStats] = drawCards();

const intialCardDetails = {
  card1,
  card2,
  gameStats,
};

export function GameScreen() {
  const [carDetails, setCardDetails] = useState(intialCardDetails);

  const refreshCardDetails = useCallback(() => {
    const [card1Data, card2Data, gameStats] = drawCards();

    setCardDetails({
      card1: card1Data,
      card2: card2Data,
      gameStats,
    });
  }, []);

  return (
    <>
      <GameStats gameStats={gameStats} />

      <div
        style={{
          marginTop: '50px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          textAlign: 'center',
          alignContent: 'center',
        }}
      >
        <DisplayCard card={carDetails.card1} />
        <div
          style={{
            alignContent: 'center',
            margin: '50px',
          }}
        >
          v.s.
        </div>
        <DisplayCard card={carDetails.card2} />
      </div>

      <div className="text-center">
        {carDetails.card1.draw && <Results resultText={'Ohh! Its a Draw'} />}
      </div>

      <div className="text-center mt-5">
        <button
          className="btn-refresh"
          onClick={refreshCardDetails}
          style={btnStyles}
        >
          Refresh Cards
        </button>
      </div>
    </>
  );
}

export function Results({ resultText }) {
  return (
    <div
      style={{
        borderRadius: '10px',
        marginTop: '10px',
        padding: '10px 0',
        fontSize: '25px',
        backgroundColor: 'aliceblue',
      }}
    >
      {resultText}
    </div>
  );
}
