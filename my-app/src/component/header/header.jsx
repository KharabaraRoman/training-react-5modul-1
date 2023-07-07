import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <nav className="navbar bg-dark mb-3 navbar-expand-lg">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1 text-success">
                    Navbar
                </span>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        <NavLink className="nav-link text-white" aria-current="page" to="/">Home  </NavLink>
                        <NavLink className="nav-link" to="/news">News  </NavLink>
                        <NavLink className="nav-link" to="/todo">todo  </NavLink>
                    </div>
                </div>
                <button className="btn btn-outline-success" ></button>
            </div>
        </nav>
    )
}

export default Header;