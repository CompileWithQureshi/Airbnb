import React from 'react';
import './App.css'
import Card from './Card';
import Hero from './Hero';
import Navbar from './Navbar';

import image_12 from './image 12.png'
import mountain from './mountain-bike 1.png'
import wedding from './wedding-photography 1.png'


function App(params) {

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='holder'>

        <Card img={image_12} no={6} contry="USA" qout="Life is hard (test)" price={130} /><br />
        <Card img={mountain} no={7} contry="SA" qout="(test2)" price={130} />
        <Card img={wedding} no={8} contry="UA" qout="(test3)" price={130} />
      </div>
    </div>
  )
}


export default App;
