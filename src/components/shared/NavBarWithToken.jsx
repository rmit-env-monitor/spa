import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class NavBarWithToken extends Component {
    render() {
        const username = localStorage.username

        return (
            <nav className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    {
                        this.props.location === '/' ?
                            <li className="active"><Link to={'/'}>Nearby</Link></li> : <li><Link to={'/'}>Home</Link></li>
                    }
                    {
                        this.props.location.indexOf('measurement') > -1 ?
                            <li className="active"><Link to={'measurement'}>Measurement</Link></li> : <li><Link to={'measurement'}>Measurement</Link></li>
                    }
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link>Welcome, {username}</Link></li>
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