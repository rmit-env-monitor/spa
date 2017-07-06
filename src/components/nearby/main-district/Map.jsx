import React, { Component, PropTypes } from 'react'
import GoogleMapsLoader from 'google-maps'

class Map extends Component {
    render() {
        return (
            <div id="map-nearby"></div>
        )
    }

    componentDidMount() {
        GoogleMapsLoader.load(google => {
            const location = { lat: 10.729357, lng: 106.694814 }
            const map = new google.maps.Map(document.getElementById('map-nearby'), {
                zoom: 15,
                center: location,
                mapTypeId: 'terrain'
            })
            var marker = new google.maps.Marker({
                position: location,
                map: map,
                label: {
                    text: '20'
                }
            })
        })
    }
}

Map.propTypes = {}

export default Map