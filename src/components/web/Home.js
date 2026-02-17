import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import Contact from './Contact';

function Home() {
  let myName = <div className="myname">Bhushan Mhatre: Software Engineer</div>;

  let pic_style;
  if (window.innerWidth >= 1445) {
    pic_style = {};
  } else if (window.innerWidth >= 500) {
    pic_style = {
      width: (window.innerWidth * 0.4).toString(),
      height: (window.innerWidth * 0.4).toString(),
    };
  } else {
    pic_style = {
      width: (window.innerWidth - 100).toString(),
      height: (window.innerWidth - 100).toString(),
    };
  }

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains('dark'));
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });
    setIsDark(document.body.classList.contains('dark'));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 d-flex flex-column justify-content-center">
        <Container className="text-center py-3" id="picturebox">
          <img
            id="picture"
            className="mb-4"
            src={
              isDark
                ? '/assets/images/onclouds.jpg'
                : '/assets/images/professional.jpg'
            }
            alt="Bhushan Mhatre"
            width={300}
            height={300}
          />
        </Container>
        <Container className="text-center py-3 mb-5">
          <h1>{myName}</h1>
        </Container>
        <Contact />
      </div>
      
      <p className="text-center py-4 mb-0 mt-auto">
        Made in{' '}
        <img
          src="assets/images/indian_flag.svg"
          alt="Indian Flag"
          width="20"
          height="20"
        />{' '}
        with{' '}
        <i
          className="fa fa-heart"
          aria-hidden="true"
          style={{ color: 'red' }}
        ></i>
      </p>
    </div>
  );
}

export default Home;
