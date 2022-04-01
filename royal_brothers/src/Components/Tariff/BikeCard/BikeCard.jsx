import React from "react";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const BikeCard = () => {
  const [alignment, setAlignment] = React.useState("hourly");

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
    if(days==="7Days") days = 7;
    else if(days==="30Days") days = 30;
    else days = 15;

    return (
      <>
        <ul>
          <li style={liHeadingStyle}>
            <span>Rental Charges</span>
            <div style={{ padding: "0px 25px 0px 10px" }}>
              <p style={pTagContentStyle}>
                Price for {days} Days
                <span style={{ color: "black" }}>₹ {days * (20 * 11)}</span>
              </p>
            </div>
          </li>
          <li style={liHeadingStyle}>
            <span>Km Limit</span>
            <div style={{ padding: "0px 25px 0px 10px" }}>
              <p style={pTagContentStyle}>
                No of kms in {days} days that can be
                <span style={{ color: "black" }}>{days * 110 } km</span>
              </p>
              <p style={pTagContentStyle}>travelled without extra charges</p>
            </div>
          </li>

          <li style={liHeadingStyle}>
            <span>Excess Km Charges</span>
            <div style={{ padding: "0px 25px 0px 10px" }}>
              <p style={pTagContentStyle}>
                Charges beyond the km limit
                <span style={{ color: "black" }}>₹ 3.0/hr</span>
              </p>
            </div>
          </li>
        </ul>
      </>
    );
  }

  return (
    <>
      <div>
        <div style={{ padding: "10px" }}>
          <h4 style={{ color: "black", paddingBottom: "10px" }}>
            Yamaha Fascino
          </h4>
          <img
            src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/026/medium/Fascino-min_2.png?1519738927"
            alt=""
          />
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
                    <span style={{ color: "black" }}>₹ 20/hr</span>
                  </p>
                  <p style={pTagContentStyle}>
                    Booking Time {"(>24 hrs)"}
                    <span style={{ color: "black" }}>₹ 20/hr</span>
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
                    <span style={{ color: "black" }}>₹ 20/hr</span>
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

        <Button
          sx={{
            width: "100%",
            backgroundColor: "#fed250",
            color: "black",
            fontWeight: "500",
            borderRadius: "0px",
            "&:hover": {
              backgroundColor: "#fed250c9",
            },
          }}
          variant="contained"
        >
          Book Now
        </Button>
      </div>
    </>
  );
};

// import * as React from 'react';

// export default function ColorToggleButton() {

//   return (

//   );
// }
