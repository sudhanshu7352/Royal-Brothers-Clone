import * as React from "react";
import "./product.css";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { BookedBike } from "./BookedBike";

export const Product = () => {
  const [data, setdata] = React.useState([]);

  
  const handleSort = (dir) => {
    const newdata = [...data]
    if(dir=="asc"){
      newdata.sort((a,b) =>{
        return a.hourly_rate - b.hourly_rate
      })

      setdata([...newdata])
      return
    }
    newdata.sort((a,b) =>{
        return b.hourly_rate - a.hourly_rate
    })
    setdata([...newdata])
      return
  }


  React.useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    axios
      .get("https://royal-brothers.herokuapp.com/bikes")
      .then((res) => setdata(res.data.data));

   
  };

   console.log(data);

  return (
    <div className="mainContainer">
      <div className="headbikes">
        <p>
          Now rent two wheelers for <strong>7 days</strong> at a lower special
          price.&nbsp;
          <span>
            <a href="/bikes">Click here for modified Search</a>
          </span>
        </p>
      </div>
      <div className="sorthead">
        <div>
          <p>Filter</p>
        </div>

        <div id="sortingbtn">
          <button style={{ cursor: "default" }}>
            <strong>Sort by</strong>
          </button>
          <button id="bottomVBtnHover" style={{ color: "#9e9e9e" }}>
            <span>Relevance</span>
          </button>
          <button onClick={() =>handleSort("asc")}id="bottomVBtnHover" style={{ color: "#9e9e9e" }}>
            <span>Price - Low to High</span>
          </button>
          <button onClick={() =>handleSort("dec")} id="bottomVBtnHover" style={{ color: "#9e9e9e" }}>
            <span>Price - High to Low</span>
          </button>
        </div>
      </div>
      <div className="container">
        <div>
          <div className="firstmain">
            <div>
              <h6>Select Date & Time</h6>
              <div className="datetime">
                <div className="Dateandtime">
                  <label>Pickup date</label>
                  <input
                    type={"date"}
                    style={{ width: "90%" }}
                    placeholder={""}
                  />
                </div>

                <div className="Dateandtime">
                  <label>Time</label>
                  <input type={"time"} style={{ width: "100%" }} />
                </div>
              </div>
            </div>

            <div className="datetime">
              <div className="Dateandtime">
                <label>Dropoff date</label>
                <input type={"date"} style={{ width: "90%" }} />
              </div>

              <div className="Dateandtime">
                <label>Time</label>
                <input type={"time"} style={{ width: "100%" }} />
              </div>
            </div>

            <div id="searching">
              <h6>Search Duration</h6>
              <p id="timeHours">3 Hours and 30 Minutes</p>
            </div>

            <div id="searching">
              <h6>Search By Location</h6>
              <div className="header__search">
                <input
                  className="header__searchInput"
                  type="text"
                  placeholder="Search Location"
                />
                <SearchIcon className="header__searchIcon" />
              </div>
            </div>

            <div className="overflow">
              <div>
                <input
                  type="checkbox"
                  value={"Indiranager(near metro station)"}
                />
                &nbsp; Indiranager(near metro station)
              </div>
              <hr />
              <div>
                <input
                  type="checkbox"
                  value={" Yeshwanthpur (BMTC Bus Station)"}
                />
                &nbsp; Yeshwanthpur (BMTC Bus Station)
              </div>
              <hr />
              <div>
                <input
                  type="checkbox"
                  value={"Marathalli CG Clinic (Karthik Nagar)"}
                />
                &nbsp; Marathalli CG Clinic (Karthik Nagar)
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Koramangala"} />
                &nbsp; Koramangala
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"HSR Layout (4th Sector)"} />
                &nbsp; HSR Layout (4th Sector)
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Hennur Lake (Near Axis Bank)"} />
                &nbsp; Hennur Lake (Near Axis Bank)
              </div>
              <hr />
              <div>
                <input
                  type="checkbox"
                  value={"Whitefield Tansi Honda(Hoodi Circle)"}
                />
                &nbsp; Whitefield Tansi Honda(Hoodi Circle)
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Battarahalli (Jyothi Nagar)"} />
                &nbsp; Battarahalli (Jyothi Nagar)
              </div>
              <hr />
            </div>
            <div id="searching">
              <h6>Search By Bike Model</h6>
              <div className="header__search">
                <input
                  className="header__searchInput"
                  type="text"
                  placeholder="Search Bike Model"
                />
                <SearchIcon className="header__searchIcon" />
              </div>
            </div>

            <div className="overflow">
              {data.map((item) => {
                return (
                  <>
                    <div>
                      <input type="checkbox" value={item.name} />
                      &nbsp; {item.name}
                    </div>
                    <hr />
                  </>
                );
              })}

            
            </div>
          </div>

          <div id="apply">
            <button className="applyfilter">Apply Filter</button>
          </div>
        </div>

        {/* right side div start here */}

        <div className="secondmain">
          {localStorage.getItem("bikeDetails") ? (
            <div>
              <BookedBike item={false} />
            </div>
          ) : (
            ""
          )}

          {localStorage.getItem("bikeDetails") ? (
            <>
              <p style={{padding:"4px"}}>Suggested Results</p>
              <hr />
            </>
          ) : (
            ""
          )}

          <div>
            {data.map((e) => {
              return (
                <>
                  <BookedBike item={e}/>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
