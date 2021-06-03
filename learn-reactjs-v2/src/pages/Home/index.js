import React, { useContext } from 'react'
import Service from '@/components/Service'
import Slides from '@/components/Slides'
import ProductList from '@/components/Product/ProductList'
import { CartContext } from '@/contexts/CartContext'

function Home() {
  const { dataCart, increaseQtyCart, decreaseQtyCart, eraseCart } = useContext(CartContext);
  console.log('dataCart home', dataCart)
  return (
    <div className="main">
      <Slides />
      <div className="container">
        <Service />
        <ProductList />
        { }
        <h3>Cart</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Qty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dataCart.data.map((data, index) => (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.email}</td>
                <td>
                  <button onClick={() => decreaseQtyCart(data)}> - </button>
                  <span> {data.qty} </span>
                  <button onClick={() => increaseQtyCart(data)}> + </button>
                </td>
                <td><button onClick={() => eraseCart(data)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
          <tfoot>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
export default Home

