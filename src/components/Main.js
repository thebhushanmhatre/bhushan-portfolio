import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// Navigation bar
import Navigation from './Navigation';
// web pages
import WorkExperience from './web/WorkExperience';
import Certificate from './web/Certificate';
import Home from './web/Home';
import RenderCertificate from './web/RenderCertificate';
import Project from './web/Project';
// projects
import RandomQuoteMachine from './projects/RandomQuoteMachine';
import PomodoroClock from './projects/PomodoroClock';
import MarkdownPreviewer from './projects/MarkdownPreviewer';
import ToDoList from './projects/ToDoList';
import Recipes from './projects/Recipes';
// mobile pages
import MobileHome from './mobile/MobileHome';

const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

function Main(props) {
  const [darkMode, setDarkMode] = useState(() => {
    const storedValue = localStorage.getItem('darkMode');
    return storedValue === null ||
      storedValue === false ||
      storedValue === 'false'
      ? false
      : true;
  });

  const applyTheme = () => {
    document.body.classList.toggle('dark');
    const tags = ['div', 'span', 'a', 'th', 'td', 'button', 'nav'];
    tags.map((i) => toggleAllTags(i));
  };

  const toggleAllTags = (tag) => {
    var elements = document.getElementsByTagName(tag);
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.toggle('dark');
    }
  };

  const toggleTheme = () => {
    localStorage.setItem('darkMode', !darkMode);
    setDarkMode((darkMode) => !darkMode);
    applyTheme();
    window.location.reload();
  };

  useEffect(() => {
    const storedValue = localStorage.getItem('darkMode');
    let dark_body = document.body.classList[0] === 'dark';
    if (storedValue === 'true' && dark_body === false) {
      applyTheme();
    }
  });

  const CertificateWithId = ({ match }) => {
    return (
      <RenderCertificate
        certificate={
          props.certificates.filter(
            (item) => item.certId === parseInt(match.params.certId, 10)
          )[0]
        }
      />
    );
  };

  return (
    <>
      <Navigation toggleTheme={toggleTheme} darkMode={darkMode} />
      <Routes
        path="/"
        element={() =>
          isMobile() ? (
            <MobileHome contacts={props.contacts} />
          ) : (
            <Home contacts={props.contacts} />
          )
        }
      >
        <Route
          path="/workexp"
          element={() => <WorkExperience education={props.education} />}
        />
        <Route
          path="/certificates"
          element={() => <Certificate certificates={props.certificates} />}
        />
        <Route path="/certificate/:certId" element={CertificateWithId} />
        <Route
          path="/projects"
          element={() => (
            <Project projects={props.projects} filters={props.filters} />
          )}
        />
        <Route
          path="/project/quotes"
          element={() => <RandomQuoteMachine quotes={props.quotes} />}
        />
        <Route path="/project/clock" element={() => <PomodoroClock />} />
        <Route
          path="/project/todolist"
          element={() => <ToDoList style={{ background: 'skyblue' }} />}
        />
        <Route path="/project/markdown" element={() => <MarkdownPreviewer />} />
        <Route path="/project/recipes" element={() => <Recipes />} />
      </Routes>
    </>
  );
}

export default Main;
