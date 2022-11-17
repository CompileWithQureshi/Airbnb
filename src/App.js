import React from 'react';
import './App.css'
import Card from './Card';
import Hero from './Hero';
import Navbar from './Navbar';
import data from './data'

// import image_12 from './image 12.png'

console.log(data);

function App(params) {
  const cards = data.map(item => {
    return (
      <Card img={item.coverImg} rating={item.stats.rating} reviewCount={item.stats.reviewCount} location={item.location} qout={item.title} price={item.price} />

    )
  })
  console.log(cards);

  return (
    <div>
      <Navbar />
      <Hero />
      {cards}
    </div>
  )
}


export default App;
