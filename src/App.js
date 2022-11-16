import logo from './logo.svg';
import './App.css';
// import Test from './components/Test';
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
// import createSimpleSwitcher from './components/ChartHome'
import Footer from './components/Footer';
import CLiquidity from './components/CLiquidity';



function App() {
  const [bgColor,setBgColor]=useState("#07071c");
  
  return (
  
        <div className='Dark__Theme'>
    {/* <createSimpleSwitcher /> */}
      <Header />
      {/* <Home /> */}
      <CLiquidity />
     {/* <Test /> */}
    <Footer />
    <h2>sdkfjslk</h2>
    </div>
  );
}

export default App;
