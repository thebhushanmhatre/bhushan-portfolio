export default function DisplayCard({ card }) {
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
      <div
        style={{
          width: '225px',
          height: '350px',
          padding: '20px',
          border: '1px solid',
          borderRadius: '10px',
          borderColor: 'gray',
          alignContent: 'center',
        }}
      >
        <div
          style={{
            color: ['heart', 'diamond'].includes(card.suit) ? 'red' : '',
            fontSize: '30px',
          }}
        >
          <div
            style={{
              fontSize: '100px',
            }}
          >
            {cardIcon(card.suit)}
          </div>
          {card.value}
        </div>
      </div>
      {card.winner && (
        <div style={{ color: 'goldenrod', fontSize: '40px' }}>Winner</div>
      )}
    </div>
  );
}
