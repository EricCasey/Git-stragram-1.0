import React, { Component } from 'react';
import './FileSelect.css'

class FileSelect extends Component {

  constructor(props) {
    super(props);
    this.state = { };
  };

  FileClick = (e) => {
    console.log('File CLicked AF')
    console.log(e.patch)
  }

  render() {
    return (
      <div id="Files">
        {this.props.files.map((file, index) => {
          let boundItemClick = this.FileClick.bind(this, file);
          return (
            <div
              key={index}
              className="file"
              onClick={boundItemClick}>
              {JSON.stringify(this.props.files[index].filename)}
            </div>
          )
        })}
     </div>
    )
  }
}

export default FileSelect;
