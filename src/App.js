import React from 'react';
import './App.css';
// import PupsList from './components/PupsList';
import { Fab } from '@material-ui/core/';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Fab variant="round" color="primary">hey.</Fab>
      </div>
    );
  }
}

export default App;
