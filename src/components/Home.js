import React, { Component } from 'react';
import { DATA } from '../data.js';
import { Media } from 'reactstrap';

function RenderMedia({item}) {
  console.log(item)
  return(
    <div className="pt-4 offset-1 col-8">
        <Media className="pb-2">
          <Media body>
            <Media heading>{item.name}</Media>
            <p>{item.branch}</p>
            <p> Graduated in {item.year}</p>
          </Media>
          <Media object src={item.src} alt={item.name} width="100px" height="120px" />
        </Media>
    </div>
  );
}

class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      education: DATA.education
    }
  }

  render(){
    const institutes = this.state.education.map(item=>
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