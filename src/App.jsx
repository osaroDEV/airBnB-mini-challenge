import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import CardGrid from './components/CardGrid';

export default function App() {
  return (
    <div
      className='font-poppins'
    >
      <NavBar />
      <Hero />
      <CardGrid />
    </div>
  );
}
