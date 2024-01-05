import React from "react"
import logo from "./react_logo.png"



function Header() {
    return(
        <header>
            <nav className="nav">
                <img className="nav-logo" src={logo} alt="react logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header