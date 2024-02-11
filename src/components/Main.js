import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// Navigation bar
import Navigation from './Navigation';


function Main() {
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

  return (
    <>
      <Navigation toggleTheme={toggleTheme} darkMode={darkMode} />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default Main;
