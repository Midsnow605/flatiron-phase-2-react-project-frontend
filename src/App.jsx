import React from 'react';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  /*let Component;

  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/about":
      Component = About;
      break;
    default:
      Component = Home; // Set a default component for unknown paths
  }*/

  return (
    <>
      <Header />
      <Routes>
        <Route path = '/Home' element = {<Home/>}/>
        <Route path = '/About' element = {<About/>}/>
      </Routes>
    </>
  );
}

export default App;
