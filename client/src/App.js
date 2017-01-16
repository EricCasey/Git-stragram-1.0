import React from 'react';
import Form from './Form/Form1.jsx';
import PostPreview from './PP/PP.jsx';
import html2canvas from 'html2canvas';
import fileDownload from 'react-file-download';
import Advanced from './Advanced/Advanced.jsx'

const App = React.createClass({
  getInitialState: function () {
    return { };
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
      document.body.insertAdjacentHTML('beforeend', `<img src='${img}'/>`);
    });
  },

  render: function () {
    return (
      <div className='App'>
        <div id="actions">
          <h1>
            <span id="h2git">git</span>
            <span id="h2sta">- squared</span>
            <span id="h2io"> .io</span>
            <span id="h2beta"><sup>beta<sup id="af">af</sup></sup></span>
          </h1>
          <p>-</p>
          <i><p>'git-squared' is an app that crafts square image
             of a code snippet from your public GitHub account to show it off
             and accrue mad internet points!</p></i>
          <p>-</p>
          <p>Don't have GitHub account? try 'NASA'</p>
          <Form />
        </div>
        <div id="wrapUP">
          <PostPreview />
          <Advanced />
        </div>
        <div id="postButton">Post To *nst*gr*m!</div>
        <div id="postButton" onClick={this.DLScreenshot}>Download!</div>
        <div id="postButton" onClick={this.takeScreenshot}>TEST SCREENSHOT!</div>
      </div>
    );
  },
});

export default App;
