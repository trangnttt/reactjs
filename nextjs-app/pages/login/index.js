import React, { useContext, useState } from 'react';
import styles from './styles/login.module.scss'
import { AuthContext } from '@/contexts/AuthContext'

const ErrorStyle = {
    color: 'red',
    marginBottom: '10px',
    fontSize: '13px',
    fontStyle: 'italic'
}

const Login = () => {
    const [dataUser, setDataUser] = useState({ email: "", password: "" })
    const { error, handleLogin } = useContext(AuthContext);

    const handleInputChange = (event) => {
        setDataUser({
            ...dataUser,
            [event.target.name]: event.target.value,
        });
        console.log('dataUsser',dataUser)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin({ email: dataUser.email, password: dataUser.password })
    }

    return (
        <div className="main">
            <div className={styles["login"]}>
                <div className={styles["login-form"]}>
                    <form onSubmit={handleSubmit}>
                        <input className={styles["login-form__input"]} type="text" placeholder="name" name="email" value={dataUser.email} onChange={handleInputChange} />
                        <input className={styles["login-form__input"]} type="password" placeholder="password" name="password" value={dataUser.password} autoComplete="on" onChange={handleInputChange} />
                        {(error != "") ? <div style={ErrorStyle}>{error}</div> : ""}
                        <button type="submit" className={styles["login-form__btn"]} >Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login
