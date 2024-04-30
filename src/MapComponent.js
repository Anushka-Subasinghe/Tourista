import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '800px', // Adjust the width of the map
  height: '800px', // Adjust the height of the map
};

const MapComponent = () => {
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        error => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBjPX1Qa4ud-cnQNSlfDPaP9K-xgRw_eME"
    >
      {currentPosition && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentPosition}
          zoom={10}
        >
          <Marker position={currentPosition} />
        </GoogleMap>
      )}
    </LoadScript>
  );
}

export default MapComponent;
