import React from 'react'
const Header = ({ Link, Logo }) => {
    return (
        <header id="header" className="dark-primary-color">
            <Link className="logo" to="/">
                <img src={Logo} alt="logo" />
            </Link>
            <nav className="navbar">
                <ul className="nav-list">
                    <li>
                        <Link className="nav-link text-primary-color" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-link text-primary-color" to="/genres">Genres</Link>
                    </li>
                    <li>
                        <Link className="nav-link text-primary-color" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="nav-link text-primary-color" to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav >
            <button className="accent-color"><Link to="/auth" className="nav-link text-primary-color">Sign Up</Link></button>
            <div className="burger-menu">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </header >
    )
}
export default Header;