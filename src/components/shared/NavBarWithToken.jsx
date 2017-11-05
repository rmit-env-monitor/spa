import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class NavBarWithToken extends Component {
  render() {
    const username = localStorage.username

    return (
      <nav className="collapse navbar-collapse navigations">
        <ul className="nav navbar-nav left-navbar">
          {this.props.location === '/' ?
            <li className="left-navbar__link_active"><Link to={'/'}>Nearby</Link></li>
            :
            <li className="left-navbar__link"><Link to={'/'}>Home</Link></li>
          }
        </ul>
        <ul className="nav navbar-nav navbar-right right-navbar">
          <li className="right-navbar__link"><a>Welcome, {username}</a></li>
          <li className="right-navbar__link"><Link to={'/login'}>Logout</Link></li>
        </ul>
      </nav>
    )
  }
}

NavBarWithToken.propTypes = {
  location: PropTypes.string.isRequired
}

export default NavBarWithToken