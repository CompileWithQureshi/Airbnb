import React from 'react';
import './App.css'
import Card from './Card';
import Hero from './Hero';
import Navbar from './Navbar';

// import image_12 from './image 12.png'



function App(params) {

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='holder'>

        <Card img='../public/images/image 12.png' no={6} contry="USA" qout="Life is hard (test)" price={130} /><br />
      </div>
    </div>
  )
}


export default App;
