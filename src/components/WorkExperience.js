import React from 'react';

function WorkExperience(){
  return(
    <div className="container text-center mt-5 p-2" style={{textShadow: '1px 1px 10px white', opacity: 1, backgroundColor: 'whitesmoke'}}>
      <img className="col-12 col-md-8 col-lg-4" src="assets/images/MSCI_logo.svg" alt="MSCI Logo from Wikipedia"/>
      <h3>ESG Department</h3>
      <i style={{fontSize: '1.12em'}}><strong>Software Developer</strong> - Ruby, Javascript</i>
      <br/>
      <i style={{fontSize: '1.12em'}}>10th June, 2019 to Present</i>
    </div>
  );
}

export default WorkExperience;