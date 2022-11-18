import React from 'react';
import './App.css'
import Card from './Card';
import Hero from './Hero';
import Navbar from './Navbar';
// import data from './data'
import Data from './data'

// import image_12 from './image 12.png'

console.log(Data);

function App(params) {
  const cards = Data.map(item => {
    return (
      <Card coverImg={item.coverImg} rating={item.stats.rating} reviewCount={item.stats.reviewCount} location={item.location} qout={item.title} price={item.price} />

    )
  })
  console.log(cards);

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
      {/* <img src=' alt='extra' /> */}
    </div>
  )
}


export default App;
