import { Results } from './GameScreen';
import isMobile from '../../../utilities/isMobile';

export default function DisplayCard({ card, score }) {
  const onMobile = isMobile();

  const cardIcon = (suit) => {
    if (suit == 'heart') {
      return '♥';
    }

    if (suit == 'diamond') {
      return '♦';
    }

    if (suit == 'club') {
      return '♣';
    }

    if (suit == 'spade') {
      return '♠';
    }
  };

  return (
    <div>
      <Results resultText={'Score: ' + (score || 0)} />

      <div
        style={{
          marginTop: '10px',
          width: onMobile ? '120px' : '225px',
          height: onMobile ? '180px' : '350px',
          padding: '20px',
          border: '1px solid',
          borderRadius: '10px',
          borderColor: 'gray',
          alignContent: 'center',
          color: ['heart', 'diamond'].includes(card.suit) ? 'red' : '',
          fontSize: '30px',
        }}
      >
        <div
          style={{
            fontSize: onMobile ? '50px' : '100px',
          }}
        >
          {cardIcon(card.suit)}
        </div>
        {card.value}
      </div>
      {card.winner && <Results resultText={'Winner'} />}
    </div>
  );
}
