import React from 'react';
import { Container } from 'reactstrap';
import { MsciAnalyst } from './MsciAnalyst';
import { MsciAssociate } from './MsciAssociate';

function WorkExperience(props) {
  return (
    <>
      <Container className="text-center p-3">
        <div className="m-3">
          <h1>MSCI Inc.</h1>
          <h4>ESG Sustainability & Climate Department</h4>
        </div>

        <i style={{ fontSize: '1.12em' }}>
          <strong>Software Engineer III</strong>
        </i>
        <br />
        <i style={{ fontSize: '1.12em' }}>
          June 2019 to January 2026 (6 years and 8 months)
        </i>

        <div className="pb-5">
          <MsciAssociate />
          <MsciAnalyst />
        </div>

        <div className="offset-md-1 mb-2 mt-5 pt-2 myname">
          <p className="fa fa-institution fa-lg"> Education</p>
        </div>
      </Container>
    </>
  );
}

export default WorkExperience;
