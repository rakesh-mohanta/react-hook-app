import React, { Component } from 'react';
//import logo from './logo.svg';
import './style.css';
import Home from './../Home';
import Map from './../Map'
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

class App extends Component {
  render() {
    return (
  <div>
    <Header/>
    <Home/>
    <Map/>
    <Footer/>
  </div>
    );
  }
}
export default App;