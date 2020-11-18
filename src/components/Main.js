import React from 'react';
import Navigation from './Navigation';
import WorkExperience from './WorkExperience';
import Certificate from './Certificate';
import Home from './Home';
import Project from './Project';
import RenderCertificate from './RenderCertificate';
import RandomQuoteMachine from './projects/RandomQuoteMachine';
import PomodoroClock from './projects/PomodoroClock';
import MarkdownPreviewer from './projects/MarkdownPreviewer';
import ToDoList from './projects/ToDoList';
import Recipes from './projects/Recipes';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    certificates: state.certificates,
    contacts: state.contacts,
    projects: state.projects,
    education: state.education,
    quotes: state.quotes
  }
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
        <Route exact path="/" component={() => <Home contacts={props.contacts} />} />
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
