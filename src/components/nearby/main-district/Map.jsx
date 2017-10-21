import React, { Component, PropTypes } from 'react'
import GoogleMapsLoader from 'google-maps'

import { saveMap, saveMarker } from '../../../actions/nearbyAction'

class Map extends Component {
    render() {
        return (
            <div id="map-nearby"></div>
        )
    }

    componentDidMount() {
        const { aqi, lat, lng, dispatch } = this.props
        GoogleMapsLoader.load(google => {
            let location = { lat: 10.776651, lng: 106.683750 }
            
            let map = new google.maps.Map(document.getElementById('map-nearby'), {
                zoom: 15,
                center: location,
                mapTypeId: 'terrain'
            })
            dispatch(saveMap(map))

            let marker = new google.maps.Marker({
                position: location,
                map: map,
                label: {
                    text: ' '
                }
            })
            dispatch(saveMarker(marker))
        })
    }
}

Map.propTypes = {
    aqi: PropTypes.number,
    lat: PropTypes.number,
    lng: PropTypes.number,
    dispatch: PropTypes.any.isRequired
}

export default Map