import React, { createContext, useState, useReducer } from 'react'
import { CartReducer } from '@/reducers/cart/reducers'
import {types} from '@/reducers/cart/typesCart'

export const CartContext = createContext();

const CartProvider = (props) => {
  const [dataCart, dispatchCart] = useReducer(CartReducer, { total: 0, data: [] });

  const addCart = (item) => {
    dispatchCart({type: types.ADD_CART, payload: item})
  }

  const increaseQtyCart  = (data) => {
    dispatchCart({type: types.UPDATE_UP_QTY_CART, payload: data})
  }

  const decreaseQtyCart = (data) => {
    dispatchCart({type: types.UPDATE_DOWN_QTY_CART, payload: data})
  }

  const deleteCart = (data) => {
    dispatchCart({type: types.DELETE_CART, payload: data})
  }

  return (
    <CartContext.Provider value={{ addCart, increaseQtyCart, decreaseQtyCart, deleteCart, dataCart }}>
      {props.children}
    </CartContext.Provider>
  )
}
export default CartProvider