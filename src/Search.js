import React from 'react';

const Search = (props)=>{
    const {serachText, handleSearchChange} = props
    return(
        <div className="form-group col-md-6">
            <input type="text" className="form-control" value={serachText} onChange={handleSearchChange} placeholder="Search by Name or Email"/>
        </div>
       
    )
}

export default Search