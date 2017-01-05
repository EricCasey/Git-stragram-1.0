import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName : ''
    };
    this.handleUChange = this.handleUChange.bind(this);
    this.grabGit = this.grabGit.bind(this);
  };

  handleUChange(target, value) {
    this.setState({ userName: target })
  }

  grabGit() {
    var userName = this.state.userName;
    fetch(`http://localhost:3001/api/commitGrabber/${userName}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
       'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        { 'username' : 'Fuckyou' }
      )
    }).then(response => {
      console.log(response)
      return response.json();
      
    })
  }

  render() {
    return (
      <div id="Form">
      <h2> Gitstagram </h2>
      <form>
        <input
          id="GHinput"
          onChange={(e) => {this.handleUChange(e.target.value, e.target.name)}}
          placeholder="GitHub Username"
          />
        <div id="submit" onClick={this.grabGit}> </div>
        <code>{this.state.userName}</code>
      </form>
      </div>
    )
  }
}

export default Form;
