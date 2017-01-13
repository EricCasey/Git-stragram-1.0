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
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    }).then((response) => {
      return response.json()
    }).then(json => {
      //console.log(json.files)
      this.setState({ files : json.files })
    })

  },

  render: function () {
      if (this.props.grabbed) {
        var history = []
        for (var part in this.props.history) {
          if (this.props.grabbed) {
            history.push(part)
          }
        }
        return (
          <div>
            <div id="dropdown">
                { history.map((item, index) => {
                  let boundItemClick = this.onItemClick.bind(this, item);
                  // console.log(typeof(this.props.history[index].created_at))
                  // console.log(this.props.username)
                  var repoURL = this.props.history[index].repo.url
                  var eventDate = new Date(Date.parse(this.props.history[index].created_at))
                  var since = () => {
                    var one_day=1000*60;
                    var eventMili = Date.parse(this.props.history[index].created_at)
                    var nowMili = Date.now()
                    var difference = nowMili - eventMili
                    return Math.round(difference/one_day);
                  }
                  return (
                    <div className="drop" key={index} onClick={boundItemClick}>
                      <b className="repoName">{ repoURL.replace(/^(.*[/])/ig, '') }</b>
                      <br/>
                      { this.props.history[index].type }
                      <br/>
                      { since() }
                    </div>
                  )
                })}
            </div>
            <FileSelect files={this.state.files}/>
          </div>
        )
      } else {
        return ( <div></div> )
      }
}
});

export default Dropdown2;
