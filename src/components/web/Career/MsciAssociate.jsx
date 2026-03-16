import { CheckIcon, MedalIcon, TrophyIcon } from './Helpers';

export const MsciAssociate = () => {
  return (
    <div
      className="text-start mt-4 mb-5"
      style={{ maxWidth: '700px', margin: '0 auto' }}
    >
      <h4>Associate:</h4>
      <strong>Jan 2022 - Jan 2026</strong>
      <p>
        Worked as a{' '}
        <strong>
          Senior Software Engineer (FullStack with Frontend Heavy)
        </strong>{' '}
        in the ESG S&C Engineering Department. (Client Facing App Dev team)
      </p>
      <p>
        <strong>Tech Stack:</strong>
        <br />
        TypeScript (Fluent UI, React, Redux, Saga, Zustand, React-Query,
        NestJS), JavaScript (VueJS, Express), SQL (Oracle DB).
        <br />
        Azure (App Service, AKS, and related services)
      </p>

      <p>
        Check all tech stacks I'm familiar with:{' '}
        <a
          href="https://github.com/thebhushanmhatre#-tech-stack"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View full Tech Stack on GitHub"
        >
          <strong>View full Tech Stack on GitHub</strong>
        </a>
      </p>

      <strong>Awards:</strong>
      <br />
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        <li>
          <TrophyIcon />
          "Star of the Month" Team Award for building on Demand Solutions UI in
          Sept 2025.
        </li>
        <li>
          <TrophyIcon />
          "Star of the Month" Team Award for contributing to Issuer feedback
          workflow upgrade in Feb 2023.
        </li>
        <li>
          <TrophyIcon />
          "Star of the Month" Individual Award for Query Transformation Project
          in Dec 2022.
        </li>
        <li>
          <TrophyIcon />
          "Star of the Month" Team Award for contribution to Climate Targets
          Data Collection on Issuer Communication Portal in Mar 2022
        </li>
        <br />
        <li>
          <MedalIcon type="silver" />
          MSCI Global T&D AI Hackathon 2024 - Certificate of Achievement
          (Finalist)
        </li>
        <li>
          <MedalIcon type="bronze" />
          MSCI India Hackathon 2022 - 3rd Place
        </li>
      </ul>

      <p>
        <a
          href="https://www.linkedin.com/in/bhushanmhatre/details/honors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Honors and Awards on LinkedIn"
        >
          <strong>View Honors & Awards on LinkedIn</strong>
        </a>{' '}
        for more details.
      </p>

      <strong>Key Responsibilities & Contributions:</strong>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        <li>
          <CheckIcon />
          Built a library of reusable components to streamline application
          development across teams.
        </li>
        <li>
          <CheckIcon />
          Built entire UI for MSCI One's Document Store distribution platform
          and internal Documents Acquisition & Quality Check platform,
          supporting efficient document management and data validation across
          functions.
        </li>
        <li>
          <CheckIcon />
          Served as the engineering lead and point of contact for the Issuer
          Communication Portal (ICP) for 2 years, and for the Legacy ESG
          Document Store UI for 1 year, ensuring consistent feature delivery and
          platform reliability throughout.
        </li>
        <li>
          <CheckIcon />
          Refactored a legacy Vue.js application into a modular MVCS
          architecture; optimized SQL performance and enhanced scalability.
        </li>
        <li>
          <CheckIcon />
          Proposed and developed a transparency feature to elevate issuer
          engagement, transforming them into alternative data contributors.
        </li>
      </ul>
    </div>
  );
};
