import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

export class Maps extends Component {
    render() {
        return (
            <div style={{width:'50%'}}>
            <Map google={this.props.google} zoom={14}
            initialCenter={{
                lat:  0.347596,
                lng: 32.582520
              }}
            >
 
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
     
            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  
                </div>
            </InfoWindow>
          </Map>
          </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAHe1hwOKcrz9BhGwR58cEeJEGhME36O_w")
  })(Maps)

