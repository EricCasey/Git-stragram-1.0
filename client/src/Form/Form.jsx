import React from 'react';
import './Form.css';
import LinkedStateMixin from 'react-addons-linked-state-mixin'; // ES6
import Fetch from 'react-fetch'

const Form = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function () {
    return {
      userName : '' };
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
        <input type="submit" value="Submit" />
        <code>{this.state.userName}</code>
      </form>
      </div>
    );
  },
});

export default Form;
