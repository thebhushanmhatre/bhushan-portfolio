import React, { Component } from 'react';
import { Media } from 'reactstrap';

function RenderMedia({item}) {
  return(
    <div className="mb-1 col-12 offset-md-1 col-md-9 col-lg-8 educationMedia" 
      style={{backgroundColor: window.innerWidth < 995 ? 'white' : ''}}>
      <Media className="pb-2">
        <Media body>
          <Media heading>{item.name}</Media>
          {item.shortname && <Media heading> {item.shortname}</Media>}
          <p>{item.branch}</p>
          <p> Graduated in {item.year}</p>
        </Media>
        <div className="d-none d-sm-block" >
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          <Media style={{borderRadius: '50px'}} object src={item.src} alt={item.name} width="100px" height="120px" />
        </a>
        </div>
      </Media>
    </div>
  );
}

class Education extends Component{

  render(){
    const institutes = this.props.education.map(item=>
        <RenderMedia item={item} />
    )
    return(
      <div className="container">
        {institutes}
      </div>
    );
  }
}

export default Education;
