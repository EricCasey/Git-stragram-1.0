import React from 'react';
import Form from './Form/Form1.jsx';
import PostPreview from './PP/PP.jsx';
import html2canvas from 'html2canvas/dist/html2canvas.js';
import fileDownload from 'react-file-download';
import Advanced from './Advanced/Advanced.jsx'

const App = React.createClass({
  getInitialState: function () {
    return {
      xAlign: '',
      Fsize: '',
      wrapped: false,
      light: true,
      grabbed: false
    };
  },

  DLScreenshot: function () {
    html2canvas(document.getElementById("square")).then(function(canvas) {
      document.body.appendChild(canvas);
      var img = canvas.toDataURL("image/jpeg", 1.0);
      fileDownload(img, 'gitsquared.jpeg');
    });
  },

  takeScreenshot: function () {
    html2canvas(document.getElementById("square")).then(function(canvas) {
      // document.body.appendChild(canvas);
      var img = canvas.toDataURL("image/jpeg", 1.0);
      document.body.insertAdjacentHTML('beforeend', `<img className="screenshot" src='${img}'/>`);
    });
  },

  setXalign: function (margin) {
  //  console.log(margin)
    this.setState({ xAlign : margin })
  },

  setFsize: function (point) {
    console.log(point)
    this.setState({ Fsize : point })
  },

  toggleWrap: function () {
    if (this.state.wrapped) {
      this.setState({ wrapped : false })
    } else {
      this.setState({ wrapped : true })
    }
  },

  toggleLight: function () {
    if (!this.state.light) {
      this.setState({ light : true })
    } else {
      this.setState({ light : false })
    }
  },

  toggleGrabbed: function () {
    if (!this.state.grabbed) {
      this.setState({ grabbed : true })
    } else {
      this.setState({ grabbed : false })
    }
  //  console.log(this.state.grabbed)
  },

  render: function () {
    var prevTAG = ''
    if (this.state.grabbed) { prevTAG = (
      <div>
          <div id="postButton">Post To *nst*gr*m!</div>
          <div id="postButton" onClick={this.DLScreenshot}>Download!</div>
          <div id="postButton" onClick={this.takeScreenshot}>TEST SCREENSHOT!</div>
        <Advanced
          setXalign={this.setXalign}
          setFsize={this.setFsize}
          toggleWrap={this.toggleWrap}
          toggleLight={this.toggleLight}
        />
      </div>
    )} else { prevTAG = (<br/>) }
    return (
      <div className='App'>
        <div id="actions">
          <h1 id="logo">
            <span id="h2git">git</span>
            <span id="h2sta">- squared</span>
            <span id="h2io"> .io</span>
            <span id="h2beta"><sup>beta<sup id="af">af</sup></sup></span>
          </h1>
          <br/>
          <i><p>'git-squared' is an app that crafts square image
             of a code snippet from your public GitHub account to show it off
             and accrue mad internet points!</p></i>
          <p>-</p>
          <p>Don't have GitHub account try NASA</p>
          <Form
            toggleGrabbed={this.toggleGrabbed}
            />
        </div>
        <div id="wrapUP">
          <PostPreview
            xAlign={this.state.xAlign}
            Fsize={this.state.Fsize}
            wrapped={this.state.wrapped}
            light={this.state.light}
          />
        {prevTAG}
        </div>
        <div id="footer">
          <h4>Privacy Policy</h4>
          <p><i>This app doesn't save any information or run any of your code.</i></p>
          <h4><a href="https://github.com/EricCasey/Git-stragram-1.0">Source Code</a></h4>
      </div>
      </div>
    );
  },
});

export default App;
