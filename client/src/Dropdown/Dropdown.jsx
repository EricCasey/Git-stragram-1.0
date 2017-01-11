import React from 'react';
import './Dropdown.css';

const Dropdown = React.createClass({
  getInitialState: function () {
    return {
      history : [] };
  },

  render: function () {
    if (this.props.grabbed) {
      console.log(this.props.history)
      console.log(typeof(this.props.history))
      var history = []
      for (var part in this.props.history) { history.push(part) }
      return (
        <div id="dropdown">
          <select>
            {history.map((item, index) => {
              console.log(index)
              return (
                <option value={item} key={index}>{item}</option>
              )
            })}
          </select>
        </div>
      )
    } else {
      return (
        <div id="dropdown">
          <select>
            <option value="empty">empty</option>
          </select>
        </div>
      )
    }

  },
});

export default Dropdown;
