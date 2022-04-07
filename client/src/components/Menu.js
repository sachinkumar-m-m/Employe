import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
    return (
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                    <div className="container">
                        <NavLink to={`/`} className="navbar-brand">Employee Details</NavLink>

                        <button className="navbar-toggler" data-bs-toggle='collapse' data-bs-target='#menu'>
                            <span className="navbar-toggle-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="menu">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink  to={`/home`} className="nav-link">HOME</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink  to={`/create`} className="nav-link">CREATE</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Menu
