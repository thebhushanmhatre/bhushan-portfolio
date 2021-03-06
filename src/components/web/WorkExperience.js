import React from 'react';
import Education from './Education';
import {Container} from  'reactstrap';

function WorkExperience(props){
  return(
    <>
    <Container className="text-center mt-5 p-3">
      <img className="col-12 col-md-8 col-lg-4 bg-white" src="assets/images/MSCI_logo.svg" alt="MSCI Logo from Wikipedia"  />
      <h3>ESG Department</h3>
      <i style={{fontSize: '1.12em'}}><strong>Software Developer</strong> - Ruby, Javascript</i>
      <br/>
      <i style={{fontSize: '1.12em'}}>June 2019 to Present</i>
      <div className="offset-md-1 mb-2 mt-4 pt-2 myname">
        <p className="fa fa-institution fa-lg"> Education</p>
      </div>
      <Education education={props.education} />
    </Container>
    </>
  );
}

export default WorkExperience;