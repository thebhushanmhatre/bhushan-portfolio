import { useCallback, useEffect, useState } from 'react';
import DisplayCard from './DisplayCard';
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

const [card1, card2] = drawCards();

const initialGameStats = { player1Wins: 0, player2Wins: 0 };

if (card1.winner) {
  initialGameStats.player1Wins++;
} else if (card2.winner) {
  initialGameStats.player2Wins++;
}

const intialCardDetails = {
  card1,
  card2,
};

export function GameScreen() {
  const [carDetails, setCardDetails] = useState(intialCardDetails);
  const [gameStats, setGameStats] = useState(initialGameStats);

  const refreshCardDetails = useCallback(() => {
    const [card1Data, card2Data] = drawCards();

    setCardDetails({
      card1: card1Data,
      card2: card2Data,
    });
  }, []);

  useEffect(() => {
    const { card1, card2 } = carDetails;
    let newGameStats = { ...gameStats };

    if (card1 && card1.winner) {
      newGameStats.player1Wins++;
    } else if (card2 && card2.winner) {
      newGameStats.player2Wins++;
    } else {
      return;
    }

    setGameStats(newGameStats);
  }, [carDetails]);

  return (
    <>
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
        <DisplayCard card={carDetails.card1} score={gameStats.player1Wins} />
        <div
          style={{
            alignContent: 'center',
            margin: '50px',
          }}
        >
          v.s.
        </div>
        <DisplayCard card={carDetails.card2} score={gameStats.player2Wins} />
      </div>

      <div className="text-center">
        {carDetails.card1.draw && carDetails.card2.draw && (
          <Results resultText={'Ohh! Its a Draw'} />
        )}
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
