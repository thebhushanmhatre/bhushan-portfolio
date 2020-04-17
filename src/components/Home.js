import React, { Component } from 'react';
import { Media } from 'reactstrap';

function RenderMedia({item}) {
  return(
    <div style={{borderBottom: '1px solid black'}} className="mb-3 pt-2 col-12 offset-md-1 col-md-10">
        <Media className="pb-2">
          <Media body>
            <Media heading>{item.name}</Media>
            <p>{item.branch}</p>
            <p> Graduated in {item.year}</p>
          </Media>
          <div className="d-none d-sm-block" >
          <a href={item.href} target="_blank" rel="noopener noreferrer"><Media style={{borderRadius: '50px'}} object src={item.src} alt={item.name} width="100px" height="120px" /></a>
          </div>
        </Media>
    </div>
  );
}

class Home extends Component{

  render(){
    const institutes = this.props.education.map(item=>
        <RenderMedia item={item} />
    )
    return(
      <div className="container">
        <h2><span className="fa fa-institution fa-md mb-4"> Education</span></h2>
        {institutes}
      </div>
    );
  }
}

export default Home;
