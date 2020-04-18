import React, { Component } from 'react';
import Navigation from './Navigation';
import WorkExperience from './WorkExperience';
import Certificate from './Certificate';
import Home from './Home';
import Project from './Project';
import Contact from './Contact';
import RandomQuoteMachine from './projects/RandomQuoteMachine';
import PomodoroClock from './projects/PomodoroClock';
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
    return(
      <>
        <Navigation />
        <Switch>
          <Route exact path="/" component={()=> <Home education={this.props.education} />} />
          <Route exact path="/workexp" component={() => <WorkExperience />} />
          <Route exact path="/certificate" component={() => <Certificate certificates={this.props.certificates} />} />
          <Route exact path="/project" component={() => <Project projects={this.props.projects} />} />
          <Route exact path="/contact" component={() => <Contact contacts={this.props.contacts} />} />
          <Route exact path="/quotes" component={() => <RandomQuoteMachine quotes={this.props.quotes} />} />
          <Route exact path="/clock" component={() => <PomodoroClock />} />
          <Route exact path="/todolist" component={() => <ToDoList  style={{background:'skyblue'}} />} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
