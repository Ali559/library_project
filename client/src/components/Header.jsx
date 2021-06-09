import React from 'react'
const Header = ({ Link, Logo }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <Link className="navbar-brand" to="/"> <img src={Logo} alt="logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="nav-menu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link  fs-5" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle  fs-5" id="genreDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Genres
                            </Link>
                            <ul class="dropdown-menu " aria-labelledby="genreDropdown">
                                <li><Link class="dropdown-item" href="#">Action</Link></li>
                                <li><Link class="dropdown-item" href="#">Another action</Link></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><Link class="dropdown-item" href="#">Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  fs-5" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  fs-5" to="/auth">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;