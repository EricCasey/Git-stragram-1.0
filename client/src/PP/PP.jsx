import React from 'react';
import './PP.css';

const PP = React.createClass({
  getInitialState: function () {
    return { };
  },

  render: function () {
    return (
      <div id="postpreview">
        <div id="square">
          <div id="username"></div>
          <div id="postCodeArea">
            <code id="PostCode"></code>
          </div>
        </div>
      </div>
    );
  },
});

export default PP;
