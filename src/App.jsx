import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Body />
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
