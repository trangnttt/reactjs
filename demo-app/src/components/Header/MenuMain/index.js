import React from 'react'
import './styles/menu-main.scss'
import { Link } from 'react-router-dom'
const MenuMain = () => {
    return (
        <div className="container">
            <div className="menu-main">
                <div className="menu-main__dropdown is-active">
                    <button className="menu-main__dropdown-btn">
                        <i className="fa fa-align-left"></i> All Departments
                    </button>
                    <div className="menu-main__dropdown--content">
                        <Link className="menu-main__dropdown-link" to ="#">Link 1</Link>
                        <Link className="menu-main__dropdown-link" to ="#">Link 2</Link>
                        <Link className="menu-main__dropdown-link" to ="#">Link 3</Link>
                    </div>
                </div>
                <div className="menu-main__dropdown">
                    <button className="menu-main__dropdown-btn">Multilevel
                    </button>
                    <div className="menu-main__dropdown--content">
                        <Link className="menu-main__dropdown-link" to ="#">Link 1</Link>
                        <Link className="menu-main__dropdown-link" to ="#">Link 2</Link>
                        <Link className="menu-main__dropdown-link" to ="#">Link 3</Link>
                    </div>
                </div>
                <div className="menu-main__dropdown">
                    <button className="menu-main__dropdown-btn">Mega Menu
                    </button>
                    <div className="menu-main__dropdown--content">
                        <Link className="menu-main__dropdown-link" to ="#">Link 1</Link>
                        <Link className="menu-main__dropdown-link" to ="#">Link 2</Link>
                        <Link className="menu-main__dropdown-link" to ="#">Link 3</Link>
                    </div>
                </div>
                <div className="menu-main__dropdown">
                    <button className="menu-main__dropdown-btn">Fullwidth
                    </button>
                    <div className="menu-main__dropdown--content">
                        <Link className="menu-main__dropdown-link" to ="#">Link 1</Link>
                        <Link className="menu-main__dropdown-link" to ="#">Link 2</Link>
                        <Link className="menu-main__dropdown-link" to ="#">Link 3</Link>
                    </div>
                </div>
                <div className="menu-main--right">
                    <Link className="menu-main__link" to ="#search">
                        <i className="fa fa-volume-control-phone menu-main__icon"></i>
                        1.800.555.6789
                    </Link>
                    <Link className="menu-main__link is-active" to ="#about">
                        <i className="fa fa-commenting-o menu-main__icon"></i>
                       BLOG
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default MenuMain