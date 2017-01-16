import React, { Component } from 'react';
import './Advanced.scss';

class Advanced extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };

  };

  render() {
    return (
      <div id="Advanced">
        <div id="themes">

        </div>
        <div id="slider">
          <h4>Alignment</h4>
          <input type="range" />
        </div>
        <div id="TFoptions">
          <div className="hexaoptions"></div>
          <div className="hexaoptions"></div>
          <div className="hexaoptions"></div>
          <div className="hexaoptions"></div>
          <div className="hexaoptions"></div>
          <div className="hexaoptions"></div>
        </div>
     </div>
    )
  }
}

export default Advanced;
