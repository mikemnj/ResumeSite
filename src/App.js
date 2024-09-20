import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Resume from './pages/Resume';
import { Component } from 'react';
import Login from './pages/Login';

function App() {
  //routing without react router
  switch (window.location.pathname){
    case "/":
      Component = Home
      break
    case "/Home":
      Component = Home
      break
    case "/About":
      Component = About
      break
    case "/Resume":
      Component = Resume
      break
    case "/Login":
      Component = Login
      break  
    default:
      Component = Home
      break

  }
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Component/>
      </div>
    </>
  );
}

export default App;