import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import './css/navBar.css';

const NavBar = ({user}) => {
        return ( 
            <nav className="topnav container-nav" id="navbar">
                <div className="wrapper">

                <Link className="navbar-brand" to="/">FoodTopia</Link>
                    <Link to="" className="icon nav-link">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </Link>
                    <NavLink className="nav-item nav-link" to="">ContactUs</NavLink>
                    <NavLink className="nav-item nav-link active" to="">About Us</NavLink>
                    
                    {!user && (
                    <React.Fragment>
                        <NavLink className="nav-item nav-link" to="/register">Register</NavLink> 
                        <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
                    </React.Fragment>
                    )}

                    {user && (
                    <React.Fragment>
                        <NavLink className="nav-item nav-link" to="/logout">Logout</NavLink>
                        <NavLink className="nav-item nav-link" to="/orders">{user.name}</NavLink> 
                    </React.Fragment>
                    )}

                    
                    
            
                </div>
            </nav>
         );
}
 
export default NavBar;