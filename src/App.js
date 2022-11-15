import logo from './logo.svg';
import './App.css';
// import Test from './components/Test';
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
// import createSimpleSwitcher from './components/ChartHome'



function App() {
  const [bgColor,setBgColor]=useState("#07071c");
  
  return (
  
        <div className='Dark__Theme'>
      <Header />
      <Home />
     {/* <Test /> */}
    
    {/* <createSimpleSwitcher /> */}
    <h2>sdkfjslk</h2>
    </div>
  );
}

export default App;
