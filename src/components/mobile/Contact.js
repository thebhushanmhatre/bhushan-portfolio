import React from 'react';
import { Container } from 'reactstrap';

export default function Contact(props) {
  const styles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '40px',
    marginBottom: '40px',
  };

  const contacts =
    props.contacts &&
    props.contacts.map((item) => (
      <div key={item.contId.toString()}>
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: item.color }}
        >
          <i className={item.icon + ' contact-icon'}></i>
        </a>
      </div>
    ));

  return <Container style={styles}>{contacts}</Container>;
}
