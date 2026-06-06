import React from 'react';
import './index.css';
import './App.css';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { BentoGrid } from './components/BentoGrid';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import { useScrollReveal } from './hooks';

function App() {
  useScrollReveal();

  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <BentoGrid />
        <Education />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
