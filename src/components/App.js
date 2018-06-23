// This component handles the App template used on every page.
import React from 'react';
import MainRouter from './MainRouter'
import Header from './common/Header'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <Header loading={ this.props.loading }/>
        <MainRouter/>
      </div>
    );
  }
}

 App.propTypes = {
   loading: PropTypes.bool.isRequired
 };

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default withRouter(connect(mapStateToProps)(App));
