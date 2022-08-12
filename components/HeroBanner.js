import React from 'react';
import Link from 'next/link';
//import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner: {midText, largeText1, image, product, buttonText, desc, smallText} }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="banner-smallText">{smallText}</p>
        <h3 className='banner-midText'>{midText}</h3>
        <h1>{largeText1}</h1>
        {/*<img src={urlFor(image)} alt='wedding-bands' className='hero-banner-image' />*/}

        <div>
          <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner;