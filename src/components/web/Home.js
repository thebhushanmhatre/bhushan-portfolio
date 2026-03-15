import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Contact from './Contact';

function Home() {
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
      <Container className="flex-grow-1 d-flex flex-column justify-content-center py-5">
        <Row className="align-items-center flex-column flex-md-row">
          <Col
            md="5"
            className="text-center mb-5 mb-md-0 d-flex justify-content-center pe-md-3"
          >
            <img
              src={
                isDark
                  ? '/assets/images/onclouds.jpg'
                  : '/assets/images/professional.jpg'
              }
              alt="Bhushan Mhatre"
              className="img-fluid home-profile-img"
              style={{
                borderRadius: '50%',
                boxShadow: isDark ? 'none' : '0 20px 40px rgba(0, 0, 0, 0.15)',
                maxWidth: '100%',
                objectFit: 'cover',
              }}
            />
          </Col>

          <Col
            md="7"
            className="text-center text-md-start mb-4 mb-md-0"
            role="main"
          >
            <h1 className="fw-bold mb-3" style={{ fontSize: '3rem' }}>
              <span
                style={{
                  color: isDark ? '#FF9933' : 'inherit',
                }}
              >
                {isDark ? 'नमस्कार' : 'Hello'}
              </span>
              , I am Bhushan🙏🏼
            </h1>

            <h2
              className="h4 mb-4"
              style={{ fontStyle: 'italic', fontWeight: '500' }}
            >
              I like Engineering, Finance & wandering through nature's code.
            </h2>

            <div
              className="mb-4 text-muted"
              style={{ fontSize: '1.1rem', lineHeight: '1.8' }}
            >
              <p>
                I am a software engineer with over 6 years of experience
                building and improving web applications. Throughout my journey,
                I have had the opportunity to learn from and collaborate with
                incredibly talented people—first as a student and later as a
                professional.
              </p>
              <p>
                My experience spans a wide range of projects and stages of the
                software lifecycle. I have worked on large monolithic
                applications, contributed to modernizing legacy frontends by
                rewriting them in React, and built applications from scratch
                using React.
              </p>
              <p>
                I have also had the opportunity to build applications from
                scratch using React. This involved working across the entire
                development lifecycle—gathering requirements, collaborating with
                UX on design decisions, defining API contracts with backend
                teams, and then implementing, testing, and deploying the final
                product. Being part of the process from idea to production has
                been one of the most rewarding aspects of my work.
              </p>
              <p>
                Currently, I am expanding my horizons in system architecture. My
                areas of interest include modern web frameworks, performant and
                secure system architectures. As I continue to dive deep into
                engineering details, I plan to share my learnings via technical
                blogs soon!
              </p>
            </div>

            <div className="mt-4">
              <Contact />
            </div>
          </Col>
        </Row>
      </Container>

      {/* <p className="text-center py-4 mb-0 mt-auto">
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
      </p> */}
    </div>
  );
}

export default Home;
