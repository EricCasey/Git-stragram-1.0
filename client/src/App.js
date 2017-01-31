import React from 'react';
import Form from './Form/Form1.jsx';
import PostPreview from './PP/PP.jsx';
import html2canvas from 'html2canvas/dist/html2canvas.js';
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

  takeScreenshot: function () {
    html2canvas(document.getElementById("square")).then(function(canvas) {
      // document.body.appendChild(canvas);
      var img = canvas.toDataURL("image/jpeg", 1.0);
      document.getElementById("square").innerHTML = `<img className="screenshot" src='${img}'/>`
    });
  },

  setXalign: function (margin) {
  //  console.log(margin)
    this.setState({ xAlign : margin })
  },

  setFsize: function (point) {
    //console.log(point)
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
          <div id="postButton" onClick={this.takeScreenshot}>GENERATE IMAGE!</div>
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
            <span id="h2sta">squared</span>
            <span id="h2io"> .io</span>
            <span id="h2beta"><sup>beta</sup></span>
          </h1>
          <br/>
          <i><h5>'an open source React.js app for the social developer'</h5></i>
          <p>-</p>
          <p>Don't have GitHub account&#63; try NASA</p>
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
          <p><i>This app doesn't save any information.</i></p>
          <h4><a href="https://github.com/EricCasey/Git-stragram-1.0">Source Code</a></h4>
          <h4><a href="">Bookmark</a></h4>
      </div>
      </div>
    );
  },
});

export default App;
