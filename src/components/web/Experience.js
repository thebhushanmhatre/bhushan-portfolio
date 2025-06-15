import React from 'react';
import Education from './Education';
import WorkExperience from './WorkExperience';

function Experience(props) {
  return (
    <>
      <WorkExperience />
      <Education education={props.education} />
    </>
  );
}

export default Experience;
