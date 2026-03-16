import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

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

export const CompanyHeader = ({ company, department }) => (
  <div className="text-center mb-4">
    <h1 className="edu-title">{company}</h1>
    <h4 className="text-muted">{department}</h4>
  </div>
);

export const CareerCard = ({ children }) => (
  <div className="career-card fade-in">{children}</div>
);

export const ImageModal = ({ isOpen, toggle, src, alt }) => (
  <Modal isOpen={isOpen} toggle={toggle} size="lg" centered fade className="image-modal">
    <ModalHeader toggle={toggle} className="border-0 pb-0">{alt}</ModalHeader>
    <ModalBody className="p-0 text-center bg-transparent">
      <div className="p-3">
        <img
          src={src}
          alt={alt}
          className="img-fluid rounded shadow-lg"
          style={{ maxHeight: '80vh', objectFit: 'contain' }}
        />
      </div>
    </ModalBody>
  </Modal>
);

export const ClickableImage = ({ src, alt, wrapperClass = "edu-img-wrapper" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div 
        className={wrapperClass} 
        onClick={toggle} 
        style={{ cursor: 'zoom-in' }}
        title="Click to enlarge"
      >
        <img className="edu-image" src={src} alt={alt} />
      </div>
      <ImageModal isOpen={isOpen} toggle={toggle} src={src} alt={alt} />
    </>
  );
};
