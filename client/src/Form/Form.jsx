import React from 'react';
import './Form.css';
import LinkedStateMixin from 'react-addons-linked-state-mixin'; // ES6
// import Fetch from 'react-fetch'

const Form = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function () {
    return {
      userName : ''
    };
  },

  grabGitPush : (e) => {
    // console.log(e)
    console.log(this.state.username + " < --- Username")
    var userName = this.state.userName;
    fetch(`http://localhost:3001/api/commitGrabber/eric`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
       'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        { 'username' : 'EricCasey' }
      )
    }).then(response => {
      console.log(JSON.stringify(response))
      return response.json();
    })
  },

  render: function () {
    return (
      <div id="Form">
      <h2> Gitstagram </h2>
      <form>
        <input
          id="GHinput"
          valueLink={this.linkState('userName')}
          placeholder="GitHub Username"
          />
        <div id="submit" onClick={this.grabGitPush}> </div>
        <code>{this.state.userName}</code>
      </form>
      </div>
    );
  },
});

export default Form;
