import React, { Component } from 'react';
import './CodeArea.css'

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
    console.log(this.state.selected)
    document.getElementById("PostCode").innerText=this.props.code.slice(points[0],points[1]);
  }

  render() {
    let boundItemClick = this.getSelection.bind(this);
    return (
      <div id="CodeArea">
        <code onMouseUp={boundItemClick}>{this.props.code}</code>
     </div>
    )
  }
}

export default CodeArea;
