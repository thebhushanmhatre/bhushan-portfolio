// Draw two random cards from deck
// Card with higher value wins
import { Container } from 'reactstrap';
import ProjectBreadCrumb from '../common/ProjectBreadcrumb';
import DisplayCard from './cardGameHelpers/DisplayCard';
import drawCards from './cardGameHelpers/cardGameUtilities';

export default function CardGame() {
  const [card1, card2, winner] = drawCards();

  return (
    <Container className="mt-2">
      <ProjectBreadCrumb projectName={'Card Game'} />

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
        <DisplayCard card={card1} />
        <div
          style={{
            alignContent: 'center',
            margin: '50px',
          }}
        >
          v.s.
        </div>
        <DisplayCard card={card2} />
      </div>

      <div className="text-center">{card1.draw && <>Ohh! Its a Draw</>}</div>
    </Container>
  );
}
