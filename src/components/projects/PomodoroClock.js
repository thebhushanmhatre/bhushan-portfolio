import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function convertSecs(s){
  var min = Math.floor(s/60);
  var sec = s%60;
  if(s===0){
    return "00:00";
  }
  return pad(min).toString()+":"+pad(sec).toString();
}

function playbeep(){
  document.getElementById('beep').play();
}

function stopbeep(){
  document.getElementById('beep').pause();
  document.getElementById('beep').load();
}

function pad(number) {
    var str = '' + number;
    while (str.length < 2) {
        str = '0' + str;
    }
    return str;
}

var num = 0;
var clockInterval;
var counter = 0;

class PomodoroClock extends Component {
  constructor(props){
    super(props);
    this.state = {
      thestatus: "Session",
      brlen: 300,
      sesslen: 1500,
      disptimeleft: "25:00",
      timeleft: 1500
    };
    
    this.inc_brlen = this.inc_brlen.bind(this);
    this.dec_brlen = this.dec_brlen.bind(this);
    this.inc_sesslen = this.inc_sesslen.bind(this);
    this.dec_sesslen = this.dec_sesslen.bind(this);
    this.clockstart = this.clockstart.bind(this);
    this.clockrestart = this.clockrestart.bind(this);
    this.caltime = this.caltime.bind(this);
  }
  
  inc_brlen(){
    if (this.state.brlen===3600){
      return;
    }
    this.setState({
      brlen: this.state.brlen + 60
    });
  }
  
  dec_brlen(){
      if (this.state.brlen===60){
        return;
      }
      this.setState({
        brlen: this.state.brlen - 60
      });
  }
  
  inc_sesslen(){
    if (this.state.sesslen===3600){
      return;
    }
    this.setState({
      disptimeleft: pad(Math.floor(this.state.sesslen/60)+1).toString()+":00",
      sesslen: this.state.sesslen + 60
    });
  }
  
  dec_sesslen(){
      if (this.state.sesslen===60){
        return;
      }
      this.setState({
        disptimeleft: pad(Math.floor(this.state.sesslen/60)-1).toString()+":00",
        sesslen: this.state.sesslen - 60
      });
  }
  
  caltime(){
    counter = counter + 1;
    if(this.state.timeleft >= counter){
      var diff = convertSecs(this.state.timeleft - counter);
      this.setState({
        disptimeleft: diff
      })
    }
    
    if(this.state.thestatus==="Session" && counter===61){
      playbeep();
      counter = 0;
      this.setState({
        thestatus: "Break",
        timeleft: this.state.brlen,
        disptimeleft: convertSecs(this.state.brlen),
      });
      } 
    if(this.state.thestatus==="Break" &&  counter===61) {
      playbeep();
      counter = 0;
      this.setState({
        thestatus: "Session",
        timeleft: this.state.sesslen,
        disptimeleft: convertSecs(this.state.sesslen),
      });
    }
  }
  
  clockstart(){
    if(this.state.thestatus==="Session"){
      this.setState({
        timeleft: this.state.sesslen
      });
    }
    if(this.state.thestatus==="Break"){
      this.setState({
        timeleft: this.state.brlen
      });
    }
    num++;
    // Runs when num is Odd
    if(num % 2 !== 0){
      clockInterval = setInterval(this.caltime, 1000);
    } else {
      num = 0
      clearInterval(clockInterval);
    }
  }
  
  clockrestart(e) {
    num = 0;
    counter = 0;
    clearInterval(clockInterval);
    stopbeep();
    this.setState({
      thestatus: "Session",
      brlen: 300,
      sesslen: 1500,
      disptimeleft: "25:00",
      timeleft: 1500
    });
  }
  
  render() {
    return(
      <div className="container text-center bg-light">
      <Breadcrumb>
        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="/project">Projects</a></BreadcrumbItem>
        <BreadcrumbItem active>Pomodoro Clock</BreadcrumbItem>
      </Breadcrumb>
        <h2 style={{backgroundColor: 'skyblue', marginBottom: '20px', borderRadius: '15px'}} class="text-center p-3"> Pomodoro Clock </h2>
        <audio id="beep" src="https://actions.google.com/sounds/v1/alarms/medium_bell_ringing_near.ogg" type="audio/ogg"></audio>

        <Row className="container mb-5 mt-5 text-center">
          <Col style={{backgroundColor: 'skyblue', marginBottom: '20px', padding: '15px', borderRadius: '50px'}}>
            <button id="break-increment" onClick={this.inc_brlen}>
              <i className="fa fa-arrow-up fa-lg p-2 m-2"></i>
            </button>
            <h4>Break Length</h4>
            <h4 id="break-length">{Math.floor(this.state.brlen/60)}</h4>
            <button id="break-decrement" onClick={this.dec_brlen}>
              <i className="fa fa-arrow-down fa-lg p-2 m-2"></i>
            </button>
          </Col>

          <Col className="col-1" />
          
          <Col className="offset-sm-1" style={{backgroundColor: 'skyblue', marginBottom: '20px', padding: '15px', borderRadius: '50px'}}>
            <button id="session-increment" onClick={this.inc_sesslen}>
              <i className="fa fa-arrow-up fa-lg p-2 m-2"></i>
            </button>
            <h4>Session Length</h4>
            <h4 id="session-length">{Math.floor(this.state.sesslen/60)}</h4>
            <button id="session-decrement" onClick={this.dec_sesslen}>
              <i className="fa fa-arrow-down fa-lg p-2 m-2"></i>
            </button>
          </Col>
        </Row>
          
        <div style={{backgroundColor: 'skyblue', padding: '15px', borderRadius: '50px'}} className="text-center col-12">
          <h4 id="timer-label">{this.state.thestatus}</h4>
          <h4 id="time-left">{this.state.disptimeleft}</h4>
          <button className="player m-2" id="start_stop" onClick={this.clockstart}>
            <i className="fa fa-play fa-md p-2 m-2"></i>
            <i className="fa fa-pause fa-md p-2 m-2"></i>
          </button>
          <button className="player" id="reset" onClick={this.clockrestart}>
            <i className="fa fa-refresh fa-md p-2 m-2"></i>
          </button>
        </div>
        
      </div>
    );
  }
}

export default PomodoroClock;