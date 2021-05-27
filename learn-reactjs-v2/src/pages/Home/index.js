import React from 'react'
import Service from '../../components/Service'
import Slides from '../../components/Slides'
import ProductList  from '../../components/Product/ProductList'

function Home() {
  return (
    <div className="main">
      <Slides />
      <div className="container">
        <Service />
        <ProductList />
      </div>
    </div>
  );
}
export default Home

