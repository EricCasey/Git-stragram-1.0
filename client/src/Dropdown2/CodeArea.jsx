import React, { Component } from 'react';
import './CodeArea.css'
import lang from 'language-classifier';
import hljs from 'highlight.js';

class CodeArea extends Component {

  constructor(props) {
    super(props);
    this.state = {
      code: '',
      selected: ''
     }
  };

  getSelection () {
    var selection = window.getSelection();
    var points = [Number(selection.anchorOffset), Number(selection.focusOffset)].sort((a, b) => a - b);
    this.setState({ selected: this.props.code.slice(points[0],points[1]) })
    var colored = hljs.highlightAuto(this.props.code.slice(points[0],points[1])).value
    //console.log(colored)
    document.getElementById("PostCode").innerHTML=colored;


    // language guesses for hashtags here lol
     console.log(lang(this.props.code))
     console.log(hljs.highlightAuto(this.props.code).language)
    // console.log(typeof(hljs.highlightAuto(this.props.code.slice(points[0],points[1])).value))

  }

  render() {
    let boundItemClick = this.getSelection.bind(this);
    return (
      <div id="CodeArea">
        <p>Highlight Your Snippet</p>
        <pre><code onMouseUp={boundItemClick}>{this.props.code}</code></pre>
     </div>
    )
  }
}

export default CodeArea;
