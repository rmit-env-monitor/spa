import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class NavBarWithToken extends Component {
    render() {
        const username = localStorage.username

        return (
            <nav className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li><Link to={'/'}>Map</Link></li>
                    <li><Link to={'measurement'}>Measurement</Link></li>
                    <li><Link to={'history'}>History</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link>Welcome, {username}</Link></li>
                    <li><Link to={'/login'}>Logout</Link></li>
                </ul>
            </nav>
        )
    }
}

NavBarWithToken.propTypes = {}

export default NavBarWithToken