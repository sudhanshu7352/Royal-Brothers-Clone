import React from 'react'
import {DatePickerComponent, TimePickerComponent} from "@syncfusion/ej2-react-calendars";
import "./DatePicker.css";

export const DatePicker = ({ Schedule,handleChange }) => {
  /*&const [Schedule, setSchedule] = React.useState({
    pickUpDate: "",
    pickUpTime: "",
    dropOffDate: "",
    dropOffTime: "",
  });

  const handleChange = (event) => {
    // console.log(event.value);
    // console.log(event.name);
    setSchedule({
      ...Schedule,
      [event.target.name]: event.target.value,
    });
  };
  */

  // console.log(Schedule);

  return (
    <>
      <div >
        <p style={{ fontWeight: "700", fontSize: "18px" ,lineHeight:4}}>Pickup</p>
        <div style={{ display: "flex" }}>
          <div style={{ width: "49%" }}>
            <DatePickerComponent
              style={{
                fontWeight: "500",
                fontSize: "15px",
                textAlign: "center",
              }}
              placeholder="Date"
              min={new Date()}
              format="yyyy/MM/dd"
              onChange={handleChange}
              name="pickUpDate"
            ></DatePickerComponent>
          </div>
          <div style={{ width: "49%" }}>
            <TimePickerComponent
              min={new Date(Date.now())}
              style={{
                fontWeight: "500",
                fontSize: "15px",
                textAlign: "center",
              }}
              placeholder="Time"
              format="HH:mm"
              onChange={handleChange}
              name="pickUpTime"
            ></TimePickerComponent>
          </div>
        </div>
      </div>

      <div>
        <p style={{ fontWeight: "700", fontSize: "18px",lineHeight:4 }}>Dropoff</p>

        <div style={{ display: "flex" }}>
          <div style={{ width: "49%" }}>
            <DatePickerComponent
              style={{
                fontWeight: "500",
                fontSize: "15px",
                textAlign: "center",
              }}
              placeholder="Date"
              min={new Date(Schedule.pickUpDate || new Date())}
              format="yyyy/MM/dd"
              onChange={handleChange}
              name="dropOffDate"
            ></DatePickerComponent>
          </div>

          <div style={{ width: "49%" }}>
            <TimePickerComponent
              min={new Date().setHours(5, 0, 0, 0)}
              style={{
                fontWeight: "500",
                fontSize: "15px",
                textAlign: "center",
              }}
              placeholder="Time"
              format="HH:mm"
              onChange={handleChange}
              name="dropOffTime"
            ></TimePickerComponent>
          </div>
        </div>
      </div>
    </>
  );
};
