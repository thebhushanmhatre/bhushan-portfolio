import React, { Component } from 'react';
import Navigation from './Navigation';
import WorkExperience from './WorkExperience';
import Certificate from './Certificate';
import Home from './Home';
import Education from './Education';
import Project from './Project';
import RenderCertificate from './RenderCertificate';
import RandomQuoteMachine from './projects/RandomQuoteMachine';
import PomodoroClock from './projects/PomodoroClock';
import Markdown from './projects/MarkdownPreviewer';
import ToDoList from './projects/ToDoList';
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
          <Route exact path="/education" component={()=> <Education education={this.props.education} />} />
          <Route exact path="/workexp" component={() => <WorkExperience />} />
          <Route exact path="/certificate" component={() => <Certificate certificates={this.props.certificates} />} />
          <Route path="/certificate/:certId" component={CertificateWithId} />
          <Route exact path="/project" component={() => <Project projects={this.props.projects} />} />
          <Route exact path="/quotes" component={() => <RandomQuoteMachine quotes={this.props.quotes} />} />
          <Route exact path="/clock" component={() => <PomodoroClock />} />
          <Route exact path="/todolist" component={() => <ToDoList style={{background:'skyblue'}} />} />
          <Route exact path="/markdown" component={() => <Markdown />} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
