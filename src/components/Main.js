import React, { Component } from 'react';
import Navigation from './Navigation';
import WorkExperience from './WorkExperience';
import Certificate from './Certificate';
import Home from './Home';
import Project from './Project';
import Contact from './Contact';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

class Main extends Component{

  render(){
    // console.log(this.state)
    return(
      <>
        <Navigation />
        <Switch>
          <Route exact path="/" component={()=> <Home />} />
          <Route exact path="/workexp" component={() => <WorkExperience />} />
          <Route path="/workexp/:workexpId" component={() => <WorkExperience />} />
          <Route exact path="/certificate" component={() => <Certificate />} />
          <Route path="/certificate/:certificateId" component={<Certificate />} />
          <Route exact path="/project" component={() => <Project />} />
          <Route path="/project/:projectId" component={() => <Project />} />
          <Route exact path="/contact" component={() => <Contact />} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

export default Main;