import React, { createContext, useState, useReducer } from 'react'
export const CartContext = createContext();


const CartProvider = (props) => {
  const [dataCart, setDataCart] = useState({ total: 0, data: [] });


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
  }

  const increaseQtyCart  = (data) => {
    const objIndex = dataCart.data.findIndex(obj => obj.id == data.id)
    const qtyUpdate = data.qty + 1;
    dataCart.data[objIndex].qty = qtyUpdate;
    const sum = dataCart.data.reduce(function (prev, current) {
      return prev + current.qty
    }, 0);
    dataCart.total = sum;
    const updateData = { total: sum, data: dataCart.data }
    setDataCart(updateData);
  }

  const decreaseQtyCart = (data) => {
    if (data.qty > 0) {
      const objIndex = dataCart.data.findIndex(obj => obj.id == data.id)
      const qtyUpdate = data.qty - 1;
      dataCart.data[objIndex].qty = qtyUpdate;
      const sum = dataCart.data.reduce(function (prev, current) {
        return prev + current.qty
      }, 0);
      dataCart.total = sum;
      const updateData = { total: sum, data: dataCart.data }
      setDataCart(updateData);
    }
  }

  const eraseCart = (data) => {
    var index = dataCart.data.findIndex(obj => obj.id == data.id)
    if (index > -1) {
      dataCart.data.splice(index, 1);
    }
    const sum = dataCart.data.reduce(function (prev, current) {
      return prev + current.qty
    }, 0);
    dataCart.total = sum;
    const updateData = { total: sum, data: dataCart.data }
    setDataCart(updateData);
  }

  return (
    <CartContext.Provider value={{ addCart, increaseQtyCart, decreaseQtyCart, eraseCart, dataCart }}>
      {props.children}
    </CartContext.Provider>
  )
}
export default CartProvider