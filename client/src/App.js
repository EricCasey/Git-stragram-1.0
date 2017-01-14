import React from 'react';
import Form from './Form/Form1.jsx';
import PostPreview from './PP/PP.jsx';

const App = React.createClass({
  getInitialState: function () {
    return { };
  },

  render: function () {
    return (
      <div className='App'>
        <div id="actions">
          <h1>
            <span id="h2git">git</span>
            <span id="h2sta">- squared</span>
            <span id="h2io"> .io</span>
            <span id="h2beta"><sup>beta<sup id="af">af</sup></sup></span>
          </h1>
          <i><p>'git-squared' is an app that crafts square image
             of a code snippet from your GitHub account to show it off
             and get internet points!</p></i>
          <p>if you dont have GitHub Account... try 'nasa'</p>
          <Form />
        </div>
        <PostPreview />
        <div id="advanced">
          this is where the formatting options will be
        </div>
        <div id="postButton">Post To *nst*gr*m!</div>
        <div id="postButton">Post To F**kbook!</div>
        <div id="postButton">Save to Camera Roll!</div>
      </div>
    );
  },
});

export default App;
