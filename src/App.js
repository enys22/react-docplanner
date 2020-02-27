import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import * as Constants from './Data'
import MainSection from './MainSection'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Navbar menuData={Constants.menuitems}/>
      <MainSection presentationData={Constants.presentationData} coloredCardData={Constants.coloredCardData} statsData={Constants.statsData} officeData={Constants.officeData}/>
      <Footer/>
    </div>
  );
}

export default App;
