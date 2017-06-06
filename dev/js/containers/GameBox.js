import React, {Component} from 'react';

export default class GameBox extends React.Component {
  
  render(){
    var test = "ghejhjejh";
    return(
      <div id={this.props.identifier} className="title"></div>
    );
  }
}

