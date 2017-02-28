import React, { Component, PropTypes } from 'react'
import GoogleMapsLoader from 'google-maps'
import { connect } from 'react-redux'

import Header from './shared/Header.jsx'

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div id="map"></div>
            </div>
        )
    }

    componentDidMount() {
        const {mapReducer} = this.props

        GoogleMapsLoader.load((google) => {
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 8,
                center: { lat: 41.878, lng: -87.629 },
                mapTypeId: 'terrain'
            })

            for (var city in mapReducer.locations) {
                new google.maps.Circle({
                    strokeColor: '#FF0000',
                    strokeOpacity: 0,
                    strokeWeight: 0,
                    fillColor: '#FF0000',
                    fillOpacity: 0.35,
                    map: map,
                    center: mapReducer.locations[city].center,
                    radius: Math.sqrt(mapReducer.locations[city].population) * 100
                })
            }
        })
    }
}

Home.propTypes = {

}

function select(state) {
    return {
        mapReducer: state.mapReducer
    }
}


export default connect(select)(Home)