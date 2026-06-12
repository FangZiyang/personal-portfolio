import React from 'react';
import './index.css';
import './App.css';
import { Navigation } from './components/Navigation';
import { FluidBackground } from './components/FluidBackground';
import { SilkTrail } from './components/SilkTrail';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { BentoGrid } from './components/BentoGrid';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import { useScrollReveal, useCardSpotlight, useMagnetic, useTilt, usePointerBloom } from './hooks';

function App() {
  useScrollReveal();
  useCardSpotlight();
  useMagnetic();
  useTilt();
  usePointerBloom();

  return (
    <div className="App">
      <FluidBackground />
      <SilkTrail />
      <Navigation />
      <main>
        <Hero />
        <Ticker />
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
