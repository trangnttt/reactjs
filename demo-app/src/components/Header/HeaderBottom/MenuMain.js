import React from 'react'
const MenuMain = () => {
    return (
        <div className="wrapper">
            <div className="menu-main">
                <div className="menu-main__dropdown is-active">
                    <button className="drop-btn">
                        <i className="fa fa-align-left"></i> All Departments
                    </button>
                    <div className="menu-main__dropdown--content">
                        <a className="menu-main__dropdown-link" href="#">Link 1</a>
                        <a className="menu-main__dropdown-link" href="#">Link 2</a>
                        <a className="menu-main__dropdown-link" href="#">Link 3</a>
                    </div>
                </div>
                <div className="menu-main__dropdown">
                    <button className="drop-btn">Multilevel
                    </button>
                    <div className="menu-main__dropdown--content">
                        <a className="menu-main__dropdown-link" href="#">Link 1</a>
                        <a className="menu-main__dropdown-link" href="#">Link 2</a>
                        <a className="menu-main__dropdown-link" href="#">Link 3</a>
                    </div>
                </div>
                <div className="menu-main__dropdown">
                    <button className="drop-btn">Mega Menu
                    </button>
                    <div className="menu-main__dropdown--content">
                        <a className="menu-main__dropdown-link" href="#">Link 1</a>
                        <a className="menu-main__dropdown-link" href="#">Link 2</a>
                        <a className="menu-main__dropdown-link" href="#">Link 3</a>
                    </div>
                </div>
                <div className="menu-main__dropdown">
                    <button className="drop-btn">Fullwidth
                    </button>
                    <div className="menu-main__dropdown--content">
                        <a className="menu-main__dropdown-link" href="#">Link 1</a>
                        <a className="menu-main__dropdown-link" href="#">Link 2</a>
                        <a className="menu-main__dropdown-link" href="#">Link 3</a>
                    </div>
                </div>
                <div className="menu-main-right">
                    <a className="menu-main__link" href="#search">
                        <i className="fa fa-volume-control-phone menu-main__icon"></i>
                        <span>1.800.555.6789</span>
                    </a>
                    <a className="menu-main__link is-active" href="#about">
                        <i className="fa fa-commenting-o menu-main__icon"></i>
                        <span>BLOG</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default MenuMain