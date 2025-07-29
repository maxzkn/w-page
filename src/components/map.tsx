'use client';

import { GoogleMap, useJsApiLoader, Libraries } from '@react-google-maps/api';
import { useState, useEffect } from 'react';

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

// Define a list of libraries to load from the Google Maps API
const libraries: Libraries = ['places'];

const MapComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Load the Google Maps JavaScript API only when component is visible
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
    libraries: libraries,
  });

  // Check if map is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const mapElement = document.getElementById('map');
    if (mapElement) {
      observer.observe(mapElement);
    }

    return () => observer.disconnect();
  }, []);

  // Show loading state only if map is visible and script is loading
  if (isVisible && !scriptLoaded) {
    return (
      <div id="map" className="full-width-child">
        <div className="w-full h-[50vh] bg-gray-100 flex items-center justify-center">
          <div className="text-gray-500">Loading map...</div>
        </div>
      </div>
    );
  }

  // Show error state
  if (isVisible && loadError) {
    return (
      <div id="map" className="full-width-child">
        <div className="w-full h-[50vh] bg-gray-100 flex items-center justify-center">
          <div className="text-red-500">Error loading map</div>
        </div>
      </div>
    );
  }

  // Don't render anything until map is visible
  if (!isVisible) {
    return (
      <div id="map" className="full-width-child">
        <div className="w-full h-[50vh] bg-gray-100" />
      </div>
    );
  }

  return (
    <div id="map" className="full-width-child">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      />
    </div>
  );
};

export { MapComponent };
