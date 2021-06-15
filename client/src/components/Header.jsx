import React from 'react'
const Header = ({ Link, Logo }) => {
    return (
        <nav className="navbar">
            <Link className="logo" to="/">
                <img src={Logo} alt="logo" />
            </Link>
            <ul className="nav-list">
                <li>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/genres">Genres</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/auth">Sign Up</Link>
                </li>
            </ul>
        </nav >
    )
}
export default Header;