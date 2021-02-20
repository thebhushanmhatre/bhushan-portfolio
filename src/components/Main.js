import React from 'react';
import Navigation from './Navigation';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// web pages
import WorkExperience from './web/WorkExperience';
import Certificate from './web/Certificate';
import Home from './web/Home';
import RenderCertificate from './web/RenderCertificate';
import Project from './web/Project';
// projects
import RandomQuoteMachine from './projects/RandomQuoteMachine';
import PomodoroClock from './projects/PomodoroClock';
import MarkdownPreviewer from './projects/MarkdownPreviewer';
import ToDoList from './projects/ToDoList';
import Recipes from './projects/Recipes';
// mobile pages
import MobileHome from './mobile/MobileHome'

const mapStateToProps = state => {
  return {
    certificates: state.certificates,
    contacts: state.contacts,
    projects: state.projects,
    education: state.education,
    quotes: state.quotes
  }
}

const isMobile = () => {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
}

function Main(props){
  const CertificateWithId = ({match}) => {
    return(
      <RenderCertificate certificate={props.certificates.filter((item) => item.certId === parseInt(match.params.certId,10))[0]} />
    );
  }

  return(
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={() => isMobile() ? <MobileHome /> : <Home contacts={props.contacts} />} />
        <Route exact path="/workexp" component={() => <WorkExperience education={props.education} />} />
        <Route exact path="/certificates" component={() => <Certificate certificates={props.certificates} />} />
        <Route path="/certificate/:certId" component={CertificateWithId} />
        <Route exact path="/projects" component={() => <Project projects={props.projects} />} />
        <Route exact path="/project/quotes" component={() => <RandomQuoteMachine quotes={props.quotes} />} />
        <Route exact path="/project/clock" component={() => <PomodoroClock />} />
        <Route exact path="/project/todolist" component={() => <ToDoList style={{background:'skyblue'}} />} />
        <Route exact path="/project/markdown" component={() => <MarkdownPreviewer />} />
        <Route exact path="/project/recipes" component={() => <Recipes />} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default withRouter(connect(mapStateToProps)(Main));
