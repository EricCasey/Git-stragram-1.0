import React from 'react';
import './PP.scss';
import hljs from 'highlight.js';
import ReactDOM from 'react-dom';
import { WithContext as ReactTags } from 'react-tag-input';

const PP = React.createClass({
  getInitialState: function () {
    return {
      hashtags : [],
      tags: [ {id: 1, text: "Apples"} ],
      suggestions: ["Banana", "Mango", "Pear", "Apricot"]
    };
  },

  handleDelete(i) {
    let tags = this.state.tags;
    tags.splice(i, 1);
    this.setState({tags: tags});
  },

  handleAddition(tag) {
      let tags = this.state.tags;
      tags.push({
          id: tags.length + 1,
          text: tag
      });
      this.setState({tags: tags});
  },
  
  handleDrag(tag, currPos, newPos) {
      let tags = this.state.tags;

      // mutate array
      tags.splice(currPos, 1);
      tags.splice(newPos, 0, tag);

      // re-render
      this.setState({ tags: tags });
  },

  render: function () {
    hljs.initHighlighting()
    let tags = this.state.tags;
    let suggestions = this.state.suggestions;
    return (
      <div id="postpreview">
        <div id="square">
          <div id="username"></div>
          <div id="postCodeArea">
            <pre>
              <code id="PostCode"></code>
            </pre>
          </div>
        </div>
        <div id="Hashtags">
          <ReactTags tags={tags}
            suggestions={suggestions}
            handleDelete={this.handleDelete}
            handleAddition={this.handleAddition}
            handleDrag={this.handleDrag} />
        </div>
      </div>
    );
  },
});

export default PP;
