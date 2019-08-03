import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

export class Maps extends Component {
    
    render() {
    
        return (
            
            <div>
                <Map  google={this.props.google} zoom={14}>
                
                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
                        
                
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAHe1hwOKcrz9BhGwR58cEeJEGhME36O_w")
  })(Maps)
