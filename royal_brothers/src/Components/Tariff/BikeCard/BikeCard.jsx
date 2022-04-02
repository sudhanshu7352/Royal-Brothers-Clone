import React from "react";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { SchedulePopUp } from "../popUp/SchedulePopUp";

export const BikeCard = ({
  name,
  image,
  location,
  kilometer_limit,
  hourly_rate,
  pickUpTime,
  pickUpDate,
  dropOffDate,
  dropOffTime,
  _id,
}) => {
  const [alignment, setAlignment] = React.useState("hourly");

  const [isAvailable, setIsAvailable] = React.useState(
    pickUpDate && dropOffDate && new Date(dropOffDate) < new Date()
  );

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const pTagContentStyle = {
    listStyle: "none",
    color: "#746e6e",
    fontSize: "11px",
    lineHeight: "2",
    display: "flex",
    justifyContent: "space-between",
  };

  const liHeadingStyle = {
    listStyle: "none",
    color: "black",
    fontSize: "12px",
    lineHeight: 2.3,
  };

  const dayHandler = (days) => {
    if (days === "7Days") days = 7;
    else if (days === "30Days") days = 30;
    else days = 15;

    return (
      <>
        <ul>
          <li style={liHeadingStyle}>
            <span>Rental Charges</span>
            <div style={{ padding: "0px 25px 0px 10px" }}>
              <p style={pTagContentStyle}>
                Price for {days} Days
                <span style={{ color: "black" }}>
                  ₹ {days * (hourly_rate * 11)}
                </span>
              </p>
            </div>
          </li>
          <li style={liHeadingStyle}>
            <span>Km Limit</span>
            <div style={{ padding: "0px 25px 0px 10px" }}>
              <p style={pTagContentStyle}>
                No of kms in {days} days that can be
                <span style={{ color: "black" }}>
                  {Math.floor((days / 7) * kilometer_limit)} km
                </span>
              </p>
              <p style={pTagContentStyle}>travelled without extra charges</p>
            </div>
          </li>

          <li style={liHeadingStyle}>
            <span>Excess Km Charges</span>
            <div style={{ padding: "0px 25px 0px 10px" }}>
              <p style={pTagContentStyle}>
                Charges beyond the km limit
                <span style={{ color: "black" }}>₹ 3.0/km</span>
              </p>
            </div>
          </li>
        </ul>
      </>
    );
  };

  return (
    <>
      <div>
        <div style={{ padding: "10px" }}>
          <h4 style={{ color: "black", paddingBottom: "10px" }}>{name}</h4>
          <img src={image} alt="" width={name === "Pulsar" ? "70%" : "80%"} />
        </div>
        {/*  */}
        <ToggleButtonGroup
          sx={{
            boxShadow: 1,
            overflow: "hidden",
            borderRadius: "0px",
          }}
          fullWidth
          value={alignment}
          exclusive
          onChange={(event, newAlignment) => {
            handleChange(event, newAlignment);
          }}
        >
          {["hourly", "7Days", "15Days", "30Days"].map((item, index) => {
            return (
              <ToggleButton
                sx={
                  alignment === item
                    ? {
                        border: "none",
                        fontWeight: "500",
                        color: "black",
                        margin: 0,
                        paddingX: "11px",
                        borderBottom: "2px solid #fed250",
                      }
                    : {
                        border: "none",
                        fontWeight: "500",
                        color: "black",
                        margin: 0,
                        paddingX: "11px",
                        borderBottom: "2px solid transparent",
                      }
                }
                value={item}
              >
                {item}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>

        <div
          style={{
            textAlign: "left",
            height: "300px",
            padding: "15px 10px 65px 10px",
          }}
        >
          {alignment === "hourly" ? (
            <ul>
              <li style={liHeadingStyle}>
                <span>Mon-Tue</span>
                <p style={{ fontSize: "10px", color: "grey" }}>
                  (Min 10 hrs booking)
                </p>
                <div style={{ padding: "0px 25px 0px 10px" }}>
                  <p style={pTagContentStyle}>
                    Booking Time (0- 24 hrs)
                    <span style={{ color: "black" }}>₹ {hourly_rate}/hr</span>
                  </p>
                  <p style={pTagContentStyle}>
                    Booking Time {"(>24 hrs)"}
                    <span style={{ color: "black" }}>₹ {hourly_rate}/hr</span>
                  </p>
                </div>
              </li>
              <li style={liHeadingStyle}>
                <span>Fri-Sat</span>
                <p style={{ fontSize: "10px", color: "grey" }}>
                  (Min 24 hrs booking)
                </p>
                <div style={{ padding: "0px 25px 0px 10px" }}>
                  <p style={pTagContentStyle}>
                    Booking Time {"(>24 hrs)"}
                    <span style={{ color: "black" }}>₹ {hourly_rate}/hr</span>
                  </p>
                </div>
              </li>
              {alignment === "hourly" ? (
                <li style={liHeadingStyle}>
                  <span>Extras</span>
                  <div style={{ padding: "0px 25px 0px 10px" }}>
                    <p style={pTagContentStyle}>
                      Km limit<span style={{ color: "black" }}>₹ 5.0/hr</span>
                    </p>
                    <p style={pTagContentStyle}>
                      Exes Km charges
                      <span style={{ color: "black" }}>₹ 4.0/km</span>
                    </p>
                  </div>
                </li>
              ) : (
                ""
              )}
            </ul>
          ) : (
            dayHandler(alignment)
          )}
        </div>

        <SchedulePopUp isAvailable={isAvailable}/>
      </div>
    </>
  );
};
