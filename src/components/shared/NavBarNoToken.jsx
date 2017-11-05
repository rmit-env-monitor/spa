import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBarNoToken extends Component {
  render() {
    return (
      <nav className="collapse navbar-collapse navigations">
        <ul className="nav navbar-nav navbar-right right-navbar">
          <li className="right-navbar__link"><Link to={'/login'}>Login</Link></li>
          <li className="right-navbar__link"><Link to={'/register'}>Register</Link></li>
        </ul>
      </nav>
    )
  }
}

NavBarNoToken.propTypes = {

}

export default NavBarNoToken