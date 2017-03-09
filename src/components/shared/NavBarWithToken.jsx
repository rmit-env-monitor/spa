import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class NavBarWithToken extends Component {
    render() {
        const username = localStorage.username

        return (
            <nav className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    {this.props.location === '/' ?
                        <li className="active"><Link to={'/'}>Measurement</Link></li> : <li><Link to={'/'}>Measurement</Link></li>
                    }
                    {this.props.location.indexOf('history') > -1 ?
                        <li className="active"><Link to={'history'}>History</Link></li> : <li><Link to={'history'}>History</Link></li>
                    }
                    {this.props.location.indexOf('map') > -1 ?
                        <li className="active"><Link to={'map'}>Map</Link></li> : <li><Link to={'map'}>Map</Link></li>
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