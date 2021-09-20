import React from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom';


function NavBar() {
     return (
         <nav className="NavBar">
             <NavLink to="/">Home</NavLink>
             <NavLink to="/user">Profile</NavLink>
         </nav>
     )
}
export default NavBar;