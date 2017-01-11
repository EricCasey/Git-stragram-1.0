import React from 'react';
import './Dropdown2.css';
import FileSelect from './FileSelect.jsx';

const Dropdown2 = React.createClass({
  getInitialState: function () {
    return {
      history : [],
      files : []
    };
  },

  onItemClick: function (e) {
    var commitURL = this.props.history[e].payload.commits[0].url
    console.log(commitURL)
    fetch(commitURL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
       'Content-Type': 'application/json'
      }
    }).then((response) => {
      return response.json()
    }).then(json => {
      console.log(json.files)
      this.setState({ files : json.files })
    })

  },

  render: function () {
      if (this.props.grabbed) {
        var history = []
        for (var part in this.props.history) { if (this.props.grabbed) { history.push(part) } }
        return (
          <div>
            <div id="dropdown">
                { history.map((item, index) => {
                  let boundItemClick = this.onItemClick.bind(this, item);
                  // console.log(typeof(this.props.history[index].created_at))
                  var selectedID = 'nope';
                  if (index === this.state.selected) { selectedID = 'yep'}
                  // console.log(this.props.username)
                  var repoURL = this.props.history[index].repo.url
                  return (
                    <div className="drop" key={index} onClick={boundItemClick} id={selectedID}>
                      {this.props.history[index].type + ' at ' +
                        this.props.history[index].created_at + ' in '} <br/>
                      <b className="repoName">{repoURL.replace(/^(.*[/])/ig, '') }</b>
                    </div>
                  )
                })}
            </div>
            <FileSelect files={this.state.files}/>
          </div>
        )
      } else {
        return ( <div id="dropdown"> input username</div> )
      }
}
});

export default Dropdown2;
