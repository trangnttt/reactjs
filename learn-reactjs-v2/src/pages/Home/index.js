import React from 'react'
import Service from '@/components/Service'
import Slides from '@/components/Slides'
import ProductList  from '@/components/Product/ProductList'

function Home() {
  return (
    <div className="main">
      <Slides />
      <div className="container">
        <Service />
        <ProductList />

        <h3>Cart</h3>

      </div>
    </div>
  );
}
export default Home

