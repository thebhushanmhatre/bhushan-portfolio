import React, { useState, useEffect } from 'react';
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
  const [darkMode, setDarkMode] = useState(() => {
    const storedValue = localStorage.getItem("darkMode")
    return (storedValue === null || storedValue === false || storedValue === "false") ? false : true
  })

  const applyTheme = () => {
    document.body.classList.toggle('dark')
    const tags = ['div', 'span', 'a', 'th', 'td', 'button', 'nav']
    tags.map(i => toggleAllTags(i))
  }

  const toggleAllTags = (tag) => {
    var elements = document.getElementsByTagName(tag)
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.toggle('dark')
    }
  }

  const toggleTheme = () => {
    localStorage.setItem("darkMode", !darkMode)
    setDarkMode(darkMode => !darkMode)
    applyTheme()
    window.location.reload()
  }

  useEffect(() => {
    const storedValue = localStorage.getItem("darkMode")
    let dark_body = document.body.classList[0] === "dark"
    if (storedValue === "true" && dark_body === false) {
      applyTheme()
    }
  })

  const CertificateWithId = ({match}) => {
    return(
      <RenderCertificate certificate={props.certificates.filter((item) => item.certId === parseInt(match.params.certId,10))[0]} />
    );
  }

  return(
    <>
      <Navigation toggleTheme={toggleTheme} darkMode={darkMode} />
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
