// Draw two random cards from deck
// Card with higher value wins
import { useState } from 'react';
import { Container } from 'reactstrap';
import ProjectBreadCrumb from '../common/ProjectBreadcrumb';
import { GameScreen, PlayBtn } from './cardGameHelpers/GameScreen';

export default function CardGame() {
  const [cardsDrawn, setCardsDrawn] = useState(false);

  return (
    <Container className="mt-2">
      <ProjectBreadCrumb projectName={'Card Game'} />
      {cardsDrawn ? <GameScreen /> : <PlayBtn setCardsDrawn={setCardsDrawn} />}
    </Container>
  );
}
