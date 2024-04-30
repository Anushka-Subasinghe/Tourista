import React, { useState, useEffect } from 'react';
import MapComponent from '../MapComponent';
import { Button, Page, Datepicker } from '@mobiscroll/react';
import '../mobiscroll.javascript.min.css';
import * as moment from 'moment';

const TripPlanning = () => {
  const [checkInDate, setCheckInDate] = useState(moment());
  const [checkOutDate, setCheckOutDate] = useState(moment());
  const [currentPosition, setCurrentPosition] = useState(null);
  const [routeItinerary, setRouteItinerary] = useState(null);

  useEffect(() => {
    // Get current position when component mounts
    getCurrentPosition();
  }, []);

  const getCurrentPosition = () => {
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
  };

  const handleCheckInChange = (value) => {
    setCheckInDate(value.value);
  };

  const handleCheckOutChange = (value) => {
    setCheckOutDate(value.value);
  };

  const calculateDuration = () => {
    const checkIn = moment(checkInDate);
    const checkOut = moment(checkOutDate);
    return checkOut.diff(checkIn, 'days');
  };

  const handlePlanTrip = async () => {
    const tripDuration = calculateDuration();
    // Pass trip duration and current position to backend to calculate route itinerary
    try {
      const response = await fetch('http://localhost:3000/calculate-route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          checkInDate: checkInDate,
          checkOutDate: checkOutDate,
          apiKey: 'AIzaSyAPyaxZpoWiopqC2SH2xCD2Py2zoSbqSZ8', // Replace with your Google Maps API key
          lat: currentPosition.lat, 
          lng: currentPosition.lng
        })
      });
      const data = await response.json();
      console.log(data);
      setRouteItinerary(data);
    } catch (error) {
      console.error('Error planning trip:', error);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MapComponent currentPosition={currentPosition} routeItinerary={routeItinerary} />
      </div>
      <Page>
        <div className="mbsc-grid mbsc-grid-fixed">
          <div className="mbsc-form-group">
            <div className="mbsc-row mbsc-justify-content-center">
              <div className="mbsc-col-md-10 mbsc-col-xl-8 mbsc-form-grid">
                <div className="mbsc-form-group-title">Select Dates</div>
                <div className="mbsc-row">
                  <div className="mbsc-col-md-6 mbsc-col-12">
                    <Datepicker
                        moment={moment} 
                        returnFormat="moment" 
                        label="Check In Date"
                        placeholder="Select Check In Date"
                        value={checkInDate}
                        onChange={handleCheckInChange}
                    />
                  </div>
                  <div className="mbsc-col-md-6 mbsc-col-12">
                    <Datepicker
                      moment={moment} 
                      returnFormat="moment"
                      value={checkOutDate}  
                      label="Check Out Date"
                      placeholder="Select Check Out Date"
                      onChange={handleCheckOutChange}
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button onClick={handlePlanTrip}>Plan Your Trip</Button>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
}

export default TripPlanning;
