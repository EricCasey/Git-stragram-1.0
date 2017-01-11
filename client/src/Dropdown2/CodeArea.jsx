import React, { Component } from 'react';
import './CodeArea.css'

class CodeArea extends Component {

  constructor(props) {
    super(props);
    this.state = {
      code: ''
    };
  };

  render() {
    return (
      <div id="CodeArea">
        <code>{this.props.code}</code>
     </div>
    )
  }
}

export default CodeArea;
