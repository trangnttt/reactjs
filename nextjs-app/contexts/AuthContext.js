import React, { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LoginService from '@/services/Login'
export const AuthContext = createContext();
const AuthProvider = (props) => {
    const router = useRouter()

    const [auth, setAuth] = useState({ name: "", isAuth: false })
    const [token, setToken] = useState("")
    const [roles, setRoles] = useState([])
    const [error, setError] = useState("")

    useEffect(
        () => {
            const itemStorage = localStorage.getItem('AccessToken');
            if(itemStorage) {
                getInfo()
            }
            
        }, []
    )

    const getInfo = async () => {
        const itemStorage = localStorage.getItem('AccessToken');
        const res = await LoginService.getId(1);
        const { name } = res.data.data;

        if (res) {
            setAuth({
                name,
                isAuth: true,
            })
            setRoles(['guest', 'admin'])
        }
    }

    const handleLogin = (data) => {
        const fetchData = async () => {
            try {
                const res = await LoginService.postLogin(data)
                setError("");
                const token = res.data.token
                setToken(token)
                localStorage.setItem('AccessToken', token);
                getInfo()
                router.push('/')
            } catch (e) {
                setError('Login Fail')
            }
        }
        fetchData();
    }

    const handleLogout = () => {
        setAuth({
            name: "",
            isAuth: false
        })
        localStorage.removeItem('AccessToken');
    }


    return (
        <AuthContext.Provider value={{ auth, error, getInfo, handleLogin, handleLogout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

