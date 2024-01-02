import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to='/'>Home</Link><br></br>
            <Link to='/user-details'>UserDetails</Link><br></br>
            <Link to='/NotFound'>Not Found</Link><br></br>
        </nav>
    );

}

export default Navbar;
