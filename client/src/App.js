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
          <h2> Gitstagram.io </h2>
          <Form />
        </div>
        <PostPreview />
      </div>
    );
  },
});

export default App;
