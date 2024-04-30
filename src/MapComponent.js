import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '800px',
};

const MapComponent = ({ currentPosition, routeItinerary }) => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    if (routeItinerary) {
      const origin = {
        lat: routeItinerary.waypoints[0].lat,
        lng: routeItinerary.waypoints[0].lng
      };
      const destination = {
        lat: routeItinerary.waypoints[routeItinerary.waypoints.length - 1].lat,
        lng: routeItinerary.waypoints[routeItinerary.waypoints.length - 1].lng
      };
      const waypoints = routeItinerary.waypoints.slice(1, -1).map(waypoint => ({
        location: {
          lat: waypoint.lat,
          lng: waypoint.lng
        }
      }));

      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          waypoints: waypoints,
          travelMode: 'DRIVING'
        },
        (result, status) => {
          if (status === 'OK') {
            setDirections(result);
          } else {
            console.error('Directions request failed due to ' + status);
          }
        }
      );
    }
  }, [routeItinerary]);

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

          {/* Markers for destinations */}
          {routeItinerary && routeItinerary.waypoints.map((destination, index) => (
            <Marker
              key={index}
              position={{
                lat: destination.lat,
                lng: destination.lng
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

          {/* Display route on the map if directions are available */}
          {directions && (
            <DirectionsRenderer
              options={{ preserveViewport: true }}
              directions={directions}
            />
          )}
        </GoogleMap>
      )}
    </LoadScript>
  );
}

export default MapComponent;
