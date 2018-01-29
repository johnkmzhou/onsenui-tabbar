import React from 'react';
import { Page } from 'react-onsenui';
import { connect } from 'react-redux';

import { renderSettings } from './actions';

const HomePage = props => {
  return (
    <Page>
      <h1>Home</h1>
      <button onClick={props.switchPage}>Switch To Settings</button>
    </Page >);
}

const mapDispatchToProps = dispatch => {
  return {
    switchPage: () => dispatch(renderSettings())
  };
}

export default connect(null, mapDispatchToProps)(HomePage);