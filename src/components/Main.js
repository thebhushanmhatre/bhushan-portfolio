import React from 'react';
import Navigation from './Navigation';
import WorkExperience from './WorkExperience';
import Certificate from './Certificate';
import Home from './Home';
import Project from './Project';
import Contact from './Contact';

function Main(){
  return(
    <>
      <Navigation />
      <Home />
      <WorkExperience />
      <Certificate />
      <Project />
      <Contact />
    </>
  );
}

export default Main;