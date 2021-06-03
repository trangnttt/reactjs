import React, { useContext, useRef } from 'react'
import Service from '@/components/Service'
import Slides from '@/components/Slides'
import ProductList from '@/components/Product/ProductList'
import { CartContext } from '@/contexts/CartContext'

function Home() {
  const { dataCart, increaseQtyCart, decreaseQtyCart, deleteCart } = useContext(CartContext);
  const btnRef = useRef(null);
  const onButtonClick = () => {
      btnRef.current.classList.toggle('btn-blue');
  };
  return (
    <div className="main">
      <button onClick={onButtonClick} ref={btnRef}  >change btn blue</button>

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
                  <input type="text" value={data.qty} />
                  <button onClick={() => increaseQtyCart(data)}> + </button>
                </td>
                <td><button onClick={() => deleteCart(data)}>Delete</button></td>
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

