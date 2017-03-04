import React, { Component } from 'react'
import { Link } from 'react-router'

import * as constants from '../../utilities/constants'
import NavBarNoToken from './NavBarNoToken.jsx'
import NavBarWithToken from './NavBarWithToken.jsx'

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to={'/'}>
                            {constants.APPNAME}
                        </Link>
                    </div>
                    {localStorage.token ?
                        <NavBarWithToken />
                        :
                        <NavBarNoToken />
                    }                    
                </div>
            </nav>
        )
    }
}