import React, { createContext, useEffect, useState } from 'react'
// import { Redirect, useHistory } from "react-router-dom";
// import LoginService from '@/services/Login'

export const AuthContext = createContext();
const AuthProvider = (props) => {

    const adminUser = {
        email: "abc",
        password: "123"
    }

    const [auth, setAuth] = useState({ email: "", password: "", isAuth: false})
    const [error, setError] = useState("");

    const handleEmailChange = (e) => {
        setAuth({ ...auth, email: e.target.value })
    }

    const handlePasswordChange = (e) => {
        setAuth({ ...auth, password: e.target.value })
    }


    const handleLogin = (e) => {
        e.preventDefault();
        // const item =  {};
        // item.name = auth.email;
        // item.year = auth.password;
        
        // const fetchData = async () => {
        //     const result = await (
        //         LoginService.getAll(),
        //         {
        //             headers: {
        //                 "Content-Type": "application/json",
        //                 "Accept": "application/json"
        //             },
        //             body:JSON.stringify(item)
        //         }
        //     )
        //     result = await result.json()
        //     localStorage.setItem('user-info', JSON.stringify(result));
        //     console.log('result', result)

        // };
        // fetchData();

        if (auth.email == adminUser.email && auth.password == adminUser.password) {
            setError("")
            setAuth({
                email: auth.email,
                password: auth.password,
                isAuth: true
            })
            localStorage.setItem('email', auth.email);
        }
        else {
            setError('Login Fail')
        }
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

