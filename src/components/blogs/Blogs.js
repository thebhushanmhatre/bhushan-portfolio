import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { useTheme } from '../../contexts/ThemeContext';
import { BLOGS_DATA } from '../../shared/blogs';

export function Blogs() {
  const { darkMode } = useTheme();

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg="10">
          <header className="mb-5">
            <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
              Curated Content
            </h1>
            <p className="fs-5 text-muted mb-4" style={{ lineHeight: '1.6' }}>
              Throughout my journey, I have been fortunate to learn from
              incredible resources and talented individuals. I believe that
              sharing knowledge is a way to give back to the community that has
              helped me grow. Here, I aim to curate and share meaningful content
              that has inspired me, in hopes it might be helpful or interesting
              to you as well.
            </p>
          </header>

          <hr className="my-5" style={{ opacity: 0.1 }} />

          {BLOGS_DATA.map((section) => {
            const items = section.items || [];
            return (
              <section key={section.key} className="mb-5">
                <h2 className="h3 fw-bold mb-3 d-flex align-items-center">
                  <i
                    className={`fa ${section.icon} me-3`}
                    style={{ color: '#FF9933' }}
                  ></i>
                  {section.title}
                </h2>
                <p className="text-muted mb-4 opacity-75">
                  {section.description}
                </p>

                {items.length > 0 ? (
                  <ListGroup
                    flush
                    className="rounded-3 shadow-sm border overflow-hidden"
                  >
                    {items.map((item, idx) => (
                      <ListGroupItem
                        key={idx}
                        tag="a"
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        action
                        className={`d-flex align-items-center py-3 border-0 ${
                          darkMode
                            ? 'bg-dark text-light border-bottom border-secondary'
                            : 'bg-white text-dark'
                        }`}
                        style={{ transition: 'all 0.2s ease-in-out' }}
                      >
                        <i
                          className="fa fa-external-link me-3 opacity-50"
                          style={{ fontSize: '0.8rem' }}
                        ></i>
                        <span className="fw-medium">{item.title}</span>
                        <i className="fa fa-angle-right ms-auto opacity-50"></i>
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                ) : (
                  <div
                    className={`p-4 rounded-3 text-center border-1 border-dashed ${
                      darkMode
                        ? 'bg-dark border-secondary'
                        : 'bg-light border-light-subtle'
                    }`}
                    style={{ borderStyle: 'dashed' }}
                  >
                    <i
                      className="fa fa-hourglass-start mb-2 opacity-50"
                      style={{ fontSize: '1.5rem' }}
                    ></i>
                    <p className="mb-0 text-muted small">
                      Currently curating these resources. Please check back
                      later!
                    </p>
                  </div>
                )}
              </section>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
