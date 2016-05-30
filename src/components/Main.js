require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import KeywordsInputs from '../containers/KeywordsInputs'
import SearchModifierInputs from '../containers/SearchModifierInputs'
import ExecuteSearchButton from '../containers/ExecuteSearchButton'
import Permalink from '../containers/Permalink'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <h1>Google Query Builder</h1>
            <KeywordsInputs />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <SearchModifierInputs />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <ExecuteSearchButton />
            <Permalink />
          </div>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
