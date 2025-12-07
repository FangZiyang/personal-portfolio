import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Experience />
      <Education />
      <BentoGrid />
      <Footer />
    </div>
  );
}

export default App;
