import React, { Component } from 'react';
import './FileSelect.scss'
import CodeArea from './CodeArea.jsx'

class FileSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      code: ''
    };
  };

  FileClick = (e) => {
    var StringifiedCode = JSON.stringify(e.patch)
    console.log(StringifiedCode.replace(/^(.*?)\@\@\\n/igm, ''))
    this.setState({ code : e.patch })
  }

  render() {
    return (
      <div>
        <div id="Files">
          <p>Files Changed:</p>
          {this.props.files.map((file, index) => {
            let boundItemClick = this.FileClick.bind(this, file);
            return (
              <div
                key={index}
                className="file"
                onClick={boundItemClick}>
                {JSON.stringify(this.props.files[index].filename).replace(/"/g,"")}
              </div>
            )
          })}
       </div>
       <CodeArea code={this.state.code}/>
     </div>
    )
  }
}

export default FileSelect;
