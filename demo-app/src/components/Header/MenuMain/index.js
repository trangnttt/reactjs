import React from 'react'
import './styles/menu-main.scss'
const MenuMain = () => {
    return (
        <div className="wrapper">
            <div className="menu-main">
                <div className="menu-main__dropdown is-active">
                    <button className="menu-main__dropdown-btn">
                        <i className="fa fa-align-left"></i> All Departments
                    </button>
                    <div className="menu-main__dropdown--content">
                        <a className="menu-main__dropdown-link" href="#">Link 1</a>
                        <a className="menu-main__dropdown-link" href="#">Link 2</a>
                        <a className="menu-main__dropdown-link" href="#">Link 3</a>
                    </div>
                </div>
                <div className="menu-main__dropdown">
                    <button className="menu-main__dropdown-btn">Multilevel
                    </button>
                    <div className="menu-main__dropdown--content">
                        <a className="menu-main__dropdown-link" href="#">Link 1</a>
                        <a className="menu-main__dropdown-link" href="#">Link 2</a>
                        <a className="menu-main__dropdown-link" href="#">Link 3</a>
                    </div>
                </div>
                <div className="menu-main__dropdown">
                    <button className="menu-main__dropdown-btn">Mega Menu
                    </button>
                    <div className="menu-main__dropdown--content">
                        <a className="menu-main__dropdown-link" href="#">Link 1</a>
                        <a className="menu-main__dropdown-link" href="#">Link 2</a>
                        <a className="menu-main__dropdown-link" href="#">Link 3</a>
                    </div>
                </div>
                <div className="menu-main__dropdown">
                    <button className="menu-main__dropdown-btn">Fullwidth
                    </button>
                    <div className="menu-main__dropdown--content">
                        <a className="menu-main__dropdown-link" href="#">Link 1</a>
                        <a className="menu-main__dropdown-link" href="#">Link 2</a>
                        <a className="menu-main__dropdown-link" href="#">Link 3</a>
                    </div>
                </div>
                <div className="menu-main--right">
                    <a className="menu-main__link" href="#search">
                        <i className="fa fa-volume-control-phone menu-main__icon"></i>
                        1.800.555.6789
                    </a>
                    <a className="menu-main__link is-active" href="#about">
                        <i className="fa fa-commenting-o menu-main__icon"></i>
                       BLOG
                    </a>
                </div>
            </div>
        </div>
    )
}
export default MenuMain