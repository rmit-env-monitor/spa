import React, { Component, PropTypes } from 'react'
import GoogleMapsLoader from 'google-maps'
import { connect } from 'react-redux'

import { getLocationRecords, storeMapData } from '../actions/mapAction'
import Header from './shared/Header.jsx'

class Map extends Component {
    render() {
        const { location } = this.props

        return (
            <div>
                <Header location={location.pathname} />
                <div id="map"></div>
            </div>
        )
    }

    componentDidMount() {
        const { dispatch } = this.props
        GoogleMapsLoader.load((google) => {
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: { lat: 10.729357, lng: 106.694814 },
                mapTypeId: 'terrain'
            })
            dispatch(storeMapData(map))
            dispatch(getLocationRecords(() => this.updateMap()))
        })
    }

    updateMap() {
        const { mapReducer } = this.props
        GoogleMapsLoader.load((google) => {
            for (var location of mapReducer.locations) {
                var center = { lat: location.latitude, lng: location.longitude }
                new google.maps.Circle({
                    strokeColor: '#FF0000',
                    strokeOpacity: 0,
                    strokeWeight: 0,
                    fillColor: '#FF0000',
                    fillOpacity: 0.35,
                    map: mapReducer.map,
                    center: center,
                    radius: 50
                })
            }
        })
    }
}

Map.propTypes = {}

function select(state) {
    return {
        mapReducer: state.mapReducer
    }
}


export default connect(select)(Map)