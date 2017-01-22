import React, { Component } from 'react';
import './FileSelect.scss'
import CodeArea from './CodeArea.jsx'

class FileSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      code: '',
      selected: 'file1'
    };
  };

  FileClick = (e, b) => {
    // var StringifiedCode = JSON.stringify(e.patch)
    // console.log(StringifiedCode.replace(/^(.*?)\@\@\\n/igm, ''))
    this.setState({
      code : e.patch,
      selected : b.target.id
    })

    var selectedID = b.target.id,
        previouslySelected = this.state.selected;

    if(this.state.selected !== 'none') { document.getElementById(previouslySelected).className = "file"};
    document.getElementById(selectedID).className += " fileSelected";
  }

  render() {
    return (
      <div>
        <div id="Files">
          <p className="instruction">[2] Choose a file!</p>
          {this.props.files.map((file, index) => {
            var boundItemClick = this.FileClick.bind(this, file),
                fileID = `file${index}`,
                filename = JSON.stringify(this.props.files[index].filename).replace(/"/g,""),
                extension = filename.split('.').pop()
            return (
              <div
                key={index}
                id={fileID}
                className="file"
                onClick={ (e) => { boundItemClick(e, e.target.value, e.target.name) } }>
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
