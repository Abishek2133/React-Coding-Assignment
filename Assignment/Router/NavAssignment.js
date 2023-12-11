import React from "react";
import { Link } from "react-router-dom";

function NavAssignment() {
    return (
        <nav>
            
            <Link to='/' className="title">Home</Link>
            <ul>
            <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    );

}

export default NavAssignment;