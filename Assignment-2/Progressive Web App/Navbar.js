import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to='/'>Home</Link><br></br>
            <Link to='/unauthorized'>Unauthorized</Link><br></br>
            <Link to='/admin'>AdminComponent</Link><br></br>
            <Link to='/user'>UserComponent</Link><br></br>
        </nav>
    );

}

export default Navbar;