import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBarNoToken extends Component {
    render() {
        return (
            <nav className="collapse navbar-collapse">
                <ul className='nav navbar-nav navbar-right'>
                    <li><Link to={'/login'}>Login</Link></li>
                    <li><Link to={'/register'}>Register</Link></li>
                </ul>
            </nav>
        )
    }
}

NavBarNoToken.propTypes = {

}

export default NavBarNoToken