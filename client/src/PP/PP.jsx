import React from 'react';
import './PP.css';

const PP = React.createClass({
  getInitialState: function () {
    return { };
  },

  render: function () {
    return (
      <div id="postpreview">
        This is where I'll be using PhantomJS to screenshot the preview and post it to instagram
      </div>
    );
  },
});

export default PP;
