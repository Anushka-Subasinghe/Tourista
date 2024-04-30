import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, LoadScript, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '800px',
};

const MapComponent = ({ currentPosition }) => {
  const [topDestinations, setTopDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);

  useEffect(() => {
    if (currentPosition) {
      const { lat, lng } = currentPosition;
      const radius = 5000; // Specify radius in meters
      const apiKey = 'AIzaSyAPyaxZpoWiopqC2SH2xCD2Py2zoSbqSZ8'; // Replace with your actual API key
      const url = `http://localhost:3000/places?lat=${lat}&lng=${lng}&radius=${radius}&apiKey=${apiKey}`;

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          if (data.results) {
            setTopDestinations(data.results);
          }
        })
        .catch((error) => {
          console.error('Error fetching top destinations:', error);
        });
    }
  }, [currentPosition]);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAPyaxZpoWiopqC2SH2xCD2Py2zoSbqSZ8"
    >
      {currentPosition && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentPosition}
          zoom={10}
        >
          {/* Marker for current location */}
          <Marker
            position={currentPosition}
            icon={{
              url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png', // Blue color marker
            }}
          />

          {/* Markers for top destinations */}
          {topDestinations.map((destination, index) => (
            <Marker
              key={index}
              position={{
                lat: destination.geometry.location.lat,
                lng: destination.geometry.location.lng
              }}
              icon={{
                url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', // Red color marker
              }}
              onMouseOver={() => {
                setSelectedDestination(destination);
              }}
              onMouseOut={() => {
                setSelectedDestination(null);
              }}
            />
          ))}

          {/* InfoWindow to display destination's name */}
          {selectedDestination && (
            <InfoWindow
              position={{
                lat: selectedDestination.geometry.location.lat,
                lng: selectedDestination.geometry.location.lng
              }}
              onCloseClick={() => {
                setSelectedDestination(null);
              }}
            >
              <div>{selectedDestination.name}</div>
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </LoadScript>
  );
}

export default MapComponent;
