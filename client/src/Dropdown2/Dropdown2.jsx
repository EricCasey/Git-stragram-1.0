import React from 'react';
import './Dropdown2.scss';
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
  //  console.log(commitURL)
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
                  var since = () => {
                    var eventMili = Date.parse(this.props.history[index].created_at),
                        nowMili = Date.now(),
                        dateDiff = nowMili - eventMili,
                        howLong = ''

                    if (Math.round(dateDiff/(1000*60*60*24*30)) > 2) {
                      howLong = 'more than a month ago'
                    }
                    if (Math.round(dateDiff/(1000*60*60*24)) < 29) {
                      howLong = `${Math.round(dateDiff/(1000*60*60*24))} days ago`
                    }
                    if (Math.round(dateDiff/(1000*60*60)) < 48) {
                      howLong = `${Math.round(dateDiff/(1000*60*60))} hours ago`
                    }
                    if (Math.round(dateDiff/(1000*60)) < 120) {
                      howLong = `${Math.round(dateDiff/(1000*60))} minutes ago`
                    }
                    if (Math.round(dateDiff/(1000*60)) < 5) {
                      howLong = `a few minutes ago`
                    }
                    return (<i>{howLong}</i>)
                  }
                  return (
                    <div className="drop" key={index} onClick={boundItemClick}>
                      <b className="repoName">{ repoURL.replace(/^(.*[/])/ig, '') }</b>
                      <br/>
                      { this.props.history[index].type + " - " } {since()}
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
