import React from 'react';
import { Container } from 'reactstrap';

// Trophy and Medal Icon Components
const TrophyIcon = () => (
  <span role="img" aria-label="trophy" style={{ marginRight: '5px' }}>
    🏆
  </span>
);

const MedalIcon = ({ type }) => {
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

function WorkExperience(props) {
  return (
    <>
      <Container className="text-center p-3">
        <div className="m-3">
          <h1>MSCI Inc.</h1>
          <h4>ESG Climate & Sustainability Department</h4>
        </div>

        <i style={{ fontSize: '1.12em' }}>
          <strong>Software Engineer II</strong>
        </i>
        <br />
        <i style={{ fontSize: '1.12em' }}>June 2019 to Present</i>

        <div className="pb-5">
          <div
            className="text-start mt-4 mb-5"
            style={{ maxWidth: '700px', margin: '0 auto' }}
          >
            <h4>Associate:</h4>
            <strong>Jan 2022 - Present</strong>
            <p>
              Working as a Software Engineer in the ESG Engineering
              Department.(Client Facing App Dev team)
            </p>

            <p>
              <strong>Tech Stack:</strong>
              <br />
              TypeScript (Fluent UI, React, Redux, Saga, Zustand, React-Query,
              NestJS), JavaScript (VueJS, Express), SQL (Oracle DB).
              <br />
              Azure (App Service, AKS, and related services)
            </p>

            <strong>Awards:</strong>
            <br />
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>
                <TrophyIcon />
                "Star of the Month" Team Award for contributing to On Demand
                Solutions in Aug 2025.
              </li>

              <li>
                <MedalIcon type="silver" />
                MSCI Global T&D AI Hackathon 2024 - Certificate of Achievement
                (Finalist)
              </li>

              <li>
                <TrophyIcon />
                "Star of the Month" Team Award for contributing to Issuer
                feedback workflow upgrade in Feb 2023.
              </li>

              <li>
                <TrophyIcon />
                "Star of the Month" Individual Award for Query Transformation
                Project in Dec 2022.
              </li>

              <li>
                <MedalIcon type="bronze" />
                MSCI India Hackathon 2022 - 3rd Place
              </li>

              <li>
                <TrophyIcon />
                "Star of the Month" Team Award for contribution to Climate
                Targets Data Collection on Issuer Communication Portal in Mar
                2022.
              </li>
            </ul>
          </div>

          <div
            className="text-start mt-4"
            style={{ maxWidth: '700px', margin: '0 auto' }}
          >
            <h4>Analyst:</h4>
            <strong>Jun 2019 - Dec 2021</strong>

            <p>
              Worked as a Software Engineer in the ESG Engineering Department.
              (Internal App Dev team)
            </p>

            <p>
              <strong>Tech Stack:</strong> Ruby and SQL (Oracle DB).
              <br />
              On-Prem Servers + Azure (AKS and related services)
            </p>

            <strong>Awards:</strong>
            <br />
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>
                <TrophyIcon />
                "Star of the Month" Team Award for contribution to the ESG
                rating model enhancement project in Q4-2020.
              </li>
            </ul>
          </div>
        </div>

        <div className="offset-md-1 mb-2 mt-5 pt-2 myname">
          <p className="fa fa-institution fa-lg"> Education</p>
        </div>
      </Container>
    </>
  );
}

export default WorkExperience;
