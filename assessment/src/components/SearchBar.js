import React from 'react'

const SearchBar = ({ setInputValue }) => {

    function handleChange(event) {
        setInputValue(event.target.value)
    }

    return <div>
        <input type="text" placeholder="Search by name" onChange={handleChange} className="searchbar" />
    </div>
}

export default SearchBar;