import React, { Component } from 'react';
import Navigation from './Navigation';
import WorkExperience from './WorkExperience';
import Certificate from './Certificate';
import Home from './Home';
import Project from './Project';
import Contact from './Contact';
import RandomQuoteMachine from './RandomQuoteMachine';
import { Switch, Route, Redirect } from 'react-router-dom';

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
          <Route exact path="/quotes" component={() => <RandomQuoteMachine />} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

export default Main;