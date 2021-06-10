import React from 'react'
import CartContext from './contexts/CartContext'
import AuthProvider from './contexts/AuthContext'
import Routes from './routes/'
const App = () => {
    return (
        <div className="wrapper">
            <AuthProvider>
                <CartContext>
                    <Routes />
                </CartContext>
            </AuthProvider>
        </div>
    )
}

export default App