import React from "react";
import '../App.css';

function SearchBar() {
    return(
        <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." 
                    aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button className="btn btn-primary" id="btnNavbarSearch" 
                    type="button"><i className="fas fa-search"></i></button>
                </div>
    )
}

export default SearchBar;