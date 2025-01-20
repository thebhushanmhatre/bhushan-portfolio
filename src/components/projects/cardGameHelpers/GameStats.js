import { gameStats } from './cardGameUtilities';

export default function GameStats({ gameStats }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
      }}
    >
      <div className="mr-5">Scores</div>
      <div className="mx-5">Player 1: {gameStats.player1Wins}</div>
      <div className="ml-5">Player 2: {gameStats.player2Wins}</div>
    </div>
  );
}
