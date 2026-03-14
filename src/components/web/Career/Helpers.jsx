// Trophy and Medal Icon Components

export const TrophyIcon = () => (
  <span role="img" aria-label="trophy" style={{ marginRight: '5px' }}>
    🏆
  </span>
);

export const MedalIcon = ({ type }) => {
  if (type === 'silver')
    return (
      <span role="img" aria-label="medal" style={{ marginRight: '5px' }}>
        🥈
      </span>
    );

  if (type === 'bronze')
    return (
      <span role="img" aria-label="medal" style={{ marginRight: '5px' }}>
        🥉
      </span>
    );

  return null;
};

export const FireIcon = () => (
  <span role="img" aria-label="fire" style={{ marginRight: '5px' }}>
    🔥
  </span>
);

export const CheckIcon = () => (
  <span
    role="img"
    aria-label="check"
    style={{ marginRight: '5px', color: 'green' }}
  >
    ✔
  </span>
);
