import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Body from './Components/Body/Body.jsx';
import Divider from '@mui/material/Divider';
import Contact from './Components/Contact/Contact.jsx';
import Footer  from './Components/Footer/Footer.jsx'
import {BrowserRouter as Router ,Switch , Route, BrowserRouter,Routes,NavLink,Header} from "react-dom";

function App() {
  return (
    <div className="App">
   
   
    <Navbar/>
    {/* <Divider/>*/}
    <Body/> 
    <Contact/>
    <Footer/>
    
    
    </div>
  );
}

export default App;
