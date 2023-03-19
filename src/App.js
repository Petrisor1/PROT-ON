import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Body from './Components/Body/Body.jsx';
import Divider from '@mui/material/Divider'
function App() {
  return (
    <div className="App">
    <Navbar/>
    {/* <Divider/>*/}
    <Body/> 
    </div>
  );
}

export default App;
