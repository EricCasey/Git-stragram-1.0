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
  //  this.setState({ xAlign: event.target.value})
    this.props.setXalign(event.target.value)
  }

  Fsize = (event) => {
  //  this.setState({ xAlign: event.target.value})
    this.props.setFsize(event.target.value)
  }

  render() {
    return (
      <div id="Advanced">
        <div id="themes">

        </div>
        <div id="slider">
          <h4>x-alignment</h4>
          <input id="xAlign" type="range"  defaultValue="5" min="-100" max="25" step="1" onChange={this.xAlign}/>
          <h4>FontSize</h4>
          <input id="Fsize" type="range"  defaultValue="12" min="9" max="72" step="1" onChange={this.Fsize}/>
        </div>
        <div id="TFoptions">
          <div className="row">
            <div className="hexaoptions" onClick={this.props.toggleWrap}>
              - Wrap -
              <Switch />
            </div>
            <div className="hexaoptions" onClick={this.props.toggleLight}>
            - Light - 
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
