import React from 'react';
import Education from './Education';
import WorkExperience from './WorkExperience';

function Career(props) {
  return (
    <>
      <WorkExperience />
      <Education education={props.education} />
    </>
  );
}

export default Career;
