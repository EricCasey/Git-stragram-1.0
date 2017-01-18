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
    var style = { 'marginLeft' : this.props.xAlign + 'px', 'width' : 295 - (this.props.xAlign - 5) + 'px' },
        fontSize = { 'fontSize' : this.props.Fsize + 'px' },
        wrap = {},
        lightness = {},
        love = `<3`
    if (this.props.wrapped) {
      wrap = { 'whiteSpace' : 'pre-wrap' }
    } else {
      wrap = { 'whiteSpace' : 'pre' }
    }
    if (this.props.light) {
      lightness = { 'backgroundColor' : 'white' }
    } else {
      lightness = { 'backgroundColor' : 'black' }
    }
    //console.log(lightness)

    // I might need a math-based className generator here. waay down the road
    // this is going to get out of hand
    return (
      <div id="postpreview">
        <div id="square" style={lightness}>
          <div id="username">
            <div id="userArea">
              <svg id="git">
              </svg>
              <h3></h3>
            </div>
          </div>
          <div id="branding">Made with <span id="love">{love}</span> using <br/> <i>Git-Squared.io</i></div>
          <div id="postCodeArea" style={fontSize}>
            <pre style={style}>
              <code id="PostCode" style={wrap}></code>
            </pre>
          </div>
        </div>
        <div id="Hashtags">
        </div>
      </div>
    );
  },
});

export default PP;
