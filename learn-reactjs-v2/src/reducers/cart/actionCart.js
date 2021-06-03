import React from 'react'

export const addCart = (dataCart, item) => {
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

    return dataCart
}

export const increaseQtyCart = (dataCart,data) => {
    const objIndex = dataCart.data.findIndex(obj => obj.id == data.id)
    const qtyUpdate = data.qty + 1;
    dataCart.data[objIndex].qty = qtyUpdate;
    const sumQty = dataCart.data.reduce(function (prev, current) {
        return prev + current.qty
    }, 0);
    const updateData = { total: sumQty, data: dataCart.data }
    return updateData
}

export const decreaseQtyCart = (dataCart,data) => {
    if (data.qty > 0) {
        const objIndex = dataCart.data.findIndex(obj => obj.id == data.id)
        const qtyUpdate = data.qty - 1;
        dataCart.data[objIndex].qty = qtyUpdate;
        const sumQty = dataCart.data.reduce(function (prev, current) {
            return prev + current.qty
        }, 0);
        const updateData = { total: sumQty, data: dataCart.data }
        return updateData
    }
}

export const deleteCart = (dataCart,data) => {
    var index = dataCart.data.findIndex(obj => obj.id == data.id)
    if (index > -1) {
        dataCart.data.splice(index, 1);
    }
    const sumQty = dataCart.data.reduce(function (prev, current) {
        return prev + current.qty
    }, 0);
    const updateData = { total: sumQty, data: dataCart.data }
    return updateData
}

