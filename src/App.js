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
// mobile pages
import MobileHome from './components/mobile/MobileHome';

import { QUOTES } from './shared/quotes.js';
import { DATA } from './shared/data.js';

const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};
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
  quotes: QUOTES.quotes,
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
      { path: 'project/quotes', element: <RandomQuoteMachine /> },
      { path: 'project/clock', element: <PomodoroClock /> },
      {
        path: 'project/todolist',
        element: <ToDoList style={{ background: 'skyblue' }} />,
      },
      { path: 'project/markdown', element: <MarkdownPreviewer /> },
      { path: 'project/recipes', element: <Recipes /> },
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
