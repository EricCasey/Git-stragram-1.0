import React from 'react';
import Form from './Form/Form.jsx';
import Preview from './Preview/Preview.jsx';
import PostPreview from './PP/PP.jsx';

const App = React.createClass({
  getInitialState: function () {
    return { };
  },

  lastPush: function (username) {
    console.log(username)
    event.preventDefault();
    console.log("godegrabengaged!")
    return "grabbed"
  },

  render: function () {
    return (
      <div className='App'>
        <Form getLastPush={this.lastPush}/>
        <Preview />
        <PostPreview />
      </div>
    );
  },
});

export default App;
