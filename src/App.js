import React from 'react';
import './App.css'
import { Card } from './Card';
import Hero from './Hero';
import Navbar from './Navbar';

function App(params) {

  return (
    <>
      <Navbar />
      <Hero />
      <Card />
    </>
  )
}


export default App;
