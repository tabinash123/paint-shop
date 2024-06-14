import React from 'react'
import Hero from './Hero'
import ProductDisplay from './ProductDisplay'
import Blog from './Blog'


const ProductPage = () => {
  return (
    <div style={{backgroundColor:'#f5f5f5',  }}  >
        <Hero />
        <ProductDisplay />
        <Blog />

    </div>
  )
}

export default ProductPage