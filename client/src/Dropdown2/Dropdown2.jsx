import React from 'react';
import './Dropdown2.css';

const Dropdown2 = React.createClass({
  getInitialState: function () {
    return {
      history : []
    };
  },

  onItemClick: function (e) {
    var commitURL = this.props.history[e].payload.commits[0].url
    console.log(commitURL)
  },

  render: function () {
      if (this.props.grabbed) {
        var history = []
        for (var part in this.props.history) { if (this.props.grabbed) { history.push(part) } }
        return (
          <div id="dropdown">
              { history.map((item, index) => {
                let boundItemClick = this.onItemClick.bind(this, item);
                console.log(typeof(this.props.history[index].created_at))
                return (
                  <div className="drop" key={index} onClick={boundItemClick}>
                    {this.props.history[index].type + ' at ' + this.props.history[index].created_at + ' in ' + this.props.history[index].repo.url }
                  </div>
                )
              })}
          </div>
        )
      } else {
        return ( <div id="dropdown"> input username</div> )
      }
}
});

export default Dropdown2;
