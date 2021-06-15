import React, { useContext } from 'react'
import Link from 'next/link'
import { AuthContext } from '@/contexts/AuthContext'

const Header = () => {
    const { auth, handleLogout } = useContext(AuthContext);
    console.log('auth', auth.isAuth)
    return (
        <div className="header">
            <div className="container bg-">
                <Link href="/" >
                    <a className="header__logo">LOGO</a>
                </Link>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                    <li className="menu__item">

                        <Link href="/" >
                            <a className="menu__link">Home</a>
                        </Link>
                    </li>
                    <li className="menu__item">

                        <Link href="/about" >
                            <a className="menu__link">About</a>
                        </Link>
                    </li>
                    <li className="menu__item">
                        <Link href="/post" >
                            <a className="menu__link">Blog post</a>
                        </Link>
                    </li>
                    <li className="menu__item">
                        <Link href="/contact" >
                            <a className="menu__link">Contact</a>
                        </Link>
                    </li>
                    {
                        auth.isAuth ?
                            <>
                                <li className="menu__item">
                                    <Link href="/" >
                                        <a className="menu__link">
                                            {auth.name}
                                        </a>
                                    </Link>
                                </li>
                                <li className="menu__item">
                                    <Link href="/" >
                                        <a className="menu__link" onClick={handleLogout}>
                                            logout
                                        </a>
                                    </Link>
                                </li>
                            </>
                            :
                            <li className="menu__item">
                                <Link href="/login" >
                                    <a className="menu__link">
                                        login
                                    </a>
                                </Link>
                            </li>

                    }
                    {/* <li className="menu__item">
                        {
                            
                            auth.isAuth ?
                                <Link href="/" >
                                    <a className="menu__link" onClick={handleLogout}>
                                        logout
                                    </a>
                                </Link> : <Link href="/login" >
                            <a className="menu__link">
                                login
                            </a>
                        </Link>
                        }  
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default Header