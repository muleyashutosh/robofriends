import React from "react";

const SearchBox = ({onChange}) => {
    return (
        <input 
            className='pa3 ba b--green bg-lighest-blue'
            type="search"
            placeholder='search robots'
            onChange={onChange}
        />
    )
}

export default SearchBox;