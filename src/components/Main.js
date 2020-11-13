import React, { Component } from 'react';
import Navigation from './Navigation';
import WorkExperience from './WorkExperience';
import Certificate from './Certificate';
import Home from './Home';
import Project from './Project';
import RenderCertificate from './RenderCertificate';
import RandomQuoteMachine from './projects/RandomQuoteMachine';
import PomodoroClock from './projects/PomodoroClock';
import Markdown from './projects/MarkdownPreviewer';
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

class Main extends Component{

  render(){
    const CertificateWithId = ({match}) => {
      console.log(this.props.certificates.filter((item) => item.certId === parseInt(match.params.certId,10))[0])
      return(
        <RenderCertificate certificate={this.props.certificates.filter((item) => item.certId === parseInt(match.params.certId,10))[0]} />
      );
    }

    return(
      <>
        <Navigation />
        <Switch>
          <Route exact path="/" component={() => <Home contacts={this.props.contacts} />} />
          <Route exact path="/workexp" component={() => <WorkExperience education={this.props.education} />} />
          <Route exact path="/certificates" component={() => <Certificate certificates={this.props.certificates} />} />
          <Route path="/certificate/:certId" component={CertificateWithId} />
          <Route exact path="/projects" component={() => <Project projects={this.props.projects} />} />
          <Route exact path="/project/quotes" component={() => <RandomQuoteMachine quotes={this.props.quotes} />} />
          <Route exact path="/project/clock" component={() => <PomodoroClock />} />
          <Route exact path="/project/todolist" component={() => <ToDoList style={{background:'skyblue'}} />} />
          <Route exact path="/project/markdown" component={() => <Markdown />} />
          <Route exact path="/project/recipes" component={() => <Recipes />} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
