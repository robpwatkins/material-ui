import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import PupsList from './components/PupsList';

class App extends React.Component {
  state = {
    pups: []
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random/3')
      .then(response => response.json())
      .then(json => this.setState({ pups: [...json.message]}));
  }

  render() {
    console.log(this.state.pups);
    return (
      <div className="App">
        <NavBar />
        <PupsList pups={this.state.pups}/>
      </div>
    );
  }
}

export default App;
