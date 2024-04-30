import React, { useState } from 'react';
import MapComponent from '../MapComponent';
import { Button, Page, Datepicker } from '@mobiscroll/react';
import '../mobiscroll.javascript.min.css';
import * as moment from 'moment';

const TripPlanning = () => {
  const [checkInDate, setCheckInDate] = useState(moment());
  const [checkOutDate, setCheckOutDate] = useState(moment());

  const handleCheckInChange = (value) => {
    setCheckInDate(value.value);
  };

  const handleCheckOutChange = (value) => {
    setCheckOutDate(value.value);
  };

  const handlePlanTrip = () => {
    // Do something with the selected dates
    console.log("Check In Date:", checkInDate.value);
    console.log("Check Out Date:", checkOutDate.value);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* Centering MapComponent horizontally */}
        <MapComponent />
      </div>
      <Page>
        <div className="mbsc-grid mbsc-grid-fixed">
          <div className="mbsc-form-group">
            <div className="mbsc-row mbsc-justify-content-center">
              <div className="mbsc-col-md-10 mbsc-col-xl-8 mbsc-form-grid">
                <div className="mbsc-form-group-title">Select Dates</div>
                <div className="mbsc-row">
                  <div className="mbsc-col-md-6 mbsc-col-12">
                    {/* Calendar input for Check In Date */}
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
                    {/* Calendar input for Check Out Date */}
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
