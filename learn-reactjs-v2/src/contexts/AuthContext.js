import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

import LoginService from '@/services/Login'
export const AuthContext = createContext();
const AuthProvider = (props) => {

    const adminUser = {
        email: "abc",
        password: "123"
    }

    const [auth, setAuth] = useState({ email: "", password: "", isAuth: false })
    const [error, setError] = useState("");

    const handleEmailChange = (e) => {
        setAuth({ ...auth, email: e.target.value })
    }

    const handlePasswordChange = (e) => {
        setAuth({ ...auth, password: e.target.value })
    }


    const handleLogin = (e) => {
        e.preventDefault();
        const fetchData = async () => {
            const article = { 
                email: "eve.holt@reqres.in",
                password: "cityslicka"
            };
            // const response = await axios.post('https://reqres.in/api/login', article);
            // console.log(response)
            try {
                const response = await LoginService.postLogin(article)
                console.log('response', response)
            } catch(e) {
                console.log('errr', e.message)
            }
        }
        fetchData();

        // if (auth.email == adminUser.email && auth.password == adminUser.password) {
        //     setError("")
        //     setAuth({
        //         email: auth.email,
        //         password: auth.password,
        //         isAuth: true
        //     })
        //     localStorage.setItem('email', auth.email);
        // }
        // else {
        //     setError('Login Fail')
        // }
    }

    const handleLogout = () => {
        setAuth({
            email: "",
            password: ""
        })
        localStorage.removeItem('email');
    }



    return (
        <AuthContext.Provider value={{ auth, error, handleLogin, handleEmailChange, handlePasswordChange, handleLogout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

