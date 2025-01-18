import React, { useContext, useState } from 'react';
import { Container, Row, Button } from 'reactstrap';
import RenderCards from './RenderCards';
import RenderCarousel from './RenderCarousel';
import RenderTable from './RenderTable';
import { DataContext } from '../../App';

function Certificate() {
  const [filterBy, setFilterBy] = useState(false);
  const [filterOn, setFilterOn] = useState(false);
  const [iconName, toggleIcon] = useState('fas fa-film fa-lg');
  const certificatesData = useContext(DataContext).certificates;

  const setFilter = (filter, on) => {
    if (filterBy === filter) {
      setFilterBy(false);
    } else {
      setFilterBy(filter);
      setFilterOn(on);
    }
  };

  const getCertis = () => {
    let certificates = certificatesData.filter((item) => item.visible);
    if (filterBy) {
      certificates = certificates.filter(
        (item) => item[filterOn].indexOf(filterBy) !== -1
      );
    }
    return certificates;
  };

  const pickValues = () => {
    return getCertis().map((item) =>
      (({ href, name, issuer, professor, tech, target, inbuilt, src }) => ({
        href,
        name,
        issuer,
        professor,
        tech,
        target,
        inbuilt,
        src,
      }))(item)
    );
  };

  const filters = ['Javascript', 'Python', 'SQL'].map((item) => (
    <Button key={item} className="m-1" onClick={() => setFilter(item, 'tech')}>
      {item}{' '}
    </Button>
  ));

  ['Coursera', 'freeCodeCamp', 'Linkedin'].forEach((item) =>
    filters.push(
      <Button
        key={item}
        className="m-1"
        onClick={() => setFilter(item, 'issuer')}
      >
        {item}{' '}
      </Button>
    )
  );

  const renderCards = <RenderCards items={getCertis()} type={'Certificate'} />;

  const renderTable = (
    <RenderTable
      className="m-4 pb-4"
      items={pickValues()}
      type={'Certificate'}
    />
  );

  const renderFilm = <RenderCarousel certis={getCertis()} />;

  // table -> slider -> cards
  // table -> film   -> th

  // click on table, then icon changes to slider and table is displayed, film && table
  // click on slider, then icon changes to cards and slider/film is displayed, cards && slider
  // click on cards, then icon changes to table and cards is displayed, table && cards/th

  const changeIcon = () => {
    if (iconName == 'fa fa-table fa-lg') {
      toggleIcon('fas fa-film fa-lg');
    } else if (iconName == 'fas fa-film fa-lg') {
      toggleIcon('fa fa-th fa-lg');
    } else {
      toggleIcon('fa fa-table fa-lg');
    }
    return '';
  };

  const iconBtn = (
    <span
      onClick={changeIcon}
      className={iconName}
      style={{ float: 'right' }}
    />
  );

  return (
    <Container>
      <p className="text-lg">
        {filterBy ? filterBy : 'My'} Certificates {filters} {iconBtn}
      </p>
      <Row className="d-flex justify-content-around text-center mb-3">
        {iconName == 'fa fa-th fa-lg' && renderFilm}
        {iconName == 'fas fa-film fa-lg' && renderTable}
        {iconName == 'fa fa-table fa-lg' && renderCards}
      </Row>
    </Container>
  );
}

export default Certificate;
