import React, { Component } from 'react';
import logo from '../Images/logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';
import BackgroundSlides from '../Component/BackgroundSlides';
import NewWebmux from '../Component/NewWebmux';
import NavBar from '../Component/NavBar';
import SiteDescription from '../Component/SiteDescription';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <BackgroundSlides/>
        <NewWebmux/>
        <SiteDescription/>
      </div>
    );
  }
}

export default App;
