import React, { createContext } from 'react';
import './App.css';
import Main from './components/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/web/Error';
// web pages
import Home from './components/web/Home';
import WorkExperience from './components/web/WorkExperience';
import Certificate from './components/web/Certificate';
import RenderCertificate from './components/web/RenderCertificate';
import Project from './components/web/Project';
// projects
import RandomQuoteMachine from './components/projects/RandomQuoteMachine';
import PomodoroClock from './components/projects/PomodoroClock';
import MarkdownPreviewer from './components/projects/MarkdownPreviewer';
import ToDoList from './components/projects/ToDoList';
import Recipes from './components/projects/Recipes';
import CardGame from './components/projects/CardGame.js';
// mobile pages
import MobileHome from './components/mobile/MobileHome';
// utitlities
import isMobile from './utilities/isMobile.js';

import { QUOTES } from './shared/quotes.js';
import { DATA } from './shared/data.js';

const filters = {
  projects: [],
  certificates: [],
  issuer: [],
};

export const initialState = {
  certificates: DATA.certificates,
  contacts: DATA.contacts,
  projects: DATA.projects,
  education: DATA.education,
  quotes: QUOTES,
  filters: filters,
};

export const DataContext = createContext(null);

const CertificateWithId = ({ match }) => {
  return (
    <RenderCertificate
      certificate={
        props.certificates.filter(
          (item) => item.certId === parseInt(match.params.certId, 10)
        )[0]
      }
    />
  );
};

const DefaultPage = () => (isMobile() ? <MobileHome /> : <Home />);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <DefaultPage />,
      },
      {
        path: '/workexp',
        element: <WorkExperience />,
      },
      { path: 'certificates', element: <Certificate /> },
      { path: 'certificate/:certId', element: <CertificateWithId /> },
      { path: 'projects', element: <Project /> },
      { path: 'quotes', element: <RandomQuoteMachine /> },
      { path: 'clock', element: <PomodoroClock /> },
      {
        path: 'todolist',
        element: <ToDoList style={{ background: 'skyblue' }} />,
      },
      { path: 'markdown', element: <MarkdownPreviewer /> },
      { path: 'recipes', element: <Recipes /> },
      { path: 'card-game', element: <CardGame /> },
      {
        path: '*',
        element: <DefaultPage />,
      },
    ],
  },
]);

function App() {
  return (
    <DataContext.Provider value={initialState}>
      <RouterProvider router={router} />
    </DataContext.Provider>
  );
}

export default App;
