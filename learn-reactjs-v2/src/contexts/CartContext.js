import React, { createContext, useState } from 'react'
export const CartContext = createContext();

const CartProvider = (props) => {
  const [dataCart] = useState({total: 0, data: []});

  const addCart = (item) => {
    const { id, email } = item;
    const itemData = { id: id, email: email, qty: 1 };
    let indexDataCart = 0;
    const arrayCurrent = dataCart.data.filter(function (data, index) {
      indexDataCart = index
      return data.id === id;
    });

    if (arrayCurrent.length > 0) {
      const { qty } = arrayCurrent[0];
      const qtyOld = qty + 1;
      dataCart.data[indexDataCart] = { ...arrayCurrent[0], qty: qtyOld };
    }
    else {
      dataCart.data.push(itemData);
    }
    const sum = dataCart.data.reduce(function (prev, current) {
      return prev + current.qty
    }, 0);
    dataCart.total = sum;

    console.log('data Cart', dataCart)
  }
  return (
    <CartContext.Provider value={{ addCart, dataCart }}>
      {props.children}
    </CartContext.Provider>
  )
}
export default CartProvider