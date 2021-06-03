import React from 'react'
import {types}  from './typesCart'
import { addCart, increaseQtyCart, decreaseQtyCart, deleteCart } from './actionCart'

export const CartReducer = (dataCart, action) => {
    const {type, payload} = action 
    switch (type) {
        case types.ADD_CART:
            return addCart(dataCart, payload) 
            break
        case types.UPDATE_UP_QTY_CART:
            return increaseQtyCart(dataCart, payload) 
            break
        case types.UPDATE_DOWN_QTY_CART:
            return decreaseQtyCart(dataCart, payload) 
            break
        case types.UPDATE_INPUT_QTY_CART:
            console.log('UPDATE_INPUT_QTY_CART')
            return 'UPDATE_INPUT_QTY_CART'
            break
        case types.DELETE_CART:
            return deleteCart(dataCart, payload) 
            break
        default:
            throw new Error()
    }
}