import React, { Component } from 'react';
import './Advanced.scss';

class Advanced extends Component {

  constructor(props) {
    super(props);
    this.state = {
      xAlign : ''
    };
  };

  Fsize = (event) => {
  //  this.setState({ xAlign: event.target.value})
    this.props.setFsize(event.target.value)
  }

  render() {
    return (
      <div id="Advanced">
        <p className="instruction">[4] Make it beautiful!</p>
        <div id="themes">

        </div>
        <div id="slider">
          <h4>FontSize</h4>
          <input id="Fsize" type="range"  defaultValue="12" min="9" max="24" step="1" onChange={this.Fsize}/>
        </div>
        <div id="TFoptions">
          <div className="hexaoptions" onClick={this.props.toggleWrap}>
            - Wrap Toggle -
          </div>
        </div>
        <h5>
          <br/>-<br/>
          More options coming soon! <br/>-<br/>
        or download the source code<br/> and <i>fucking do it yourself.</i>
        </h5>
     </div>
    )
  }
}

export default Advanced;
