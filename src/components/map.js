import React from 'react';
import GeoJson from 'geojson';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

class Map extends React.Component {
  componentDidMount() {
    this.initializeMap();
    this.map.on('load', () => {
      const { taxiData, car2goData } = this.props;
      const taxiDataParsed = GeoJson.parse(taxiData, { Point: ['coordinate.latitude', 'coordinate.longitude'] });
      const car2goDataParsed = GeoJson.parse(car2goData, { Point: 'coordinates' });
      this.addSources(taxiDataParsed, car2goDataParsed);
      this.addLayers();
    });
  }

  initializeMap() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [10.0087783, 53.5532316],
      zoom: 11,
    });
  }

  addSources(taxiDataParsed, car2goDataParsed) {
    this.map.addSource('pointsSourceTaxi', {
      type: 'geojson',
      data: taxiDataParsed,
    });

    this.map.addSource('pointsSourceCar2Go', {
      type: 'geojson',
      data: car2goDataParsed,
    });
  }

  addLayers() {
    this.map.addLayer({
      id: 'rocket',
      type: 'symbol',
      source: 'pointsSourceCar2Go',
      layout: {
        'icon-image': 'rocket-15',
      },
    });

    this.map.addLayer({
      id: 'points',
      type: 'symbol',
      source: 'pointsSourceTaxi',
      layout: {
        'icon-image': 'car-15',
      },
    });
  }

  render() {
    return (
      <div
        ref={(el) => { this.mapContainer = el; }}
        className="absolute top right left bottom"
      />
    );
  }
}

export default Map;
