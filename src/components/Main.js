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
    const newDarkMode = !darkMode;
    localStorage.setItem('darkMode', newDarkMode);
    setDarkMode(newDarkMode);
    applyTheme();
  };

  useEffect(() => {
    // Apply initial theme on component mount
    const storedValue = localStorage.getItem('darkMode');
    const shouldBeDark = storedValue === 'true';
    const isDark = document.body.classList.contains('dark');

    if (shouldBeDark !== isDark) {
      applyTheme();
    }
  }, []); // Empty dependency array means this runs once on mount

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
