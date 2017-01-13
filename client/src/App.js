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
            <span id="h2sta">- stagram</span>
            <span id="h2io"> .io</span>
            <span id="h2beta"><sup>beta<sup id="af">af</sup></sup></span>
          </h1>
          <i><p>Gitstagram is an app that crafts themed
            square Instagram post comprised of new code
            from your GitHub account!</p></i>
          <p>if you dont have one... try 'nasa'</p>
          <Form />
        </div>
        <PostPreview />
        <div id="advanced">
          this is where the formatting options will be
        </div>
        <div id="postButton">Post To Instagram!</div>
      </div>
    );
  },
});

export default App;
