import React from 'react'
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const BikeCard = () => {
    const [alignment, setAlignment] = React.useState("hourly");

    const handleChange = (event, newAlignment) => {

     
      setAlignment(newAlignment);
    };

   
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
            boxSizing: "border-box",
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
          {/* <ToggleButton
            sx={
              alignment === "hourly"
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
            value="Hourly"
          >
            Hourly
          </ToggleButton>
          <ToggleButton
            sx={{
              border: "none",
              fontWeight: "500",
              color: "black",
              margin: 0,
              padding: "0px",
            }}
            value="7Days"
          >
            7Days
          </ToggleButton>
          <ToggleButton
            sx={{
              border: "none",
              fontWeight: "500",
              color: "black",
              margin: 0,
              padding: "0px",
            }}
            value="15Days"
          >
            15Days
          </ToggleButton>
          <ToggleButton
            sx={{
              border: "none",
              fontWeight: "500",
              color: "black",
              margin: 0,
              padding: "0px",
            }}
            value="30Days"
          >
            30Days
          </ToggleButton> */}
        </ToggleButtonGroup>
        {/*Mon-Thu
(Min 10 hrs booking)
Booking Time (0- 24 hrs)₹ 20/hr
Booking Time (>24 hrs)₹ 20/hr
Fri-Sun
(Min 24hrs booking)
Booking Time (>24hrs)₹ 20/hr
Extras
Km limit5.0/hr
Excess km charges₹ 4.0/km  */}

        <div>
          <ul style={{ textAlign: "left", paddingLeft: "5px" }}>
            <li style={{ listStyle: "none", color: "black" }}>
              Mon-Tue
              <p style={{ fontSize: "10px", color: "grey" }}>
                (Min 10 hrs booking)
              </p>
              <div style={{ padding: "0px 25px 0px 10px" }}>
                <p
                  style={{
                    listStyle: "none",
                    color: "#746e6e",
                    fontSize: "11px",
                    lineHeight: "2",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  Booking Time (0- 24 hrs)<span>₹ 20/hr</span>
                </p>
                <p
                  style={{
                    listStyle: "none",
                    color: "#746e6e",
                    fontSize: "11px",
                    lineHeight: "2",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  Booking Time {"(>24 hrs)"}<span>₹ 20/hr</span>
                </p>
              </div>
            </li>
            <li style={{ listStyle: "none", color: "black" }}>Fri-Sat</li>
            <li style={{ listStyle: "none", color: "black" }}>Extras</li>
          </ul>
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
}

// import * as React from 'react';


// export default function ColorToggleButton() {
  

//   return (
    
//   );
// }



