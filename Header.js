import React from "react";
import '../App.css';
import SearchBar from "./SearchBar";
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';
import Drop from "./Drop";
import Side from "./Side";
    

const Header = () => {
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ps-3" href="index.html">Start Bootstrap</a> 
        <Side/>
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        <SearchBar/>
        </form>
        <Drop/>
        </nav>
    )
}

export default Header;