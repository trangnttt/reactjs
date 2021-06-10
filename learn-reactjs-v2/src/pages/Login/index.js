import React, { useContext, useEffect, useHistory } from 'react';
import styles from './styles/login.module.scss'
import { AuthContext } from '@/contexts/AuthContext'
import { browserHistory } from 'react-router';


const ErrorStyle = {
    color: 'red',
    marginBottom: '10px',
    fontSize: '13px',
    fontStyle: 'italic'
}

const Login = (props) => {
    const { auth, error, handleLogin, handleEmailChange, handlePasswordChange } = useContext(AuthContext);
   
    useEffect(
        () => {
            if(auth.isAuth){
                console.log('tttt')
                props.history.push('/todo')
            }
        }
    )

    return (
        <div className="main">
            <div className={styles["login"]}>
                <div className={styles["login-form"]}>
                    <form onSubmit={handleLogin}>
                        <input className={styles["login-form__input"]} type="text" placeholder="name" onChange={handleEmailChange} />
                        <input className={styles["login-form__input"]} type="password" placeholder="password" onChange={handlePasswordChange} autoComplete="on"/>
                        { (error!="") ? <div style={ErrorStyle}>{error}</div> : "" }
                        <button type="submit" className={styles["login-form__btn"]} >Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login
