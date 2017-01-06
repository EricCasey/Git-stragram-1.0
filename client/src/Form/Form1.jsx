import React, { Component } from 'react';
import './Form.css';
import Dropdown from '../Dropdown/Dropdown.jsx'

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName : '',
      gistory : [],
      grabbed : false
    };
    this.handleUChange = this.handleUChange.bind(this);
    this.grabGit = this.grabGit.bind(this);
  };

  handleUChange(target, value) {
    this.setState({ userName: target })
  }

  grabGit = () => {
    var userName = this.state.userName;
    fetch(`http://localhost:3001/api/commitGrabber/${userName}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
       'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        { 'username' : 'testesterpp' }
      )
    }).then((response) => {
      // console.log(response.json())
      //var result = response
      //this.setState({ gistory : 'workin?' })
      return response.json()
    }).then(json => {
      // console.log(JSON.stringify(json))
      this.setState({
        gistory : json,
        grabbed : true
      })
    })
  }

  render() {
    return (
      <div id="Form">
      <h2> Gitstagram.io </h2>
      <form>
        <input
          id="GHinput"
          onChange={(e) => {this.handleUChange(e.target.value, e.target.name)}}
          placeholder="GitHub Username"
          />
        <div id="submit" onClick={this.grabGit}>Grab My Code!</div>
        <Dropdown
          history={this.state.gistory}
          grabbed={this.state.grabbed}
        />
      </form>
     </div>
    )
  }
}

export default Form;
