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

const FireIcon = () => (
  <span role="img" aria-label="fire" style={{ marginRight: '5px' }}>
    🔥
  </span>
);

const CheckIcon = () => (
  <span role="img" aria-label="check" style={{ marginRight: '5px', color: 'green' }}>
    ✔
  </span>
);

function WorkExperience(props) {
  return (
    <>
      <Container className="text-center p-3">
        <div className="m-3">
          <h1>MSCI Inc.</h1>
          <h4>ESG Sustainability & Climate Department</h4>
        </div>

        <i style={{ fontSize: '1.12em' }}>
          <strong>Software Engineer II</strong>
        </i>
        <br />
        <i style={{ fontSize: '1.12em' }}>June 2019 to January 2026</i>

        <div className="pb-5">
          <div
            className="text-start mt-4 mb-5"
            style={{ maxWidth: '700px', margin: '0 auto' }}
          >
            <h4>Associate:</h4>
            <strong>Jan 2022 - Jan 2026</strong>
            <p>
              Worked as a Senior Software Engineer in the ESG S&C Engineering Department. (Client Facing App Dev team)
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
                "Star of the Month" Team Award for building on Demand Solutions UI in Sept 2025.
              </li>
              <li>
                <TrophyIcon />
                "Star of the Month" Team Award for contributing to Issuer feedback workflow upgrade in Feb 2023.
              </li>
              <li>
                <TrophyIcon />
                "Star of the Month" Individual Award for Query Transformation Project in Dec 2022.
              </li>
              <li>
                <TrophyIcon />
                "Star of the Month" Team Award for contribution to Climate Targets Data Collection on Issuer Communication Portal in Mar 2022
              </li>
              <br />
              <li>
                <MedalIcon type="silver" />
                MSCI Global T&D AI Hackathon 2024 - Certificate of Achievement (Finalist)
              </li>
              <li>
                <MedalIcon type="bronze" />
                MSCI India Hackathon 2022 - 3rd Place
              </li>
            </ul>

            <p>Check the details in the Honors & awards section on linkedin by clicking <a href="https://www.linkedin.com/in/bhushanmhatre/details/honors" target="_blank">here</a></p>

            <strong>Key Responsibilities & Contributions:</strong>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
               <li><CheckIcon />Built a library of reusable components to streamline application development across teams.</li>
               <li><CheckIcon />Built entire UI for MSCI One's Document Store distribution platform and internal Documents Acquisition & Quality Check platform, supporting efficient document management and data validation across functions.</li>
               <li><CheckIcon />Served as the engineering lead and point of contact for the Issuer Communication Portal (ICP) for 2 years, and for the Legacy ESG Document Store UI for 1 year, ensuring consistent feature delivery and platform reliability throughout.</li>
               <li><CheckIcon />Refactored a legacy Vue.js application into a modular MVCS architecture; optimized SQL performance and enhanced scalability.</li>
               <li><CheckIcon />Proposed and developed a transparency feature to elevate issuer engagement, transforming them into alternative data contributors.</li>
            </ul>
          </div>

          <div
            className="text-start mt-4"
            style={{ maxWidth: '700px', margin: '0 auto' }}
          >
            <h4>Analyst:</h4>
            <strong>Jun 2019 - Dec 2021</strong>

            <p>
              Worked as a Software Engineer in the ESG Engineering Department. (Internal App Dev team)
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

            <strong>Key Responsibilities:</strong>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li><FireIcon /> Point of Contact from the Developers Team for Production Issues. (During the March and April monthly release sprint, 2021)</li>
              <li><FireIcon /> Deployments of multiple apps for March and April releases.</li>
            </ul>
            
            <strong>Key projects:</strong>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li><CheckIcon />Release Automation and DevOps Suite (2021)</li>
                <li><CheckIcon />Rating Model Enhancement (RME) - Corporate Behavior and Governance Pillar (2020-21) <TrophyIcon /></li>
                <li><CheckIcon />Key Issue Smart Texts (2019-20)</li>
                <li><CheckIcon />IVA and Data Metrics Reports Decommissioning (2020)</li>
                <li><CheckIcon />Multilevel Dependencies Extraction Tool for Impact Analysis (2020)</li>
            </ul>

            <p>
              Played an active role in Documenting Workflow/Processes and Best Practices.
              <br/>
              Organized Game Sessions to beat WFH blues and get new team members involved.
            </p>
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
