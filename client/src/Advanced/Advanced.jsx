import React, { Component } from 'react';
import './Advanced.scss';
import Switch from 'react-bootstrap-switch';

class Advanced extends Component {

  constructor(props) {
    super(props);
    this.state = {
      xAlign : ''
    };
  };

  xAlign = (event) => {
    this.setState({ xAlign: event.target.value})
  }

  render() {
    var style = {
      'marginLeft': this.state.xAlign + 'px',
    }
    return (
      <div id="Advanced">
        <div id="themes">

        </div>
        <div id="slider">
          <h4 style={style}>FontSize</h4>
          <input id="xAlign" type="range"  defaultValue="50" min="0" max="100" step="1" onChange={this.xAlign}/>
        </div>
        <div id="TFoptions">
          <div className="row">
            <div className="hexaoptions">
              line numbers
              <Switch />
            </div>
            <div className="hexaoptions">
              color reverse
              <Switch />
            </div>
          </div>
          <div className="row">
            <div className="hexaoptions">
              diff
              <Switch />
            </div>
            <div className="hexaoptions">
              lines
              <Switch />
            </div>
          </div>
          <div className="row">
            <div className="hexaoptions">
              wrap
              <Switch />
            </div>
            <div className="hexaoptions">
              option6
              <Switch />
            </div>
          </div>

        </div>
     </div>
    )
  }
}

export default Advanced;
