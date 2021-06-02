import React from 'react'
import CartContext from './contexts/CartContext'
import Routes from './routes/'
const App = () => {
    return (
        <div className="wrapper">
            <CartContext> 
                <Routes />
            </CartContext>
        </div>
    )
}

export default App