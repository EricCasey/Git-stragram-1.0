import React from 'react';
import Form from './Form/Form1.jsx';
import Settings from './Settings/Settings.jsx';
import PostPreview from './PP/PP.jsx';

const App = React.createClass({
  getInitialState: function () {
    return { };
  },

  render: function () {
    return (
      <div className='App'>
        <div id="actions">
          <Form />
          <Settings />
        </div>
        <PostPreview />
      </div>
    );
  },
});

export default App;
