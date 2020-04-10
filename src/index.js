import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

mapboxgl.accessToken = 'pk.eyJ1IjoidG9tYXNnaWEiLCJhIjoiY2s4ajIzOTl6MDUybDNmcDhzd2JwbzJmdiJ9.EZxoNTzC5kqOfx3HUT-4JQ';

class Application extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lng: -97.6056,
			lat: 31.0788,
			zoom: 13
		};
	}
 
	componentDidMount() {
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/tomasgia/ck8j23est0scm1imkz2fiv8v8',
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		});

		map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    	);

    	const marker = new mapboxgl.Marker() //marker for where the smart park is located
    		.setLngLat([-97.6056, 31.0788])
    		.addTo(map);
/*
		MUST USE GEOCODER API TO ADD LOCATIONS TO MAP

    	const geocoder = new MapboxGeocoder({
		    accessToken: mapboxgl.accessToken,
		    mapboxgl: mapboxgl,
		    marker: false, // Do not use the default marker style
		    placeholder: 'Search for places in/near Nolanville',
		    bbox: [-97.9000, 30.7500, -97.3000, 31.4000],
		    proximity: {
	     		longitude: -97.6056,
	    		latitude: 31.0788
	    	}
  		});

  		map.addControl(geocoder);
*/
	}
	 
	render() {
	  return (
	    <div>
	      <div ref={el => this.mapContainer = el} className="mapContainer" />
	    </div>
	  )
	}
}
 
//ReactDOM.render(<Application />, document.getElementById('app'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

