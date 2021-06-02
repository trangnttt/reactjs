import React, { createContext } from 'react'
// import ProductItem from '@/components/Product/ProductItem'
export const countContext = createContext();

const CartCountProvider = () => {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + 1);
    };

    return (
        <countContext.Provider value={{ count, increase }}>
            <ProductItem />
        </countContext.Provider>
    )
}

export default CartCountProvider