import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navigation />
      <section>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </section>
    </>
  );
}

export default App;
