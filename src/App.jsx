import React from 'react';
import './output.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import FruitBasket from './components/fruit-basket/FruitBasket';
import BestFeatures from './components/best-feature/BestFeatures';
import Products from './components/products/Products';
import Subscribe from './components/subscribe/Subscribe';

const App = () => {
  return(
    <div className='overflow-hidden'>
      <Navbar/>
      <Hero/>
      <FruitBasket/>
      <Products/>
      <BestFeatures/>
      <Subscribe/>
    </div>
  )
}

export default App;