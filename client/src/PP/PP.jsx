import React from 'react';
import './PP.scss';
import hljs from 'highlight.js';

const PP = React.createClass({
  getInitialState: function () {
    return {
      hashtags : []
    };
  },


  render: function () {
    hljs.initHighlighting()
    return (
      <div id="postpreview">
        <div id="square">
          <div id="username"></div>
          <div id="postCodeArea">
            <pre>
              <code id="PostCode"></code>
            </pre>
          </div>
        </div>
        <div id="Hashtags"></div>
      </div>
    );
  },
});

export default PP;
