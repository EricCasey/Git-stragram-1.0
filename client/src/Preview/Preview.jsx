import React from 'react';
import './Preview.css';

const Preview = React.createClass({
  getInitialState: function () {
    return { };
  },

  render: function () {
    return (
      <div id="preview">
        <p>this is where the details of your push / repocration will be</p>
      </div>
    );
  },
});

export default Preview;
