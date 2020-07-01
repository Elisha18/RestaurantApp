import React from 'react';

const SearchBox = ({value,onChange}) => {
    return ( 
        <input 
                type="text"
                name="query"
                placeholder = "Search..."
                value={value} 
                className="form-control"
                onChange = {onChange}
            />
     );
}
 
export default SearchBox;