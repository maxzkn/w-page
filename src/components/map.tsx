'use client';

import { GoogleMap } from '@react-google-maps/api';

export const defaultMapContainerStyle = {
  width: '100%',
  height: '50vh',
};

const defaultMapCenter = {
  lat: 54.7365,
  lng: 25.0721,
};

const defaultMapZoom = 18;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto',
  mapTypeId: 'roadmap',
};

const MapComponent = () => {
  return (
    <div id="map" className="full-width-child">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      ></GoogleMap>
    </div>
  );
};

export { MapComponent };
