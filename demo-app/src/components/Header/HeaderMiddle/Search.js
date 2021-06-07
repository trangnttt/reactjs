import React from 'react'
const SearchHeader = () => {
    return (
        <div className="header-mid__search">
            <input type="text" className="searchTerm" placeholder="Search" />
            <button type="submit" className="searchButton">
                <i className="fa fa-search"></i>
            </button>
        </div>
    )
}
export default SearchHeader