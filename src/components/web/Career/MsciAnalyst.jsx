import { CheckIcon, FireIcon, TrophyIcon } from './Helpers';

export const MsciAnalyst = () => {
  return (
    <div
      className="text-start mt-4"
      style={{ maxWidth: '700px', margin: '0 auto' }}
    >
      <h4>Analyst:</h4>
      <strong>Jun 2019 - Dec 2021</strong>

      <p>
        Worked as a <strong>Software Engineer (Backend)</strong> in the ESG
        Engineering Department. (Internal App Dev team)
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
          "Star of the Month" Team Award for contribution to the ESG rating
          model enhancement project in Q4-2020.
        </li>
      </ul>

      <strong>Key Responsibilities:</strong>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        <li>
          <FireIcon /> Point of Contact from the Developers Team for Production
          Issues. (During the March and April monthly release sprint, 2021)
        </li>
        <li>
          <FireIcon /> Deployments of multiple apps for March and April
          releases.
        </li>
      </ul>

      <strong>Key projects:</strong>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        <li>
          <CheckIcon />
          Release Automation and DevOps Suite (2021)
        </li>
        <li>
          <CheckIcon />
          Rating Model Enhancement (RME) - Corporate Behavior and Governance
          Pillar (2020-21) <TrophyIcon />
        </li>
        <li>
          <CheckIcon />
          Key Issue Smart Texts (2019-20)
        </li>
        <li>
          <CheckIcon />
          IVA and Data Metrics Reports Decommissioning (2020)
        </li>
        <li>
          <CheckIcon />
          Multilevel Dependencies Extraction Tool for Impact Analysis (2020)
        </li>
      </ul>

      <p>
        Played an active role in Documenting Workflow/Processes and Best
        Practices.
        <br />
        Organized Game Sessions to beat WFH blues and get new team members
        involved.
      </p>
    </div>
  );
};
