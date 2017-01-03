import React from 'react';
import Form from './Form/Form.jsx';

const App = React.createClass({
  getInitialState: function () {
    return { };
  },

  render: function () {
    return (
      <div className='App'>
        <div id="wrapper">
        <div id="sidebar-wrapper">
          <Form/>
        </div>
        <div id="page-content-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <h1>Preview Area</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    );
  },
});

export default App;
