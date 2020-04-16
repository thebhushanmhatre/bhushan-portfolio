import React, { Component } from 'react';
import { Media } from 'reactstrap';

function RenderMedia({item}) {
  return(
    <div className="pt-4 offset-1 col-8">
        <Media className="pb-2">
          <Media body>
            <Media heading>{item.name}</Media>
            <p>{item.branch}</p>
            <p> Graduated in {item.year}</p>
          </Media>
          <a href={item.href} target="_blank" rel="noopener noreferrer"><Media object src={item.src} alt={item.name} width="100px" height="120px" /></a>
        </Media>
    </div>
  );
}

class Home extends Component{

  render(){
    console.log("In Home.js", this.props)
    const institutes = this.props.education.map(item=>
        <RenderMedia item={item} />
    )
    return(
      <div className="container">
        <h2><span className="fa fa-institution fa-md"> Education</span></h2>
        {institutes}
      </div>
    );
  }
}

export default Home;
