import React, { useState } from 'react'

const SearchInput = ({ handleSearch }) => {
    const [input, setInput] = useState("");
    const Search = (e) => {
        e.preventDefault();
        handleSearch(input);
    }
    return (
        
        <form onSubmit={Search} className="h-100 d-flex align-items-center justify-content-center">
            <input className="form-control me-1" placeholder="Search" value={input} onChange={e => setInput(e.target.value)} />
            <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
    )
}

export default SearchInput 