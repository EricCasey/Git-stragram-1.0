import React from 'react';
import Form from './Form/Form1.jsx';
import PostPreview from './PP/PP.jsx';

const App = React.createClass({
  getInitialState: function () {
    return { };
  },

  takeScreenshot: function () {

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
          <p>-</p>
          <i><p>'git-squared' is an app that crafts square image
             of a code snippet from your public GitHub account to show it off
             and accrue mad internet points!</p></i>
          <p>-</p>
          <p>If you dont have GitHub account... try 'nasa'</p>
          <Form />
        </div>
        <PostPreview />
        <div id="advanced">
          this is where the formatting options will be <br/>
        <ul>
          <li>line numbers</li>
          <li>themes</li>
          <li>layouts</li>
        </ul>
        </div>
        <div id="postButton">Post To *nst*gr*m!</div>
        <div id="postButton">Post To F**kbook!</div>
        <div id="postButton" onClick={this.takeScreenshot} >SCREENSHOT!</div>
      </div>
    );
  },
});

export default App;
