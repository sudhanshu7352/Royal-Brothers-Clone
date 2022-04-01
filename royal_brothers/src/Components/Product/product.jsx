import * as React from "react";
import "./Product.css";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";

export const Product = () => {
  const [data, setdata] = React.useState([]);

  React.useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    axios
      .get("https://royalbrothers-backend.herokuapp.com/api/bikes")
      .then((res) => setdata(res.data.bikes));

    console.log(data);
  };

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
          <button id="bottomVBtnHover" style={{ color: "#9e9e9e" }}>
            <span>Price - Low to High</span>
          </button>
          <button id="bottomVBtnHover" style={{ color: "#9e9e9e" }}>
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
                  <input type={"date"} style={{ width: "90%" }} />
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
              <div>
                <input type="checkbox" value={"Yamaha Fascino"} />
                &nbsp; Yamaha Fascino
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"  Aprilia SR 150 (ABS)"} />
                &nbsp; Aprilia SR 150 (ABS)
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Honda Dio"} />
                &nbsp; Honda Dio
              </div>
              <hr />
              <div>
                <input type="checkbox" value={" TVS XL Heavy duty"} />
                &nbsp; TVS XL Heavy duty
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Hero Maestro"} />
                &nbsp; Hero Maestro
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Honda Activa 4G"} />
                &nbsp; Honda Activa 4G
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Honda Activa 5G"} />
                &nbsp; Honda Activa 5G
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Aprilia SR 125"} />
                &nbsp; Aprilia SR 125
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"  TVS Ntorq 125"} />
                &nbsp; TVS Ntorq 125
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Ather 450"} />
                &nbsp; Ather 450
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Pure EV Epluto (electric)"} />
                &nbsp; Pure EV Epluto (electric)
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Honda Activa 6G"} />
                &nbsp; Honda Activa 6G
              </div>
              <hr />
              <div>
                <input
                  type="checkbox"
                  value={"Royal Enfield Himalayan Gravel Grey"}
                />
                &nbsp; Royal Enfield Himalayan Gravel Grey
              </div>
              <hr />
              <div>
                <input
                  type="checkbox"
                  value={"Royal Enfield Classic 350 Reborn"}
                />
                &nbsp; Royal Enfield Classic 350 Reborn
              </div>
              <hr />
              <div>
                <input type="checkbox" value={" Jawa Perak(Single seater)"} />
                &nbsp; Jawa Perak(Single seater)
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Honda CB 200X"} />
                &nbsp;Honda CB 200X
              </div>
              <hr />
              <div>
                <input
                  type="checkbox"
                  value={"Royal Enfield Himalayan BS6 (Tourer Edition)"}
                />
                &nbsp; Royal Enfield Himalayan BS6 (Tourer Edition)
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Honda Dio (BS6)"} />
                &nbsp; Honda Dio (BS6)
              </div>
              <hr />
              <div>
                <input type="checkbox" value={" Honda X-Blade (BS6)"} />
                &nbsp; Honda X-Blade (BS6)
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Hero NYX- Electric"} />
                &nbsp; Hero NYX- Electric
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Hero X-Pulse (BS6)"} />
                &nbsp; Hero X-Pulse (BS6)
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Aprilia SR 160 ABS (BS6)"} />
                &nbsp; Aprilia SR 160 ABS (BS6)
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Honda Grazia 125"} />
                &nbsp;Honda Grazia 125
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"TVS Apache RTR 180 (BS6)"} />
                &nbsp; TVS Apache RTR 180 (BS6)
              </div>
              <hr />
              <div>
                <input type="checkbox" value={" KTM Duke 250 (BS6)"} />
                &nbsp; KTM Duke 250 (BS6)
              </div>
              <hr />
              <div>
                <input
                  type="checkbox"
                  value={"Bajaj Avenger Cruise 220 (BS6)"}
                />
                &nbsp; Bajaj Avenger Cruise 220 (BS6)
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Bajaj Pulsar 250N (BS6)"} />
                &nbsp; Bajaj Pulsar 250N (BS6)
              </div>
              <hr />
              <div>
                <input
                  type="checkbox"
                  value={
                    "Royal Enfield Classic 350 Reborn (Dark Stealth Black)"
                  }
                />
                &nbsp; Royal Enfield Classic 350 Reborn (Dark Stealth Black)
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Ather 450X"} />
                &nbsp; Ather 450X
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Suzuki Access 125"} />
                &nbsp;Suzuki Access 125
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Honda Aviator"} />
                &nbsp; Honda Aviator
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Bajaj Pulsar 250F (BS6)"} />
                &nbsp; Bajaj Pulsar 250F (BS6)
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Honda Activa 3G"} />
                &nbsp; Honda Activa 3G
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Honda CB Hornet 160"} />
                &nbsp; Honda CB Hornet 160
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Yamaha MT 15"} />
                &nbsp; Yamaha MT 15
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Bajaj Pulsar 150 Neon"} />
                &nbsp; Bajaj Pulsar 150 Neon
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Honda X-Blade"} />
                &nbsp;Honda X-Blade
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Yamaha FZ V3 (BS 6)"} />
                &nbsp; Yamaha FZ V3 (BS 6)
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Bajaj Pulsar 150 Neon (BS6)"} />
                &nbsp; Bajaj Pulsar 150 Neon (BS6)
              </div>
              <hr />
              <div>
                <input type="checkbox" value={" TVS Apache RTR 180"} />
                &nbsp; TVS Apache RTR 180
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Yamaha FZ V3"} />
                &nbsp; Yamaha FZ V3
              </div>
              <hr />
              <div>
                <input type="checkbox" value={" Suzuki Gixxer 150"} />
                &nbsp; Suzuki Gixxer 150
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Yezdi Scrambler"} />
                &nbsp; Yezdi Scrambler
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Yamaha FZ"} />
                &nbsp; Yamaha FZ
              </div>
              <hr />
              <div>
                <input
                  type="checkbox"
                  value={"Royal Enfield Desert Storm 500"}
                />
                &nbsp; Royal Enfield Desert Storm 500
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Royal Enfield Himalayan"} />
                &nbsp; Royal Enfield Himalayan
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Royal Enfield Stealth Black"} />
                &nbsp; Royal Enfield Stealth Black
              </div>
              <hr />
              <div>
                <input
                  type="checkbox"
                  value={"Royal Enfield Thunderbird 350X"}
                />
                &nbsp; Royal Enfield Thunderbird 350X
              </div>
              <hr />
              <div>
                <input
                  type="checkbox"
                  value={"Royal Enfield Continental GT 650"}
                />
                &nbsp; Royal Enfield Continental GT 650
              </div>
              <hr />
              <div>
                <input
                  type="checkbox"
                  value={"Royal Enfield Interceptor 650"}
                />
                &nbsp;Royal Enfield Interceptor 650
              </div>
              <hr />
              <div>
                <input
                  type="checkbox"
                  value={"Royal Enfield Thunderbird 350X (ABS)"}
                />
                &nbsp; Royal Enfield Thunderbird 350X (ABS)
              </div>
              <hr />
              <div>
                <input
                  type="checkbox"
                  value={"Royal Enfield Himalayan (BS 6)"}
                />
                &nbsp; Royal Enfield Himalayan (BS 6)
              </div>
              <hr />
              <div>
                <input
                  type="checkbox"
                  value={"Royal Enfield Classic 350 (BS 6)"}
                />
                &nbsp; Royal Enfield Classic 350 (BS 6)
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Honda CB 350"} />
                &nbsp; Honda CB 350
              </div>
              <hr />
              <div>
                <input
                  type="checkbox"
                  value={"Royal Enfield Meteor Supernova 350"}
                />
                &nbsp; Royal Enfield Meteor Supernova 350
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"BMW G310 GS (BS 6)"} />
                &nbsp; BMW G310 GS (BS 6)
              </div>
              <hr />
              <div>
                <input
                  type="checkbox"
                  value={"Bajaj Dominar 400 BS 6 (Tourer Edition)"}
                />
                &nbsp;Bajaj Dominar 400 BS 6 (Tourer Edition)
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"KTM Duke 200 (BS 6)"} />
                &nbsp; KTM Duke 200 (BS 6)
              </div>
              <hr />
              <div>
                <input
                  type="checkbox"
                  value={"Royal Enfield Himalayan Pine Green"}
                />
                &nbsp; Royal Enfield Himalayan Pine Green
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Honda Hornet 2.0"} />
                &nbsp; Honda Hornet 2.0
              </div>
              <hr />
              <div>
                <input
                  type="checkbox"
                  value={"Royal Enfield Meteor Stellar 350"}
                />
                &nbsp; Royal Enfield Meteor Stellar 350
              </div>
              <hr />
              <div>
                <input type="checkbox" value={" Honda CBR 250R"} />
                &nbsp; Honda CBR 250R
              </div>
              <hr />
              <div>
                <input type="checkbox" value={" KTM Duke 200 (ABS)"} />
                &nbsp; KTM Duke 200 (ABS)
              </div>
              <hr />
              <div>
                <input
                  type="checkbox"
                  value={" Royal Enfield Classic 350 Redditch (ABS)"}
                />
                &nbsp; Royal Enfield Classic 350 Redditch (ABS)
              </div>
              <hr />
              <div>
                <input
                  type="checkbox"
                  value={"Royal Enfield Classic 350 Gunmetal grey (ABS)"}
                />
                &nbsp; Royal Enfield Classic 350 Gunmetal grey (ABS)
              </div>
              <hr />
              <div>
                <input
                  type="checkbox"
                  value={"Royal Enfield Meteor Fireball 350"}
                />
                &nbsp; Royal Enfield Meteor Fireball 350
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Suzuki Gixxer 250SF"} />
                &nbsp; Suzuki Gixxer 250SF
              </div>
              <hr />
              <div>
                <input
                  type="checkbox"
                  value={"Royal Enfield Thunderbird 350"}
                />
                &nbsp; Royal Enfield Thunderbird 350
              </div>
              <hr />
              <div>
                <input type="checkbox" value={" Suzuki Gixxer 250"} />
                &nbsp; Suzuki Gixxer 250
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Bajaj Pulsar 150 Neon"} />
                &nbsp; Bajaj Pulsar 150 Neon
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Honda X-Blade"} />
                &nbsp;Honda X-Blade
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Yamaha FZ V3 (BS 6)"} />
                &nbsp; Yamaha FZ V3 (BS 6)
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Bajaj Pulsar 150 Neon (BS6)"} />
                &nbsp; Bajaj Pulsar 150 Neon (BS6)
              </div>
              <hr />
              <div>
                <input type="checkbox" value={" TVS Apache RTR 180"} />
                &nbsp; TVS Apache RTR 180
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Yamaha FZ V3"} />
                &nbsp; Yamaha FZ V3
              </div>
              <hr />
              <div>
                <input type="checkbox" value={" Suzuki Gixxer 150"} />
                &nbsp; Suzuki Gixxer 150
              </div>
              <hr />
              <div>
                <input type="checkbox" value={"Yezdi Scrambler"} />
                &nbsp; Yezdi Scrambler
              </div>
              <hr />
            </div>
          </div>

          <div id="apply">
            <button className="applyfilter">Apply Filter</button>
          </div>
        </div>

        {/* right side div start here */}

        <div className="secondmain">
          <div>
            {data.map((e) => {
              return (
                <div className="mapbikes" key={e._id}>
                  <div>
                    <img
                      className="imgData"
                      src="https://d36g7qg6pk2cm7.cloudfront.net/assets/zero-deposit-8bf3350f651efc75cb1e263459707c81cdd271347d2ba925cd2eb740243474d5.png"
                      alt=""
                      width={"26px"}
                    />
                    <span className="spanZero">zero deposit</span>
                  </div>
                  <br />
                  <h6>{e.model}</h6>
                  <div className="imbikes">
                    {" "}
                    <img src={e.imageUrl} alt="" />{" "}
                  </div>
                  <br />
                  <p className="available">Available at</p> <br />
                  <select>
                    <option value="">Location</option>
                    {e.locations.map((s) => {
                      return <option value="">{s.name}</option>;
                    })}
                  </select>
                  <div className="timingbike">
                    <div>
                      <p className="arrivetime">11:30 am</p>
                      <p className="arrivetime">{new Date().toDateString()}</p>
                    </div>
                    <div className="timingTo">to</div>
                    <div>
                      <p className="arrivetime">10:30 pm</p>
                      <p className="arrivetime">{new Date().toDateString()}</p>
                    </div>
                  </div>
                  <div className="prizebike">
                    <div>
                      <p>₹{e.pricePerHour}</p>
                      <span>(100 KM included)</span>
                    </div>
                    <div>
                      <button>Book</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
