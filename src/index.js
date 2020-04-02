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
	}
	 
	render() {
	  return (
	    <div>
	      <div ref={el => this.mapContainer = el} className="mapContainer" />
	    </div>
	  )
	}
}
 
ReactDOM.render(<Application />, document.getElementById('app'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

