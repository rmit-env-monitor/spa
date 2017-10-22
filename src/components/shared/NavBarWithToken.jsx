import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class NavBarWithToken extends Component {
    render() {
        const username = localStorage.username

        return (
            <nav className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    {this.props.location === '/' ?
                        <li className="active"><Link to={'/'}>Nearby</Link></li>
                        :
                        <li><Link to={'/'}>Home</Link></li>
                    }
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a>Welcome, {username}</a></li>
                    <li><Link to={'/login'}>Logout</Link></li>
                </ul>
            </nav>
        )
    }
}

NavBarWithToken.propTypes = {
    location: PropTypes.string.isRequired
}

export default NavBarWithToken