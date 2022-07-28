import React from 'react';
import { Product, FooterBanner, HeroBanner } from '../components'

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className='products-heading'>

        <h2>Best Selling Products</h2>
        <p>Hand-made jewllery of many varitions</p>
      </div>

      <div className='products-container'>
        {['product1', 'product2'].map((product) => product)}
      </div>

      <FooterBanner />
    </div>
  )
}

export default Home