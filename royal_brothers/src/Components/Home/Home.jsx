import React, { useState } from "react";
import image1 from "./homeImg.png";
import "./Home.css";
import { Link } from "react-router-dom";
export const Home = () => {
  // const [bikes, setBikes] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDDate, setSelectedDDate] = useState("");
  const [selectedDTime, setSelectedDTime] = useState("");

  localStorage.setItem("date", JSON.stringify(selectedDate));
  localStorage.setItem("time", JSON.stringify(selectedTime));
  localStorage.setItem("ddate", JSON.stringify(selectedDDate));
  localStorage.setItem("dtime", JSON.stringify(selectedDTime));
  return (
    <div>
      <img src={image1} className="image1" alt="" />
      <div className="inputBox">
        <h2 className="search">Search your next ride</h2>
        <h4 className="pickup">Pickup</h4>
        <div className="drop_div">
          <input
            className="input_box"
            type="date"
            placeholder="Date"
            onChange={(d) => setSelectedDate(d.target.value)}
            selected={selectedDate}
          />
          <input
            className="input_box"
            type="time"
            placeholder="time"
            onChange={(d) => setSelectedTime(d.target.value)}
            selected={selectedTime}
          />
        </div>
        <h4 className="pickup">Dropoff</h4>
        <div className="drop_div">
          <input
            className="input_box"
            type="date"
            onChange={(d) => setSelectedDDate(d.target.value)}
            selected={selectedDDate}
          />
          <input
            className="input_box"
            type="time"
            onChange={(d) => setSelectedDTime(d.target.value)}
            selected={selectedDTime}
          />
        </div>
        <button className="search_button">
          <Link className="linktag" to="/bookingPage" >Search</Link>
        </button>
      </div>
      <div className="info">
        <img
          style={{ height: "37px" }}
          src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_sanitized-a37325c03fb50fd9b2783d574ba67c40cb7b8a90d5951a85f72095904943e1d6.png"
          alt="img"
        ></img>
        <h6 className="benefits" >
          Sanitized Vehicles
        </h6 >
        <img
          style={{ height: "37px" }}
          src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_insurance-84ee18a118bee4cfc4f774e0dbdb5d24431af458eb583d5d1c5822801e388764.png"
          alt="img"
        ></img>
        <h6 className="benefits" >
          Vehicle Insuarence
        </h6 >
        <img
          style={{ height: "37px" }}
          src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_assistance-ec66ebeeb0ebb01468fc1729165040e172820de83d5037cf47a73f4e19177d68.png"
          alt="img"
        ></img>
        <h6 className="benefits" >
          24/7 Roadside Assistance
        </h6 >
        <img
          style={{ height: "37px" }}
          src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_maintainence-4ac25e7eb9ad6f8b78ec52640a7310d8083a21823e1fb54ca9872076c2bc5f34.png"
          alt="img"
        ></img>
        <h6 className="benefits" >
          Bike Maintainence
        </h6 >
      </div>
      <img className="image1" src="https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/RBX_carousel_one-5e5beb3711f8184ba280e0791b058b8b1b4f03cad772f10b0ab39adfc5d06ec5.jpg" alt="" />
    </div>
  );
};
