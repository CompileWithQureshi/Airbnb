import React from 'react';
import './App.css'
import { Card } from './Card';
import Hero from './Hero';
import Navbar from './Navbar';

function App(params) {

  return (
    <div>
      <Navbar />
      <Hero />
      <Card img="./image 12.png" no="(6)" contry="USA" qout="Life is hard (test)" price=" $134" />
    </div>
  )
}


export default App;
