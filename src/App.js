import React from 'react';
import './App.css'
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';


class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Title />
        <Missions />
      </>
    );
  }
}

export default App;
