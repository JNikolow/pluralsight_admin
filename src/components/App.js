// This component handles the App template used on every page.
import React from 'react';
import MainRouter from './MainRouter'
import Header from './common/Header'
// import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <Header/>
        <MainRouter/>
      </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired
// };

export default App;
