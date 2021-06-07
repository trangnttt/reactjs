import React from 'react'
const SearchHeader = () => {
    return (
        <div className="header-search">
            <input type="text" className="header-search__key" placeholder="Search" />
            <button type="submit" className="header-search__btn">
                <i className="fa fa-search"></i>
            </button>
        </div>
    )
}
export default SearchHeader